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

  // Twitter API Code
  $url = 'http://twitter.com/statuses/user_timeline/stat30fbliss.xml';
  $feed = simplexml_load_file($url, 'SimpleXMLIterator');
  $filtered = new LimitIterator($feed->status);

?>
<!doctype html>
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
  <style>
  #contact .hero-unit {
    border-radius:0px;
    border:5px solid #555;
    box-shadow:inset 0px 0px 10px 1px rgba(0, 0, 0, .5);
    padding-bottom:20px;
    padding-top:20px;
  }
  .hero-unit h1 {
    color:#aaa;
    text-shadow:0px 1px 2px #fff;
    margin:0 0 15px 0;
  }
  #contact .hero-unit form input[type="text"], textarea {
    width:90%;
  }
  #contact .hero-unit form #twitter {
    width:79%;
  }
  .hero-unit label, .hero-unit textarea {
    font-family: 'TradeGothicLTStdLight';
    font-size:18px;
  }
  .hero-unit #comments {
    margin-bottom:20px;
  }
  .hero-unit #name, .hero-unit #email, .hero-unit #website, .hero-unit #twitter {
    height:35px;
    font-size:24px;
    line-height:35px;
    font-family: 'TradeGothicLTStdLight';
  }
  .input-prepend .add-on {
    padding: 4px 10px;
    margin-right: -5px;
    margin-top:-9px;
    height:35px;
    line-height:35px;
    font-family: 'Swiss721Light';
    font-size:24px;
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e5e5e5)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* IE10+ */
    background: linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0 ); /* IE6-9 */
  }
  #contact #send {
    width:318px;
    height:50px;
  }
  #follow {
    display: block;
    position:relative;
    top:-35px;
    right:-235px;
  }
  .tweet, .query {
    font-family: 'Swiss721Light';
    color: #085258;
    font-size:18px;
  }
  .tweet_list {
    list-style: none;
    margin: -15px 0 0 0;
    padding: 0;
  }
  .tweet_list li {
    padding: 20px;
    margin:0 auto 20px;
    list-style-type: none;
    background-color:#fff;
    box-shadow:0px 0px 10px 1px rgba(0, 0, 0, .25);
    border-radius:10px;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
  }
  .tweet_list li:hover {
    background-color:rgba(100, 200, 255, .5);
    box-shadow:0px 3px 10px 1px rgba(0, 0, 0, .15);
    -moz-transform: scale(1.25) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    -webkit-transform: scale(1.25) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    -o-transform: scale(1.25) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    -ms-transform: scale(1.25) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
    transform: scale(1.25) rotate(5deg) translate(0px, 0px) skew(0deg, 0deg);
  }
  .tweet_list li a {
    color: #09F;
  }
  .tweet_list li a:hover {
    color:#3AF;
  }
  .tweet_list .tweet_even {
    z-index:-1;
  }
  .tweet_list .tweet_avatar {
    padding-right: .5em; float: left;
  }
  .tweet_list .tweet_avatar img {
    vertical-align: middle;
  }
  </style>
</head>
<body id="contact">

<!-- ## IE CHECK ## -->
<?php include("./assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## --
<?php include('./assets/inc/nav.inc.php'); ?>
-->
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