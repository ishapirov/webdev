<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
  <title>Form Data</title>
</head>
<body>

<h1>Ivan Fav Restaurant</h1>
<h2>Order Results
<br>


<h3>Order processed on <?php
echo date("Y-m-d");
?> at <?php
echo date("h:i:sa");
?></h1><br>
<p>Plates ordered: <?php
$numplates = $_POST["Plate1"] + $_POST["Plate2"] +$_POST["Plate3"];
print $numplates ?></p>
<p>Subtotal: <?php
$price = $_POST["Plate1"]*2100 + $_POST["Plate2"]*199 +$_POST["Plate3"]*899;
print $price ?></p>
<p>Total including tax: <?php $price = ($_POST["Plate1"]*2100 + $_POST["Plate2"]*199 +$_POST["Plate3"]*899);
$total = $price + $price*.1;
print $total ?></p>
<br>
<br>
<p>Customer referred by <?php
if ($_POST['find'] == "a"){
print "Google";
}
if ($_POST['find'] == "b"){
print "Web ad";
}
if ($_POST['find'] == "c"){
print "Tv ad";
}
if ($_POST['find'] == "d"){
print"Word of Mouth";
}?></p>


</body>
</html>
