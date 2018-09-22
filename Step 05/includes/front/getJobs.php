    <?php
    if (!isset($_GET["page"])) {$_GET["page"]=0;}
    if (preg_match("/^[0-9]*$/",$_GET["page"])) {
      $displayPerPage = 15;
      $page = $_GET["page"];
      $minLim = $displayPerPage*$page;
      $maxLim = $displayPerPage*($page+1);
      require('includes/machine/pdo_db.inc.php');
      $req = $bdd->prepare("SELECT * FROM job_advertisements ORDER BY date_creation DESC LIMIT $minLim, $maxLim");
      $req->execute();
      while($rep = $req->fetch()) {
        echo "<div class='col s12 m12 l12'>
                <div id='job-".$rep["id"]."' class='card'>
                  <div class='card-content'>
                    <span class='card-title' jobid='job-".$rep["id"]."'>".utf8_encode($rep["titre"])."</span>
                    <p>".utf8_encode($rep["description"])."</p>
                  </div>
                  <div class=\"card-action\">
                    <a href=\"\" class=\"activator\" jobid='job-".$rep["id"]."'>Learn more</a>
                  </div>
                  <div class=\"card-reveal\"><span class=\"card-title grey-text desactivator text-darken-4\" jobid='job-".$rep["id"]."' action='close'>".utf8_encode($rep["titre"])."<i class=\"material-icons right\">close</i></span>
                    <p>".utf8_encode($rep["description_long"])."</p>
                      <a style=\"position: absolute; bottom: 20pt; right: 20pt;\" href=\"\" jobid='job-".$rep["id"]."'><h5>Apply</h5></a>
                  </div>
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
    ?>
