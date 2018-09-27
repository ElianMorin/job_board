<?php
/*
 *  API_LISTENER - 2018 jlegay emorrin
 * - Appels à l'API sont passés via PHP pour éviter l'erreur CORS
 * - Juste fonction mirroir à l'API.
 */
function callapi($query) {
  return get_content($query);
}
function get_content($query){
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_URL, "http://localhost:3000/".$query);
  $data = curl_exec($ch);
  curl_close($ch);
  return $data;
}
?>
