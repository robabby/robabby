<?php 
  $path2root = $_SERVER['DOCUMENT_ROOT'];
  ob_start();
  try {
  include('./assets/inc/title.inc.php'); 
  require_once('./assets/inc/recaptchalib.php');
  $public_key = '6Le94s0SAAAAAO8OAEo_r6LJCbV5NuHgPk_lI15n';
  $private_key = '6Le94s0SAAAAAEiGVQDaX_4uMnP3YTaSbNgDfoC-';
  $errors = array();
  $missing = array();
  // Check if the form is submitted
  if (isset($_POST['send'])) {
    //email processing script
    include('./assets/inc/nuke_magic_quotes.php');
    $to = 'robabby23@gmail.com'; // Use your own email address
    $subject = 'Feedback Form';

    // List expected fields 
    $expected = array('name', 'email', 'comments', 'website', 'twitter');
    //$expected = array('name', 'email', 'comments', 'subscribe', 'interests');

    // Set required fields
    $required = array ('name', 'email', 'comments');
    //$required = array ('name', 'email', 'comments', 'subscribe', 'interests');

    // set default values for variables that might not exist
    if (!isset($_POST['subscribe'])) {
      $_POST['subscribe'] = '';
    }
    if (!isset($_POST['interests'])) {
      $_POST['interests'] = array();
    }
    // Require a minimum number of checkboxes
    $minCheckboxes = 1;
    if (count($_POST['interests'])) {
      $_POST['interests'] = array();
    }
    // Create additional headers
    $headers = "From: Raw Designs<rob@rawdesigns.net>\r\n";
    $headers .= "Cc: robabby23@gmail.com\r\n";
    $headers .= 'Content-Type: text/plain; charset=utf-8';
    $response = recaptcha_check_answer($private_key, $_SERVER['REMOTE_ADDR'],
      $_POST['recaptcha_challenge_field'], $_POST['recaptcha_response_field']);
    if (!$response->is_valid) {
      $errors['recaptcha'] = true;
    }
    require('./assets/inc/processmail.inc.php');
    if ($mailSent) {
      header('Location: thank_you.php');
      exit;
    }
  }
?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<!--[if lt IE 9]>
    <link rel="stylesheet" type="text/css" href="/assets/css/style_ie.css" />
<![endif]-->
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
  <link rel="stylesheet" href="/assets/css/queryLoader.css" type="text/css" />
  <noscript>
    <style>
    .step {
      width: 100%;
      position: relative;
    }
    .step:not(.active) {
      opacity: 1;
      filter: alpha(opacity=99);
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=99)";
    }
    .step:not(.active) a.jms-link{
      opacity: 1;
      margin-top: 40px;
    }
    </style>
  </noscript>
  <style>
  .star-1 {
    display:block;
    position:absolute;
    background-color:#fff;
    top:190px;
    left:142px;
    width:3px;
    height:3px;
    border-radius:3px;
    box-shadow:0px 0px 50px 7px rgba(100, 175, 255, 1);
    -webkit-animation-name: pulse;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: pulse;
    -moz-animation-duration: 5s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }
  .star-2 {
    display:block;
    position:absolute;
    background-color:#fff;
    top:45%;
    left:55%;
    width:3px;
    height:3px;
    border-radius:3px;
    box-shadow:0px 0px 50px 15px rgba(100, 175, 255, 1);
    -webkit-animation-name: pulse;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: pulse;
    -moz-animation-duration: 10s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }
  .star-3 {
    display:block;
    position:absolute;
    background-color:#fff;
    top:85%;
    left:25%;
    width:3px;
    height:3px;
    border-radius:3px;
    box-shadow:0px 0px 50px 15px rgba(100, 175, 255, 1);
    -webkit-animation-name: pulse;
    -webkit-animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: pulse;
    -moz-animation-duration: 8s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }
  .star-4 {
    display:block;
    position:absolute;
    background-color:#fff;
    top:70%;
    left:85%;
    width:3px;
    height:3px;
    border-radius:3px;
    box-shadow:0px 0px 50px 15px rgba(100, 175, 255, 1);
    -webkit-animation-name: pulse;
    -webkit-animation-duration: 7s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: pulse;
    -moz-animation-duration: 7s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }
  .star-5 {
    display:block;
    position:absolute;
    background-color:#fff;
    top:10%;
    left:75%;
    width:3px;
    height:3px;
    border-radius:3px;
    box-shadow:0px 0px 50px 15px rgba(100, 175, 255, 1);
    -webkit-animation-name: pulse;
    -webkit-animation-duration: 12s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: pulse;
    -moz-animation-duration: 12s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }
  .moon {
    display:block;
    position:absolute;
    top:-250px;
    right:-250px;
    width:544px;
    height:544px;
    background-image:url('/assets/img/moon.png');
    background-position: 0px 0px;
    background-repeat: no-repeat;
    -webkit-animation-name: rotate;
    -webkit-animation-duration: 240s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: rotate;
    -moz-animation-duration: 240s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
  }
  .planet {
    display:none;
    position:absolute;
    bottom:-500px;
    left:-350px;
    width:921px;
    height:921px;
    background-image:url('/assets/img/planet.png');
    background-position: 0px 0px;
    background-repeat: no-repeat;
    -webkit-animation-name: rotate;
    -webkit-animation-duration: 1000s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: rotate;
    -moz-animation-duration: 1000s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
  }
  .planet2 {
    display:block;
    position:absolute;
    bottom:-700px;
    left:-550px;
    width:1320px;
    height:1324px;
    background-image:url('/assets/img/planet2.png');
    background-position: 0px 0px;
    background-repeat: no-repeat;
    -webkit-animation-name: rotate;
    -webkit-animation-duration: 1500s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: rotate;
    -moz-animation-duration: 1500s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
  }
  @-webkit-keyframes pulse {
    from {
      opacity:0;
    }
    25% {
      opacity:.50;
    }
    50% {
      opacity:.25;
    }
    75% {
      opacity:1;
    }
    to {
      opacity:0;
    }
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes pulse {
    from {
      opacity:0;
    }
    25% {
      opacity:.50;
    }
    50% {
      opacity:.25;
    }
    75% {
      opacity:1;
    }
    to {
      opacity:0;
    }
  }
  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    50% {
      -moz-transform: rotate(180deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  </style>
  <script type="text/javascript">
   var RecaptchaOptions = {
      theme : 'white'
   };
   </script>
</head>
<body id="outer_space">
<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## -->
<?php //include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<div id="container" class="container">
  
  <!-- ##### SOLAR SYSTEM ##### -->
  <div id="star" class="star-1"></div>
  <div id="star" class="star-2"></div>
  <div id="star" class="star-3"></div>
  <div id="star" class="star-4"></div>
  <div id="star" class="star-5"></div>
  <div id="moon" class="moon"></div>
  <div id="planet" class="planet"></div>
  <div id="planet2" class="planet2"></div>
  <!-- ##### SOLAR SYSTEM ##### -->
  
  <section id="jms-slideshow" class="jms-slideshow">
    <div class="step" data-color="color-1">
      <div class="jms-content">
        <h3>Welcome!</h3>
        <p>I am currently cleaning some things up...</p>
      </div>
    </div>
    <!--
    <div class="step" data-color="color-2" data-x="350" data-y="1500" data-scale="0.25" data-rotate-x="360">
      <div class="jms-content">
        <h3>Questions?</h3>
        <p>Click the gear in the bottom left to send me a message</p>
      </div>
    </div>
    -->
    <div class="step" data-color="color-5" data-x="4500" data-z="1000" data-rotate-y="45">
      <div class="jms-content">
        <h3>Follow me</h3>
        <a class="jms-link" href="http://twitter.com/stat30fbliss">@stat30fbliss</a>
      </div>
      <img class="inset2" src="/assets/img/calvin_sandbox.jpg" />
    </div>
  </section>
</div>

<?php include('./assets/inc/footer.inc.php'); ?>

<script type="text/javascript">
  $(function() {
    $( '#jms-slideshow' ).jmslideshow();
  });
</script>
<script type="text/javascript" src="/assets/js/queryloader2.js"></script>
<script type='text/javascript'>
  $(document).ready(function () {
      $("body").queryLoader2({
        percentage: false,
        backgroundColor: '#121212',
        barHeight: 5,
        barColor: '#FFF',
        completeAnimation: 'grow'
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