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
    box-shadow:inset 0px 0px 5px 0px rgba(0, 0, 0, .75);
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

<!-- ## HEADER & NAV ## --
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<div class="hero-unit">
  <div class="container">
    <div class="row-fluid">
      <div class="span12">
        <div class="row-fluid">
          <img class="calvin pull-right" src="/images/calvin_sandbox.jpg" />
          <h1>The Sandbox</h1>
          <p>Remember how much fun we all used to have playing in the sandbox as a kid?  No? Well I do, and I had a blast!  This page is herby dedicated to all of the fun, new interesting Sand Castles that I love to build from time to time.</p>
          <p>Please keep in mind that these are experiments only.  Do not expect anything to be completely finished, or perfect.  Once a project is finished, I will publish it to <a href="http://github.com/stat30fbliss" title="My GitHub Page">GitHub</a> for you to grab a copy of the .zip file.</p>
          <p>Cheers!</p>
        </div>
      </div><!-- .hero-unit -->
    </div><!-- .span8 -->
  </div><!-- .row -->
</div>

<div role="main" id="container" class="container main">
  <div class="row">
    <!--
    <div class="span12">
      <h2>APIs <small>Google, YouTube, Twitter, &amp; etc.</small></h2>
      <hr />
    </div><!-- .span -->

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

    <!--
    <div class="span3">
      <div class="well">
        <h3><a href="/youtube.php" title="">YouTube API</a></h3>
        <p>Introductory implementation of the YouTube video player and search API.</p>
        <a class="btn btn-inverse btn-large" href="/youtube.php" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well -->

    <!--
    <div class="span12">
      <h2>Websites <small>Layouts and concepts</small></h2>
      <hr />
    </div><!-- .span -->

    <!--
    <div class="span4">
      <div class="well">
        <h3><a href="/isotope.php" title="">Isotope Site</a></h3>
        <p>Fun with the isotope jQuery plugin.  Fluid layout excitement for the whole family!</p>
        <a class="btn btn-inverse btn-large" href="/isotope.php" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well -->

    <div class="span6">
      <div class="well">
        <h3><a href="/outer_space.php" title="">Outer Space Concept</a></h3>
        <p>Spinning planets and flickering stars achieved entirely through CSS3. WebKit only.</p>
        <a class="btn btn-inverse btn-large" href="/outer_space.php" title="">View Project</a>
      </div><!-- span -->
    </div><!-- .well -->

    <!--
    <div class="span4">
      <div class="well">
        <h3><a href="/stars.php" title="">Moving Stars</a></h3>
        <p>A stab at the parallax effect with three backgrounds moving simultaneously.</p>
        <a class="btn btn-inverse btn-large" href="/stars.php" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well -->

    <!--
    <div class="span12">
      <h2>Mobile <small>Featuring both responsive CSS or JavaScript frameworks</small></h2>
      <hr />
    </div><!-- .span --

    <div class="span3">
      <div class="well">
        <h3><a href="/mobile/sencha/" title="">Sencha Touch</a></h3>
        <p>An introductory application using Sencha Touch with an MVC architecture.</p>
        <a class="btn btn-inverse btn-large" href="/mobile/sencha/" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well --

    <div class="span3">
      <div class="well">
        <h3><a href="/mobile/jquery/" title="">jQuery Touch</a></h3>
        <p>An introductory application using Sencha Touch with an MVC architecture.</p>
        <a class="btn btn-inverse btn-large" href="/mobile/jquery/" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well --

    <div class="span3">
      <div class="well">
        <h3><a href="/mobile/bootstrap/" title="">Bootstrap</a></h3>
        <p>An introductory application using Sencha Touch with an MVC architecture.</p>
        <a class="btn btn-inverse btn-large" href="/mobile/bootstrap/" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well --

    <div class="span3">
      <div class="well">
        <h3><a href="/mobile/lungo/" title="">Lungo</a></h3>
        <p>An introductory application using Sencha Touch with an MVC architecture.</p>
        <a class="btn btn-inverse btn-large" href="/mobile/lungo/" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well --

    <div class="span12">
      <h2>File Handling <small>Demos that utilize the power of PHP, AJAX or MySQL</small></h2>
      <hr />
    </div><!-- .span -->

    <div class="span6">
      <div class="well">
        <h3><a href="drag_drop.php" title="">HTML5 Drag &amp; Drop</a></h3>
        <p>Drag a JPEG or PNG image file over the dashed area, and it will upload to the file.</p>
        <a class="btn btn-inverse btn-large" href="/drag_drop.php" title="">View Project</a>
      </div><!-- span -->
    </div><!-- .well -->

    <!--
    <div class="span3">
      <div class="well">
        <h3><a href="scan_dir.php" title="">View Folder</a></h3>
        <p>Scan and represent the contents of the uploads folder with PHP.</p>
        <a class="btn btn-inverse btn-large" href="/scan_dir.php" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well -->

    <!--
    <div class="span12">
      <h2>Blog &amp; CMS <small>A lightweight CMS I am working on for small Blogs</small></h2>
      <hr />
    </div><!-- .span --

    <div class="span3">
      <div class="well">
        <h3><a href="/blog/blog_list.php" title="">Article Manager</a></h3>
        <br />
        <a class="btn btn-inverse btn-large" href="/blog/blog_list.php" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well --
    <div class="span3">
      <div class="well">
        <h3><a href="/blog/new_post.php" title="">New Post</a></h3>
        <br />
        <a class="btn btn-inverse btn-large" href="/blog/new_post.php" title="">View Project</a>
      </div><!-- span --
    </div><!-- .well -->

  </div><!-- .row -->
</div><!-- #container -->

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