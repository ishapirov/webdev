<html>
   <head>
      <title>Game Over Keep Case</title>
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>
   <body>
     <?php session_start();
        $case = $_SESSION["swapCase"];
        $caseValues = $_SESSION["caseValues"];
        echo '<h1> Congratulations! You won $'. $_SESSION["ownerCaseValue"] . '!</h1>';
        echo '<h3> The other case had $'.$caseValues[$case].'</h3>';
         session_destroy();
     ?>
   </body>
</html>
