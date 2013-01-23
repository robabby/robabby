<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
  <style>
  .hero-unit {
    border-radius:0px;
  }
  .hero-unit .btn {
    border-radius:0px;
  }
  </style>
</head>
<<<<<<< HEAD
<body id="thank_you">
=======
<body id="blank">
<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
     chromium.org/developers/how-tos/chrome-frame-getting-started -->
<!--[if lt IE 9]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<<<<<<< HEAD
<!-- ## HEADER & NAV ## -->
=======
<!-- ## HEADER & NAV ## --
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
  <br />
  <div class="hero-unit">
    <h1>Thank You!</h1>
      <p>I will be sure to get back to you shortly. <!--In the meantime, check out some of my favorite backgrounds from <a href="http://desktoppr.co">Desktoppr.co</a>--></p>
      <br />
<<<<<<< HEAD
      <p><a class="btn btn-inverse btn-large" href="index.php">Back to Home</a></p>
=======
      <p><a class="btn btn-inverse btn-large" href="index.php">Back to Home &raquo;</a></p>
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
  </div>

</div><!-- .container -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include("$path2root/assets/inc/footer.inc.php"); ?>
<!-- ## FOOTER ## -->

</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header("Location: $path2root/error.php");
  }
  ob_end_flush();
?>