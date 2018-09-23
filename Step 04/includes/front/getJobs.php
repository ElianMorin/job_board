    <?php
    if (!isset($_GET["page"])) {$_GET["page"]=0;}
    if (!isset($_GET["search"])) {$_GET["search"]=false;}
    if (preg_match("/^[0-9]*$/",$_GET["page"])) {
      $page = $_GET["page"];
      ini_set("allow_url_fopen", 1);
      if (!$_GET["search"]) {
      $req = json_decode(get_content('http://127.0.0.1:3000/getJobs/page?page='.$page));
      }
      foreach($req as $rep) {
        echo "<div class='col s12 m12 l12'>
                <div id='job-".$rep->id."' class='card'>
                  <div class='card-content'>
                    <span class='card-title' jobid='job-".$rep->id."'>".$rep->titre."</span>
                    <p>".$rep->description."</p>
                  </div>
                  <div class=\"card-action\">
                    <a href=\"\" class=\"activator\" jobid='job-".$rep->id."'>Learn more</a>
                  </div>
                  <div class=\"card-reveal\"><span class=\"card-title grey-text desactivator text-darken-4\" jobid='job-".$rep->id."' action='close'>".$rep->titre."<i class=\"material-icons right\">close</i></span>
      <p jobid='job-".$rep->id."' class='getjobs-tofill'></p></div>
                </div>
              </div>";
      }
      // Adding the pagination //
      echo "
      <div class=\"responsive center-align\">
        <ul class=\"pagination\">
          <li class=\"disabled\"><a href=\"#!\"><i class=\"material-icons\">chevron_left</i></a></li>
          <li class=\"active\"><a href=\"#!\">".$page."</a></li>
          <li class=\"waves-effect\"><a href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></li>
        </ul>
      </div>
      ";
    } else {
      echo "<div class=\"row\" id=\"alert_box\">
              <div class=\"col s12 m12\">
                <div class=\"card red darken-1\">
                  <div class=\"col s12 m10\">
                    <div class=\"card-content white-text\">
                      <h3>Oops...</h3>
                      <p>The page number is not valid. Please try again.</p>
                  </div>
                </div>
              </div>
            </div>
          <div>";
    }

    function get_content($URL){
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_URL, $URL);
      $data = curl_exec($ch);
      curl_close($ch);
      return $data;
    }
    ?>
