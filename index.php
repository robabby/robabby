<?php 
  $root = $_SERVER['DOCUMENT_ROOT'];
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
        <div class="bio animated">
          <a class="close" href="javascript:void(0)">x</a>
          <h3>Hey there</h3>
          <p>My name is Rob, and I am a Web Developer.  I focus mostly on the front-end, but can traverse the whole stack.  
          I am passionate about sexy interfaces and new technologies.</p>

          <p>I am currently a Software Developer for <a href="http://savogroup.com">The Savo Group</a>.</p>

          <p>You can also take a look at the CSS Resource I developed titled, <a href="http://stat30fbliss.github.io/lunch-and-learn/" title="CSS Lunch &amp; Learn">CSS Lunch &amp; Learn</a>.  The site offers tons of insights and resources for learning some of the more basic aspects of CSS.  It was originally made for co-workers, and I have decided to offer it to the general public.</p>
          
          <h4>Things I know:</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li><a href="http://lesscss.org">LESS</a></li>
            <li>JavaScript/jQuery</li>
            <li>Responsive Design</li>
            <li>Git and <a href="http://github.com/stat30fbliss">Github</a></li>
            <li><a href="http://yeoman.io">Yeoman</a></li>
            <li><a href="http://gruntjs.com">Grunt</a></li>
            <li><a href="http://bower.io">Bower</a></li>
            <li><a href="http://getbootstrap.com">Bootstrap</a></li>
          </ul>
          
          <h4>Things I kind of know:</h4>
          <ul>
            <li>Node &amp; Express</li>
            <li>PHP/Laravel</li>
            <li>ASP.NET MVC</li>
            <li>Ruby on Rails - <a href="http://jekyllrb.com/">Jekyll</a></li>
            <li>PhoneGap - Android</li>
          </ul>
          
          <h4>Tools I Use</h4>
          <ul>
            <li>Sublime Text 3</li>
            <li>Visual Studio 2013</li>
            <li>Fireworks CS6</li>
            <li>XAMPP &amp; IIS</li>
          </ul>

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