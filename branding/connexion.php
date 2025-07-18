
<?php 
$servername = "localhost";
$username = "root";
$password = "";
$database="entreprise";

$connexion= mysqli_connect($servername, $username, $password, $database);

 if(mysqli_connect_errno()){
    echo 'connexion error';
 }

?>

