<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  //require_once("$path2root/assets/inc/connection.inc.php");
  //database connection info
  //$conn = mysql_connect('rawdesigns.db.7625389.hostedresource.com','rawdesigns','Forever#23') or trigger_error("SQL", E_USER_ERROR);
  $conn = mysql_connect('localhost','root','') or trigger_error("SQL", E_USER_ERROR);
  $db = mysql_select_db('rawdesigns',$conn) or trigger_error("SQL", E_USER_ERROR);
  $sql = "SELECT title, article, created, article_id FROM blog ORDER BY created DESC LIMIT 3";
  $result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
</head>
<body id="home">
<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## -->
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->


<div class="hero-unit">
  <div class="container-fluid">
    <div class="row-fluid">
      <h2>
        <a class="web" href="#">Web</a> 
        <span>/</span> 
        <a class="mobile" href="#">Mobile</a> 
        <span>/</span> 
        <a class="social" href="#">Social</a>
      </h2>
      <br />
      <p class="web">
        Using concepts from his earlier hypertext systems like ENQUIRE, British engineer and computer scientist Sir Tim Berners-Lee, now Director of the World Wide Web Consortium (W3C), wrote a proposal in March 1989 for what would eventually become the World Wide Web.  Here in <?php $thisYear = date('Y'); echo "{$thisYear}"; ?> I specialize in building products and services that take advantage of Mr. Berner-Lee's amazing contribution to society.
      </p>
      <p class="mobile">
        The Mobile Web refers to access to the world wide web, i.e. the use of browser-based Internet services, from a handheld mobile device, such as a smartphone, a feature phone or a tablet computer, connected to a mobile network or other wireless network.  I take advantage of tactics such as Responsive Web Design to produce websites that scale to fit whatever mobile screen is viewing them, preserving both message and design.
      </p>
      <p class="social">
        Social networks and the analysis of them is an inherently interdisciplinary academic field which emerged from social psychology, sociology, statistics, and graph theory.  I can also take advantage of their services to let people follow you on twitter and like you on Facebook.  Cool, huh?
      </p>
    </div><!-- .row -->
  </div><!-- .container -->
</div><!-- .hero-unit -->


<div role="main" id="container" class="container main">
<br />
<br />
  <div class="row">
    <div class="span12">
      <div class="well">
        <div itemscope itemtype="http://www.schema.org/Person">
          <h1>Hey there!  My Name is <span itemprop="name">Rob Abby</span>, and I'm a <span itemprop="jobTitle">Web Developer</span>.</h1>
        </div>
      </div>
    </div>
    <div class="span6">
      <div class="well">
        <h3>A Brief History</h3>
        <p>My transition into web development was both swift &amp; profound.  Discovering HTML to customize the MySpace page of my band in 2005, I quickly fell in love with all things web.  Before long I was working with CSS, and then quickly thereafter JavaScript, PHP, and MySQL.  My first freelance jobs were naturally for musicians and dabbling artists, but my appetite soon took me to bigger and better places both on &amp; off the web.</p>
      </div><!-- .well -->
    </div><!-- .span6 -->
    <div class="span6 textalign-right">
      <div class="well">
        <h3>A Preamble of Sorts</h3>
        <p>As an avid internet enthusiast and web development artist for almost a decade, I offer a variety of web and technical services to a versatile client base. Working as a Freelancer in the Chicagoland area, I have formed a robust network of clientele with various businesses and individuals. From web development to graphic design, I can offer a comprehensive image for my clients to attract new customers.</p>
      </div><!-- .well -->
    </div><!-- .span6 -->
  </div><!-- .row -->    
  </div><!-- .container -->
</div><!-- #container -->


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
$('.hero-unit a.social').click(function() {
  $('p.social').fadeToggle('slow', function() {
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