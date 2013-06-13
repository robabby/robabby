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
<body id="thank_you">
<!-- ## HEADER & NAV ## -->
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->
<div class="container">
  <br />
  <div class="hero-unit">
    <h1>Thank You!</h1>
      <p>I will be sure to get back to you shortly. <!--In the meantime, check out some of my favorite backgrounds from <a href="http://desktoppr.co">Desktoppr.co</a>--></p>
      <br />
      <p><a class="btn btn-inverse btn-large" href="index.php">Back to Home</a></p>
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