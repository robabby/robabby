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
  <style>
  #sandbox .hero-unit {
    border-radius:0px;
    overflow: hidden;
    box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, .25);
    border-bottom:8px solid #555;
  }
  #sandbox .hero-unit h1 {
    color:#aaa;
    text-shadow:0px 1px 2px #fff;
    margin-bottom:15px;
  }
  #sandbox .hero-unit a {
    text-decoration:underline;
  }
  #sandbox .hero-unit img {
    margin:0 0 0 25px;
    box-shadow:0px 0px 10px rgba(0, 0, 0, .6);
    -webkit-transition: all .25s ease-in-out;
    -moz-transition: all .25s ease-in-out;
    -ms-transition: all .25s ease-in-out;
    -o-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
  }
  #sandbox .hero-unit img:hover {
    -moz-transform: scale(1.1) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    -webkit-transform: scale(1.1) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    -o-transform: scale(1.1) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    -ms-transform: scale(1.1) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    transform: scale(1.1) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
  }
  #sandbox .well {
    border-radius:0px;
    box-shadow:inset 0px 0px 7px 0px rgba(0, 0, 0, .5);
    border:3px solid #555;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
  }
  #sandbox .well:hover {
    box-shadow:inset 0px 0px 15px 2px rgba(0, 0, 0, .6);
  }
  #sandbox .well h3 {
    font-size:25px;
    line-height:120%;
    margin-bottom:10px;
  }
  #sandbox .well p {
    font-size:16px;
    line-height:120%;
  }
  #sandbox .main .well .btn {
    position:relative;
    left:-19px;
    bottom:-19px;
    width:102%;
    border-radius:0px;
  }
  #sandbox .calvin {
    padding:10px;
    border-radius:3px;
    background: rgba(25, 175, 255, .5);
  }
  </style>
</head>
<body id="sandbox">

<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## HEADER & NAV ## -->
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<div role="main" id="container" class="container main">
  <br>
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