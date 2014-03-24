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
    <section class="stage-wrapper">
      <div class="fullscreen img-overlay"></div>
      <img id="bkgd" class="fullscreen" src="/assets/img/calvin_hobbes.jpg"/>
      <div class="stage">
        <img class="profile-img img-circle animated bounceInUp" src="/assets/img/profile.jpg" />
        <div class="info animated">
          <h1 class="first-last">Rob Abby</h1>
          <h2>Web Developer</h2>
          <br />
          <br />
          <a href="javascript:void(0)" class="more-info">
            <i class="fa fa-info-circle fa-2x"></i>
          </a>
        </div>
        <nav id="social">
          <ul class="social-wrapper">
            <li class="animated social-icon">
              <a href="http://twitter.com/stat30fbliss">
                <i class="fa fa-twitter fa-5x"></i>
              </a>
            </li>
            <li class="animated social-icon">
              <a href="http://linkedin.com/in/robabby">
                <i class="fa fa-linkedin-square fa-5x"></i>
              </a>
            </li>
            <li class="animated social-icon">
              <a href="http://github.com/stat30fbliss">
                <i class="fa fa-github fa-5x"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div class="bio animated">
          <a class="close" href="javascript:void(0)">x</a>
          <h3>Hey there</h3>
          <p>My name is Rob Abby, and I am a Web Developer.  I focus mostly on the front-end, but can traverse the whole stack.  
          I am passionate about sexy interfaces and new technologies, and try to steer clear of things that hold back innovation.</p>
          
          <h4>Things I know:</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript/jQuery</li>
            <li>PHP</li>
            <li>Responsive Design</li>
            <li>Git</li>
          </ul>
          
          <h4>Things I kind of know:</h4>
          <ul>
            <li>MEAN Stack (Mongo, Express, Angular, Node)</li>
            <li>ASP.NET MVC</li>
            <li>Ruby on Rails - Jekyll</li>
            <li>PhoneGap - Android</li>
          </ul>
          
          <h4>Tools I Use</h4>
          <ul>
            <li>Chrome Dev Tools</li>
            <li>Sublime Text</li>
            <li>Visual Studio 2013</li>
            <li>Fireworks CS6</li>
            <li>XAMPP &amp; IIS</li>
          </ul>
        </div>
      </div>
    </section>
    <script type="text/javascript" src="/assets/js/index.js"></script>
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