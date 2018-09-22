<html>
    <head>
        <meta charset="utf-8"/>
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
             <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
             <script type="text/javascript" src="js/content.js"></script>
             <link rel="stylesheet" href="css/content.css">
             <link rel="stylesheet" href="css/navbar.css">
             <link rel="stylesheet" href="css/header.css">
             <title>LeBonJob</title>
    </head>
    <body>
      <?php include('includes/front/header.php');?>
      <div class="row">
        <?php include('includes/front/navbar.php');?>
        <div class="col s12 m12 l9 container">
          <div class="row content">
            <?php include('includes/front/getJobs.php');?>
          </div>
        </div>
      </div>
      <footer>
        <div class="back-panel blue lighten-3 center-align">
          <p class="white-text center-align text-white"><i>"À force de travail et de recherches on atteint la perfection."</i><p>
        </div>
      </footer>
    </body>
</html>
