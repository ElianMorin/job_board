    <?php
    if (!isset($_GET["page"])) {$_GET["page"]=0;}
    if (!isset($_GET["search"])) {$_GET["search"]=false;}
    if (preg_match("/^[0-9]*$/",$_GET["page"])) {
      $page = $_GET["page"];
      ini_set("allow_url_fopen", 1);
      try {
        require('includes/machine/api_listener.php');
      } catch(Exception $e) {
        echo "Une erreur s'est produite. Veuillez réessayer plus tard.";
        exit();
      }
      $isAlive = callapi('');
      if (!$isAlive) {
        echo "<div class='col s12 m12 l12'>
                <div class=\"msg msg-alert z-depth-3\">Impossible de se connecter à l'API pour le moment. Réessayez plus tard</div>
                <div class=\"msg msg-info z-depth-3\">Epitech : lancer d'abord le serveur node.js dans le dossier _api_server</div>
              </div>";
        exit();
      }
      if (!$_GET["search"]) {
      $req = json_decode(callapi('getjobs?page='.$page));
      }
      if (isset($req)) {
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
      } else {
        echo "<div class='col s12 m12 l12'>
                <div class=\"msg msg-alert z-depth-3\">Impossible de se connecter à l'API pour le moment. Réessayez plus tard</div>
                <div class=\"msg msg-info z-depth-3\">Epitech : lancer d'abord le serveur node.js dans le dossier _api_server</div>
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
