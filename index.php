<?php 
  $path2root = $_SERVER['DOCUMENT_ROOT'];
  ob_start();
  try {
  include('./assets/inc/title.inc.php');
?>
<!doctype html>
<html lang="en">
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
            <li class="animated social-icon">
              <a href="#">
                <i class="fa fa-twitter fa-5x"></i>
              </a>
            </li>
            <li class="animated social-icon">
              <a href="#">
                <i class="fa fa-linkedin-square fa-5x"></i>
              </a>
            </li>
            <li class="animated social-icon">
              <a href="#">
                <i class="fa fa-github fa-5x"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div class="bio animated">
          <a class="close" href="javascript:void(0)">x</a>
        </div>
      </div>
    </section>
    <?php include('./assets/inc/footer.inc.php'); ?>
    <script>
    (function($) {
      var $profileImg = $('.profile-img'),
          $info = $('.info'),
          $moreInfo = $('.more-info'),
          $socialIcon = $('.social-icon'),
          $bio = $('.bio'),
          $close = $('.close'),
          vanilla = true;

      $bio.hide();

      // Dont show the social icons until 1.5 seconds after the DOM has loaded
      setInterval(function() {
        $socialIcon.each(function (i) {
          // store the item around for use in the 'timeout' function
          var $item = $(this); 
          // execute this function sometime later:
          setTimeout(function() { 
            $item.addClass('slideInLeft visible');
          }, 500 * i);
          // each element should animate half a second after the last one.
        });
      }, 1500);

      // Flip the profile image on hover
      $profileImg.hover(function() {
        $this = $(this);
        $this.removeClass('bounceInUp');
        $this.addClass('flip');
      });

      $moreInfo.on('click', function() {
        var $this = $(this);
        
        if($profileImg.hasClass('bounceInDown')) {
          $profileImg.removeClass('bounceInDown'); 
        } else if ($profileImg.hasClass('flip')) {
          $profileImg.removeClass('flip');
        }

        $profileImg.addClass('bounceOutUp');

        // Clean up the info element
        if ($info.hasClass('bounceInUp')) {
          $info.removeClass('bounceInUp');
        }

        // Animate out .info div
        $info.addClass('bounceOutDown');

        // Clean up the .bio element
        if ($bio.hasClass('flipOutX')) {
          $bio.removeClass('flipOutX');
        }

        // Unhide the modal
        $bio.show(); 

        setInterval(function() {
          $bio.addClass('flipInX visible');
        }, 250);
      });

      $close.on('click', function(e) {
        // Remove the .bio element from the view
        $bio.addClass('flipOutX');

        setInterval(function() {
          // Clean up elements
          $profileImg.removeClass('bounceOutUp');
          $info.removeClass('bounceOutDown');

          // Bring back the starting elements
          $profileImg.addClass('bounceInDown');
          $info.addClass('bounceInUp');

          $bio.hide();
        }, 500);
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