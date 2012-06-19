<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  //require_once("$path2root/assets/inc/connection.inc.php");
  // database connection info
  //$conn = mysql_connect('rawdesigns.db.7625389.hostedresource.com','rawdesigns','Forever#23') or trigger_error("SQL", E_USER_ERROR);
  //$conn = mysql_connect('localhost','root','') or trigger_error("SQL", E_USER_ERROR);
  //$db = mysql_select_db('rawdesigns',$conn) or trigger_error("SQL", E_USER_ERROR);
  //$sql = "SELECT title, article, created, article_id FROM blog ORDER BY created DESC LIMIT 1";
  //$result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
  <style>
  #home .hero-unit {
    margin-bottom:0;
    border-radius:0px;
    overflow: hidden;
    padding:100px 0 80px;
    text-align:center;
    border-bottom:8px solid #06e;
    background: #121212;
    box-shadow:0px 0px 15px 3px rgba(0, 0, 0, .5);
  }
  #home .hero-unit h2 {
    font-size:75px;
    color:#fff;
    font-family: 'CodeLightRegular';
    font-weight:100;
    margin-bottom:20px;
  }
  #home .hero-unit h2 a {
    color: #06E;
    -webkit-transition: all .25s ease-in-out;
    -moz-transition: all .25s ease-in-out;
    -ms-transition: all .25s ease-in-out;
    -o-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
  }
   #home .hero-unit h2 a:hover {
    color: #39F;
  }
  #home .hero-unit p {
    color:#fff;
    font-family: 'DeliciousSmallCapsRegular';
    font-weight:100;
    text-align:left;
  }
  #home .hero-unit p.web, #home .hero-unit p.mobile, #home .hero-unit p.newMedia {
    display:none;
  }
  </style>
</head>
<body id="home">
<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## --
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->


<div class="hero-unit">
  <div class="container">
    <div class="row-fluid">
      <h2>
        <a class="web" href="#">Web</a> 
        <span>/</span> 
        <a class="mobile" href="#">Mobile</a> 
        <span>/</span> 
        <a class="newMedia" href="#">New Media</a>
      </h2>
      <br />
      <p class="web animated fadeInLeftBig">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p class="mobile animated fadeInRightBig">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p class="newMedia animated fadeInLeftBig">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </div><!-- .row -->
  </div><!-- .container -->
</div><!-- .hero-unit -->

<div class="main">
  <br />
  <br />
  <div class="container">
    <div class="row">
      
    </div><!-- .row -->
  </div><!-- .container -->
</div><!-- .main -->
<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include("$path2root/assets/inc/footer.inc.php"); ?>
<!-- ## FOOTER ## -->
<script>
// Text fadeIn()
$('.hero-unit a.web').click(function() {
  $('p.web').fadeToggle('slow', function() {
    // Animation complete
  });
});
$('.hero-unit a.mobile').click(function() {
  $('p.mobile').fadeToggle('slow', function() {
    // Animation complete
  });
});
$('.hero-unit a.newMedia').click(function() {
  $('p.newMedia').fadeToggle('slow', function() {
    // Animation complete
  });
});
</script>
</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header('Location: error.php');
  }
  ob_end_flush();
?>