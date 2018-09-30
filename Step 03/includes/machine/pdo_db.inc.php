<?php
try {
  $dns = 'mysql:dbname=lebonjob;host=127.0.0.1:3308';
  $bdd = new PDO($dns,'root','');
} catch (Exception $e){
    echo $e->getMessage();
    http_response_code(400);
} ?>
