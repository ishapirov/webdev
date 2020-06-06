<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Checkerboard</title>
	</head>

	<body>

    <table style="width:300px" cellspacing="1px">
    <?php
    for ($x = 1; $x <= 8; $x++) {
      echo "<tr>";
      for ($y = 1; $y <= 8; $y++) {
        if(($y+$x)%2 == 0){
        echo "<td height=35px width=35px border=1px cellpadding=1px bgcolor=red></td>";
      }
      else{
        echo "<td height=35px width=35px border=1px cellpadding=1px bgcolor=black></td>";
      }
      }
      echo "</tr>";
    }
    ?>
  </table>

	</body>
</html>
