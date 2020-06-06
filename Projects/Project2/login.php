<?php
session_start();
if($_SESSION["error"]){
  echo "<h1>";
  echo $_SESSION["error"];
  echo "</h1>";
}
?>

<html>
   <head>
      <title>Login</title>
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>
   <body>

      <h1>Login</h1><br>
         <form method="post" action="validateLogin.php">
              <label>Username</label>
              <input type="text" name="username" required>
              <?php
               if($postback && strlen($username) < 1) {
                      echo "Please enter your username.";
                    }
               ?> <br>
              <label>Password:</label>
              <input type="password" name="password" required>
              <?php
               if($postback && strlen($password) < 1) {
                      echo "Please enter your password.";
                    }
               ?><br>

              <input type="hidden" name="postback" value=<?php echo $postback ?>>
              <label> </label>
              <button type="submit">Login</button>
         </form>

         <form method="get" action="register.php">
           <button type="submit">Don't have an account? Sign up here</button>
         </form>

   </body>
</html>
