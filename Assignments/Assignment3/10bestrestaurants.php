
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>10 Best Restaurants</title>
	</head>

	<body>

    <p>
    <?php

    function byPrice($array){
      asort($array);
      return $array;
    }

    function byName($array){
      ksort($array);
      return $array;
    }


      $rest = array("Chama Gaucha"=>"40.25", "Aviva by Kameel"=>"15.00", "Bone's Restaurant"=>"65.00"
      , "Umi's Suchi Buckhead"=>"40.50", "Fandangles"=>"30.00", "Capital Grille"=>"60.50"
    , "Canoe"=>"35.50", "One Flew South"=>"21.00", "Fox Bros. BBQ"=>"15.00", "South City Kitchen Midtown"=>"29.00");


		echo "<table style=\"width:300px\" cellspacing=\"1px\">";
		echo "<tr>";
		echo "<td>";
		echo "<p>Name</p>";
		echo "</td>";
		echo "<td>";
		echo "<p>Price</p>";
		echo "</td>";
		echo "</tr>";
    foreach($rest as $x => $x_value) {
			echo "<tr>";
      echo "<td>";
			echo $x;
			echo "</td>";
			echo "<td>";
			echo $x_value;
			echo "</td>";
      echo "</tr>";
    }
    echo "<br><h1>By Price </h2>";
    $price = byPrice($rest);
    foreach($price as $x => $x_value) {
      echo $x . "- Average Cost $" . $x_value;
      echo "<br>";
    }
    echo "<br><h1>By Name </h2>";

    $name = byName($rest);
    foreach($name as $x => $x_value) {
      echo $x . "- Average Cost $" . $x_value;
      echo "<br>";
    }
			echo "<h1>Restaurant Table</h1>";
    ?>
  </p>

	</body>
</html>
