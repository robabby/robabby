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
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
</head>
  <body>
    <!-- ## IE CHECK ## -->
    <?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
    <!-- ## CONTACT MODAL ## -->
    <?php include('./assets/inc/contactModal.inc.php'); ?>
    <!-- ## HEADER & NAV ## -->
    <?php include('./assets/inc/nav.inc.php'); ?>
    <div class="stage-wrapper">
      <div class="fullscreen img-overlay"></div>
      <img id="bkgd" class="fullscreen" src="/assets/img/calvin_hobbes.jpg"/>
      <div class="stage">
        <img class="profile-img img-circle animated bounceInUp" src="/assets/img/profile.jpg" />
        <ul class="social-wrapper">
          <li class="social-icon">
            <i class="icon-twitter icon-white icon-4x"></i>
          </li>
          <li class="social-icon">
            <i class="icon-github icon-white icon-4x"></i>
          </li>
          <li class="social-icon">
            <i class="icon-google-plus icon-white icon-4x"></i>
          </li>
        </ul>
      </div>
    </div>
    <?php include('./assets/inc/footer.inc.php'); ?>
    <script>
    (function($) {
      var $profileImg = $('.profile-img');

      $profileImg.hover(function() {
        $this = $(this);
        $this.removeClass('bounceInUp');
        $this.addClass('flip');
      });
    })(jQuery);
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