
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Charlie</title>
	</head>

	<body>

    <h1>
    <?php
    function isBitten(){
      if(rand(1,2) == 1)
      {
        print "Charlie ate my lunch!";
      }
      else {
      print "Charlie did not eat my lunch!";
      }
    }

    isBitten();
    ?>
  </h1>

	</body>
</html>
