<div id="modal1" class="modal">
  <script>

$(document).ready(function(){
$('.modal').modal();
var instance = M.Modal.getInstance($(".modal").modal());
instance.open();
});
  </script>
<h1 class="center-align">Contact</h1>
  <form action="/action_page.php">
  <label for="fname">Nom & prénom</label>
  <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom">

  <label for="subject">Message</label>
  <textarea id="message" name="message" placeholder="Votre message" style="height:200px"></textarea>

  <input type="submit" value="Envoyer">
  </form>
</div>
