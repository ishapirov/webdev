<html>
   <head>
      <title>Game</title>
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>
   <body>
     <?php session_start();

           if(isset($_GET["caseSelected"])){
            $case = $_GET["caseSelected"];
            $_SESSION["caseSelected"] = $case-1;
            $_SESSION["turn"] = 0;
            $currentCases = $_SESSION["currentCases"];
            $currentCases[$case-1] = 1;
            $_SESSION["currentCases"] = $currentCases;
            $caseValues = $_SESSION["caseValues"];
            $ownerCase = $_SESSION["caseSelected"];
            $_SESSION["ownerCaseValue"] = $caseValues[$ownerCase];
           }

           $currentCases = $_SESSION["currentCases"];
           if(isset($_GET["caseSelect"])){
             $valSelected = intval($_GET["caseSelect"]);
             $currentCases[$valSelected-1] = 1;
             $caseValues = $_SESSION["caseValues"];
             $valueOpened = $caseValues[$valSelected-1];
             echo '<h2>The case you opened had $'.$valueOpened.'</h2>';
             $_SESSION["currentCases"] = $currentCases;
           }


             if($_SESSION["turn"] == 5 || $_SESSION["turn"] == 11 || $_SESSION["turn"] == 17 || $_SESSION["turn"] == 23 || $_SESSION["turn"] == 27 || $_SESSION["turn"] == 29){
               $_SESSION["offer"] = 1;
             }
             else {
               $_SESSION["offer"] = 0;
             }
             if($_SESSION["turn"] == 30){
               $_SESSION["finalRound"] = 1;
             }
             else {
               $_SESSION["finalRound"] = 0;
             }
             $_SESSION["turn"] = $_SESSION["turn"] + 1;


            if($_SESSION["offer"] == 1)
            {
              offer();
            }
            elseif ($_SESSION["finalRound"] == 1) {
              finalRound();
            }
            else {
              nextTurn();
            }




           function nextTurn(){
              $caseOfUser = intval($_SESSION["caseSelected"]) +1;
              echo '<h2> You have selected case ' . $caseOfUser . '</h2>';
              echo '<h2> Select one of the available cases </h2>';
              echo '<form method="get" action="game.php">';
              $currentCases = $_SESSION["currentCases"];

              for ($x = 0;$x<26;$x++){
                if($currentCases[$x] == 0){
                      $caseNumber = $x + 1;
                      echo '<input type="radio" id="'.
                      $caseNumber.
                      '" name="caseSelect" value="'.
                      $caseNumber.
                      '" required> <label for="'.
                      $caseNumber.
                      '">'.
                      $caseNumber.
                      '</label><br>';
                    }
              }
              echo '<button type="submit">Submit</button>';
              echo '</form>';

           }

           function offer(){
              echo '<h2> The Banker if making you an offer.</h2>';
              $offer = calculateOffer();
              echo '<h2> Do you accept the offer of $'. round($offer, 2) . '? </h2>';
              $_SESSION["offerAmount"] = $offer;
              $_SESSION["offer"] = 0;
              echo '<form method="get" action="gameoverAccept.php">
                    <button type="submit">Yes</button>
                    </form>';
              echo '<form method="get" action="game.php">
                    <button type="submit">No</button>
                    </form>';
            }

            function finalRound(){

              $otherCase = 1;
              $cases = $_SESSION["currentCases"];

              for($x = 0; $x<26;$x++){
                if($cases[$x] == 0)
                {
                  $otherCase = $x;
                }
              }

              $_SESSION["swapCase"] = $otherCase;

              echo '<h2> Would you like to open your case or swap cases with the remaining one?</h2>';
              echo '<form method="get" action="gameoverSwap.php">
                    <button type="submit">Swap</button>
                    </form>';
              echo '<form method="get" action="gameoverKeep.php">
                    <button type="submit">Open my Case</button>
                    </form>';
            }

            function calculateOffer(){
              $cases = $_SESSION["currentCases"];
              $caseValues = $_SESSION["caseValues"];
              $sum = 0;
              $caseClosed = 0;
              for($x = 0; $x<26;$x++){
                if($cases[$x] == 0)
                {
                  $sum += $caseValues[$x];
                  $caseClosed++;
                }
              }
              return $sum/$caseClosed;
            }

           ?>

   </body>
</html>
