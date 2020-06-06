<html>
   <head>
      <title>Game Over Swap Case</title>
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>
   <body>
     <?php
        session_start();
        $case = $_SESSION["swapCase"];
        $caseValues = $_SESSION["caseValues"];
        echo '<h1> Congratulations! You won $'. $caseValues[$case] . '!</h1>';
        echo '<h3> Your original case had $'.$_SESSION["ownerCaseValue"].'</h3>';
        session_destroy();
     ?>
   </body>
</html>
