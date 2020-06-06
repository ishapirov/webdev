<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Random Number</title>
    </head>
    <body>
        <p>
            <?php


            function triangle($num) {
              for ($x = 1; $x <= $num; $x++) {
                for ($y = 1; $y <= $x; $y++) {
                  echo "*";
                }
                echo "<br>";
              }
            }

            function word_count($sentence) {
              $numword = 0;
              for ($x = 0; $x < strlen($sentence); $x++){
                if($sentence[$x] == " ") {
                  $numword ++;
                }
              }
              return $numword + 1;
            }

            function countWords($str) {
              $strl = strtolower($str);
              $arr = explode(" ", $strl);
              $arrasso = array();
              
              for ($x = 0; $x < count($arr); $x++){
                $arrasso[$arr[$x]] = 0;
              }

              for ($x = 0; $x < count($arr); $x++){
                $arrasso[$arr[$x]] = $arrasso[$arr[$x]] + 1;
              }

              foreach($arrasso as $x => $x_value) {
                echo "Word=" . $x . ", Num Appearances= " . $x_value;
                echo "<br>";
            }
                 
            }

            function removeChar($sentence, $ch) {

              for ($x = 1; $x < strlen($sentence); $x++){
                if($sentence[$x] == $ch){
                  $sentence = substr($sentence,0,$x).substr($sentence,$x+1,strlen($sentence));
                }
              }

              return $sentence;
            }

            echo "Exercise 1<br>";
            echo "Hello world!<br>";

            echo "<br>Exercise 2<br>";
            for ($x = 1; $x <= 5; $x++) {
              for ($y = 1; $y <= $x; $y++) {
                echo "*";
              }
              echo "<br>";
            }
            echo "<br>Exercise 3<br>";
            triangle(10);

            echo "<br>Exercise 4<br>";
            echo "hello, how are you? has:";
            echo word_count("hello, how are you?");
            echo " words<br>";

            echo "<br>Exercise 5<br>";
            echo "The the the number of times times each word appears in this this sentence is is: <br>";
            countWords("The the the number of times times each word appears in this this sentence is is"); 

            echo "<br>Exercise 6<br>";
            $removed = removeChar("Summer is here!","e");
            echo $removed;

            ?>
        </p>
    </body>
</html>
