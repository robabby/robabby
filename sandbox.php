<?php 
  $path2root = ".";
  ob_start();
  try {
  include('./assets/inc/title.inc.php'); 
?>
<!doctype html>
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
</head>
<body id="sandbox">
<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->
<!-- ## HEADER & NAV ## -->
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->
<div class="hero-unit">
  <div class="container">
    <div class="row-fluid">
      <div class="span12">
        <div class="row-fluid">
          <h1>The Sandbox</h1>
          <p>Remember how much fun we all used to have playing in the sandbox as a kid?  No? Well I do, and I had a blast!  This page is herby dedicated to all of the fun, new interesting Sand Castles that I love to build from time to time.</p>
          <p>Please keep in mind that these are experiments only.  Do not expect anything to be completely finished, or perfect.  Once a project is finished, I will publish it to <a href="http://github.com/stat30fbliss" title="My GitHub Page">GitHub</a> for you to grab a copy of the .zip file.</p>
          <p>Cheers!</p>
        </div><!-- row-fluid -->
      </div><!-- .span -->
    </div><!-- .row-fluid -->
  </div><!-- .container -->
</div><!-- .hero-unit -->

<div role="main" id="container" class="container main">
  <div class="row">

    <div class="span6">
      <div class="well">
        <h3><a href="/map.php" title="">Google Map</a></h3>
        <p>A basic implementation of the Google Maps API v3 with street view.</p>
        <a class="btn btn-inverse btn-large" href="/map.php" title="">View Project</a>
      </div><!-- .well -->
    </div><!-- .span -->

    <div class="span6">
      <div class="well">
        <h3><a href="/geolocate.php" title="">Geolocate</a></h3>
        <p>A more advanced map with Geolocation, and a form to email your location.</p>
        <a class="btn btn-inverse btn-large" href="/geolocate.php" title="">View Project</a>
      </div><!-- span -->
    </div><!-- .well -->

    <div class="span6">
      <div class="well">
        <h3><a href="/outer_space.php" title="">Outer Space Concept</a></h3>
        <p>Spinning planets and flickering stars achieved entirely through CSS3. <b>WebKit only</b>.</p>
        <a class="btn btn-inverse btn-large" href="/outer_space.php" title="">View Project</a>
      </div><!-- span -->
    </div><!-- .well -->

    <div class="span6">
      <div class="well">
        <h3><a href="drag_drop.php" title="">HTML5 Drag &amp; Drop</a></h3>
        <p>Drag a JPEG or PNG image file over the dashed area, and it will upload to the file.</p>
        <a class="btn btn-inverse btn-large" href="/drag_drop.php" title="">View Project</a>
      </div><!-- span -->
    </div><!-- .well -->

  </div><!-- .row -->
</div><!-- #container -->

<br />
<br />

  <?php include('./assets/inc/footer.inc.php'); ?>
</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header('Location: error.php');
  }
  ob_end_flush();
?>