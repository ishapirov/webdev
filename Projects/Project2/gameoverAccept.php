<html>
   <head>
      <title>Game Over Accept Offer</title>
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>
   <body>
     <?php session_start();
     $amount = $_SESSION["offerAmount"];
     echo '<h1> Congratulations! You won $'. round($amount, 2) . '!</h1>';
     echo '<h3> Your original case had $'.$_SESSION["ownerCaseValue"].'</h3>';
     session_destroy();
     ?>
   </body>
</html>
