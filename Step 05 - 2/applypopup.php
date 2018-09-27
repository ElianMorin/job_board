<html>
    <head>
        <meta charset="utf-8"/>
        <?php header('Access-Control-Allow-Origin: *'); ?>
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
             <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
             <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
             <script type="text/javascript" src="js/constant_urlAPI.js"></script>
             <script type="text/javascript" src="js/content.js"></script>
             <link rel="stylesheet" href="css/content.css">
             <link rel="stylesheet" href="css/navbar.css">
             <link rel="stylesheet" href="css/header.css">
             <title>LeBonJob</title>
             <script>

  $(document).ready(function(){
    $('.modal').modal();
    var instance = M.Modal.getInstance($(".modal").modal());
    instance.open();
  });
             </script>
    </head>
    <body>
      <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
    </body>
</html>
