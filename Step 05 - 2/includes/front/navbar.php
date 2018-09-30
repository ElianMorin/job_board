<?php
  if (isset($_GET["logged"])) {
    echo <<<EOF
    <div class="col s12 m12 l3 menuleft">
      <ul class="sidenav color_nav center-align" style="transform: translateX(0px);">
        <li class="logo profil_connect"><a id="logo-container" href="/" class="brand-logo"></a>
          <h5>Vous êtes bien connecté !</h5>
        </li>
        <li class="search">
          <h5>Recherchez un job</h5>
          <div class="search-wrapper">
            <input id="search" type="text" class="nav_search" placeholder="Search"><i class="material-icons">search</i>
          </div>
        </li>
        <li class="nav_hashtags">
          <div class="nav_hashtags_content">
            <p>#informaticien</p><p>#Boulanger</p><p>#Carrosier</p><p>#sur paris..</p>
          </div>
        </li>
      </ul>
    </div>
EOF;
  } else {
    echo <<<EOF
    <div class="col s12 m12 l3 menuleft">
      <ul class="sidenav color_nav center-align" style="transform: translateX(0px);">
        <li class="logo profil_connect"><a id="logo-container" href="/" class="brand-logo"></a>
          <img src="css/image/default_profil_pict.png" class="responsive-img circle">
          <h5>Vous n'êtes pas connecté</h5>
        </li>
        <li class="search">
          <h5>Recherchez un job</h5>
          <div class="search-wrapper">
            <input id="search" type="text" class="nav_search" placeholder="Search"><i class="material-icons">search</i>
          </div>
        </li>
        <li class="nav_hashtags">
          <div class="nav_hashtags_content">
            <p>#informaticien</p><p>#Boulanger</p><p>#Carrosier</p><p>#sur paris..</p>
          </div>
        </li>
      </ul>
    </div>
EOF;
  }
?>
