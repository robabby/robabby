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
    
    /*
    if ($mailSent) {
      header('Location: thank_you.php');
      exit;
    }
    */

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
        <p>My name is Rob, and I am a Web Developer</p>
        <a id="fullscreen" class="jms-link" href="javascript:void(0)">Fullscreen</a>
      </div>
    </div>
    <div class="step" data-color="color-2" data-x="350" data-y="1500" data-scale="0.25" data-rotate-x="360">
      <div class="jms-content">
        <h3>Pardon My Dust</h3>
        <p>I am currently doing some rearranging my website.  Please find me through my social networks, or:</p>
        <a class="jms-link" data-toggle="modal" href="#contact">send me a message</a>
      </div>
    </div>
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

<script type="text/javascript" src="/assets/js/queryloader2.js"></script>
<script type='text/javascript'>
  var pfx = ["webkit", "moz", "ms", "o", ""];
  function RunPrefixMethod(obj, method) {
    var p = 0, m, t;
    while (p < pfx.length && !obj[m]) {
      m = method;
      if (pfx[p] == "") {
        m = m.substr(0,1).toLowerCase() + m.substr(1);
      }
      m = pfx[p] + m;
      t = typeof obj[m];
      if (t != "undefined") {
        pfx = [pfx[p]];
        return (t == "function" ? obj[m]() : obj[m]);
      }
      p++;
    }
  }

  var target = document.getElementById("outer_space");
  var handler = document.getElementById("fullscreen")
  handler.onclick = function() {
    if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
      RunPrefixMethod(document, "CancelFullScreen");
    }
    else {
      RunPrefixMethod(target, "RequestFullScreen");
    }
  }

  $(function() {
    $('#jms-slideshow').jmslideshow();
  });

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