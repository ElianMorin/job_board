<div id="modal1" class="modal">
  <script>

  $(document).ready(function(){
  $('.modal').modal();
  var instance = M.Modal.getInstance($(".modal").modal());
  instance.open();
  });
  </script>
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
  <input type="hidden" name="to" value="<?php echo $_GET["tosend"];?>">
  <input type="submit" value="Envoyer">
  </form>
  <script type="text/javascript">
    $("#modal1 form").submit(function(e) {
      e.preventDefault();
      var firstname,lastname=" ",age,birthdate,description_head="Informations à compléter",description_skills="Le profil n'est pas complet.",description_experience="Le profil n'est pas complet",
      isActive=true,isPro=false,mail,password,tel,image_src="";

      var message, from, to;
      $(this).children().find("input").each((index, element) => {
        if ($(element).attr("name") == "firstname") firstname = $(element).val();
        if ($(element).attr("name") == "password") password = $(element).val();
        if ($(element).attr("name") == "numero") tel = $(element).val();
        if ($(element).attr("name") == "email") mail = $(element).val();
        if ($(element).attr("name") == "message") message = $(element).val();
        if ($(element).attr("name") == "to") to = $(element).val();
      });
    });
  </script>
</div>
