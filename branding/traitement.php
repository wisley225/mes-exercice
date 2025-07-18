 <?php

 // Désactiver l'affichage des warnings et des notices
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);
ini_set('display_errors', 0); // Désactiver l'affichage des erreurs


require_once "connexion.php";

 $fullname=$email="";
 $fullname_error=$email_error= "";


 if(isset($_POST['submit'])){
  

    function test_input($data) {
     $data=trim($data);
     $data=stripcslashes($data);
     $data=htmlspecialchars($data);

     return $data;
 }

 if (empty($_POST['fullname'])) {
  $fullname_error= ' votre nom et prenom sont obligatoire';
 }
 else {
     $fullname=test_input($_POST['fullname']);
     if (!preg_match("/^[A-Za-z\- ]{2,50}$/",$fullname)) {
         $fullname_error="entrez un nom et prenom valide svp ";
     }
 }


 if (empty($_POST["email"])) {

 $email_error= "le champ nom est obligatoire";
 }
 else {
    $email=test_input($_POST["email"]);

   if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

       $email_error= "ce mail est invalide";
   }
   
 }

 

 $sql="SELECT * FROM user WHERE  email='$email'";

 if (!$result = mysqli_query($connexion, $sql)) {
     die('Erreur SQL : ' . mysqli_error($connexion));
 }

  $result=mysqli_query($connexion,$sql);


 $row_compte=mysqli_num_rows($result);

 if($row_compte>0){
     $email_error= " ce email existe deja veillez essayez un autre svp";
 }


     if (empty($email_error) && empty($fullname_error) ) {

            
             $sql="INSERT INTO user(email, fullname ) VALUES(?,?)";
             $connect=mysqli_stmt_init($connexion);
             $base=mysqli_stmt_prepare($connect,$sql);
        
         }
        
         if ($base) {
                 mysqli_stmt_bind_param($connect,"ss" ,$email,$fullname);
                 mysqli_stmt_execute($connect);
                
             }
        

           else {
    // Si la préparation échoue, afficher un message d'erreur
    echo "";
}

  
     }
?> 

