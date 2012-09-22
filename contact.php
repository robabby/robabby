<?php 
  // Path to ROOT Directory
  $path2root = ".";
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
    $to = 'rob@rawdesigns.net'; // Use your own email address
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
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
  <style>
  </style>
  <script type="text/javascript">
   var RecaptchaOptions = {
      theme : 'clean'
   };
   </script>
</head>
<body id="contact">

<!-- ## IE CHECK ## -->
<?php include("./assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## HEADER & NAV ## -->
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->
  <div role="main" id="container" class="container">
    <div class="row">
      <div class="span12">
        <div class="hero-unit">
          <h1>Contact Me</h1>
          <div class="row-fluid">
            <div class="span6">
              <?php if (($_POST && $suspect) || ($_POST && isset($errors['mailfail']))) { ?>
              <div class="alert alert-info">
                Are you human?
              </div>
            <?php } elseif ($missing || $errors) { ?>
              <div class="alert alert-info">
                <a class="close" data-dismiss="alert" href="#">&times;</a>
              There was an error
            </div>
            <?php } ?>
              <form id="feedback" method="post" action="">

                <label for="name">Name:
                <?php if ($missing && in_array('name', $missing)) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
                <?php } ?>
                </label>
                <input name="name" id="name" type="text" class="formbox"
                <?php if ($missing || $errors) { 
                 echo 'value="' . htmlentities($name, ENT_COMPAT, 'UTF-8') . '"';
                } ?>>

                <label for="email">Email:
                <?php if ($missing && in_array('email', $missing)) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
                <?php } elseif (isset($errors['email'])) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Invalid Email&nbsp;&nbsp;</span>
                <?php } ?>
                </label>
                <input name="email" id="email" type="text" class="formbox"
                <?php if ($missing || $errors) { 
                 echo 'value="' . htmlentities($email, ENT_COMPAT, 'UTF-8') . '"';
                } ?>>

                <label for="website">Website:
                <?php if ($missing && in_array('website', $missing)) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
                <?php } elseif (isset($errors['website'])) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Invalid Email&nbsp;&nbsp;</span>
                <?php } ?>
                </label>
                <input name="website" id="website" type="text" class="formbox"
                <?php if ($missing || $errors) { 
                 echo 'value="' . htmlentities($website, ENT_COMPAT, 'UTF-8') . '"';
                } ?>>

                <label for="twitter">Twitter Handle:
                <?php if ($missing && in_array('twitter', $missing)) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
                <?php } elseif (isset($errors['twitter'])) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Invalid Email&nbsp;&nbsp;</span>
                <?php } ?>
                </label>
                <div class="input-prepend">
                  <span class="add-on">@</span>
                  <input name="twitter" id="twitter" type="text" class="formbox"
                  <?php if ($missing || $errors) { 
                   echo 'value="' . htmlentities($twitter, ENT_COMPAT, 'UTF-8') . '"';
                  } ?>>
                </div>

                <label for="comments">Comments:
                <?php if ($missing && in_array('comments', $missing)) { ?>
                  <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
                <?php } ?>
                </label>
                
                <textarea name="comments" id="comments" rows="7" class=""><?php
                  if ($missing || $errors) {
                    echo htmlentities($comments, ENT_COMPAT, 'UTF-8');
                  } ?></textarea>
                
                <br />
                
                <?php if (isset($errors['recaptcha'])) { ?>
                  <div class="alert alert-info captcha">
                    <a class="close" data-dismiss="alert" href="#">&times;</a>
                    Are you sure you're human?
                  </div>
                <?php }
                echo recaptcha_get_html($public_key); 
                ?>
                <br />
                <button name="send" class="btn btn-inverse btn-large" id="send" type="submit">Send Message</button>
              </form>
            </div><!-- .span6 -->
            <div class="span6">
              <div  id="follow">
                <a href="https://twitter.com/stat30fbliss" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @stat30fbliss</a>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
              </div>
              <div class="tweet"></div>              
            </div>
          </div><!-- .row-fluid -->
        </div><!-- .hero-unit -->
      </div><!-- .span12 -->
    </div><!-- .row -->
  </div><!-- #container -->

  <?php include('./assets/inc/footer.inc.php'); ?>
  <script src="/assets/js/jquery.tweet.js"></script>
  <script type='text/javascript'>
    jQuery(function($){
      $(".tweet").tweet({
        username: "stat30fbliss",
        join_text: "auto",
        avatar_size: 35,
        count: 5,
        auto_join_text_default: "", 
        auto_join_text_ed: "",
        auto_join_text_ing: "",
        auto_join_text_reply: "",
        auto_join_text_url: "",
        loading_text: "loading tweets..."
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