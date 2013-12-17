<?php 
  $path2root = $_SERVER['DOCUMENT_ROOT'];
  ob_start();
  try {
  include('./assets/inc/title.inc.php');
?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8 ie7" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9 ie8" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
</head>
  <body>
    <!-- ## IE CHECK ## -->
    <?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
    <!-- ## HEADER & NAV ## -->
    <?php include('./assets/inc/nav.inc.php'); ?>
    <section class="stage-wrapper">
      <div class="fullscreen img-overlay"></div>
      <img id="bkgd" class="fullscreen" src="/assets/img/calvin_hobbes.jpg"/>
      <div class="stage">
        <img class="profile-img img-circle animated bounceInUp" src="/assets/img/profile.jpg" />
        <div class="info animated">
          <h1 class="first-last">Rob Abby</h1>
          <h2>Software Developer</h2>
          <br />
          <br />
          <a href="#" class="more-info">
            <i class="fa fa-info-circle fa-2x"></i>
          </a>
        </div>
        <nav id="social">
          <ul class="social-wrapper">
            <li class="social-icon">
              <a href="#">
                <i class="fa fa-twitter fa-5x"></i>
              </a>
            </li>
            <li class="social-icon">
              <a href="#">
                <i class="fa fa-linkedin-square fa-5x"></i>
              </a>
            </li>
            <li class="social-icon">
              <a href="#">
                <i class="fa fa-github fa-5x"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div class="bio">
          
        </div>
      </div>
    </section>
    <?php include('./assets/inc/footer.inc.php'); ?>
    <script>
    (function($) {
      var $profileImg = $('.profile-img'),
          $info = $('.info'),
          $moreInfo = $('.more-info');

      $profileImg.hover(function() {
        $this = $(this);
        $this.removeClass('bounceInUp');
        $this.addClass('flip');
      });

      $moreInfo.on('click', function() {
        var $this = $(this);
        $profileImg.removeClass('bounceInUp');
        $profileImg.addClass('bounceOutUp');
        $info.addClass('bounceOutDown');
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