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
             <link rel="stylesheet" href="css/applypopupconnect.css">
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
        <h3 class="center-align">Contact/Inscription</h3>
          <form action="/action_page.php">
          <label for="fname">Nom & prénom</label>
          <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom">

          <label for="sujet">Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="Votre mot de passe">

          <label for="sujet">Numéro de téléphone</label>
          <input type="tel" id="numero" name="numero" placeholder="Votre numéro de téléphone">

          <label for="emailAddress">Email</label>
          <input id="emailAddress" type="email" name="email" placeholder="Votre email">

          <label for="subject">Message</label>
          <textarea id="message" name="message" placeholder="Votre message" style="height:200px"></textarea>

          <input type="submit" value="Envoyer">
          </form>
        </div>
    </body>
</html>
