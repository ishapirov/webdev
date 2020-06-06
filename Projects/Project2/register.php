<html>
   <head>
      <title>Register</title>
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>
   <body>

     <h1>Register</h1><br>
         <form method="post" action="registerUser.php">
              <label>Username</label>
              <input type="text" name="username" required>
              <?php
               if($postback && strlen($username) < 1) {
                      echo "Please enter your username.";
                    }
               ?> <br>
              <label>Password:</label>
              <input type="text" name="password" required>
              <?php
               if($postback && strlen($password) < 1) {
                      echo "Please enter your password.";
                    }
               ?><br>

              <input type="hidden" name="postback" value=<?php echo $postback ?>>
              <label> </label>
              <button type="submit">Register</button>
         </form>

         <form method="get" action="login.php">
           <button type="submit">Already have an account? Login here</button>
         </form>

   </body>
</html>
