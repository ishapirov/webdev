<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Arrays and Functions</title>
	</head>

	<body>

  <?php

  $month = array ('January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December');
    for ($x = 0; $x < count($month); $x++) {
      print ($month[$x]." ");
    }
    echo "<br>";
    foreach($month as $x) {
      print ($x." ");
    }
    echo "<br>";
    sort($month);
    for ($x = 0; $x < count($month); $x++) {
      print ($month[$x]." ");
    }
    echo "<br>";
    foreach($month as $x) {
      print ($x." ");
  }



  ?>

	</body>
</html>
