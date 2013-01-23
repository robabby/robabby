  <footer>
<<<<<<< HEAD
=======
    <!--
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
    <h1><a class="toggle" id="toggle" href="#" onClick="return false"><img src="/images/social/share_w.png" width="30" /></a></h1>
    <div class="btn-group dropup">
      <button class="btn primary dropdown-toggle" data-toggle="dropdown"><img src="/images/ui/gear2.png" /></button>
      <ul class="dropdown-menu">
        <li><a data-toggle="modal" href="#contact">Feedback</a></li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="blog.php">Blog</a></li>
        <li><a href="sandbox.php">Sandbox</a></li>
        <li><a href="index.php">Home</a></li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <div id="drawer" class="drawer">
      <div class="container">
        <div class="row-fluid">
          <div class="span12">
            <br />
            <ul>
              <li><a href="http://twitter.com/stat30fbliss" title="Twitter"><img src="/images/social/twitter.png" /></a></li>
              <li><a href="http://forrst.com/people/stat30fbliss" title="Forrst"><img src="/images/social/forrst.png" /></a></li>
              <li><a href="http://github.com/stat30fbliss" title="GitHub"><img src="/images/social/github.png" /></a></li>
              <li><a href="http://dribbble.com/stat30fbliss" title="Dribbble"><img src="/images/social/dribbble.png" /></a></li>
              <li><a href="http://www.behance.net/robabby" title="Béhance.net"><img src="/images/social/behance.png" /></a></li>
              <li><a href="http://www.linkedin.com/in/robabby" title="Linkedin"><img src="/images/social/linkedin.png" /></a></li>
              <li><a href="http://plus.google.com/110039793553907601610?rel=author" title="Google+"><img src="/images/social/google.png" /></a></li>
              <li><a href="http://www.facebook.com/stat30fbliss" title="Facebook"><img src="/images/social/facebook.png" /></a></li>
              <li><a data-toggle="modal" href="#contact" title="Email"><img src="/images/social/email.png" /></a></li>
            </ul>
            <br />
            <br />
            <br />
<<<<<<< HEAD
            <p class="copy">&copy; Rob Abby 
            <?php 
            
            $startYear = 1983;
=======
            <div class="clearfix"></div>
            <p class="copy">&copy; Rob Abby 
            <?php 
            
            $startYear = 2010;
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
            $thisYear = date('Y');
            if ($startYear == $thisYear) {
              echo $startYear;
            } else {
              echo "{$startYear} &#8211; {$thisYear}";
            }
            
            ?></p>
          </div>
<<<<<<< HEAD
          </div><!-- .row-fluid -->
        </div><!-- .container-fluid -->
=======
          </div><!-- .row-fluid --
        </div><!-- .container-fluid --
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
      </div><!-- #drawer -->
  </footer>

  <script src="/assets/js/bootstrap.js"></script>
  <script src="/assets/js/jquery.easing.js"></script>
<<<<<<< HEAD
=======
  <script src="/assets/js/plugins.js"></script>
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
  <script>
    $('#drawer ul li a').tooltip('show');
    $("#toggle").click(function () {
      $("#drawer").slideToggle(1000, 'easeInOutCubic', function() {
        // Animation complete.
      });
    });
  </script>
  <script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-32901659-1']);
    _gaq.push(['_setDomainName', 'robabby.com']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script>
<<<<<<< HEAD
=======
<script>
jQuery(function($){ 
  $.supersized({
    // Functionality
    slideshow       : 0,      // Slideshow on/off
    autoplay        : 1,      // Slideshow starts playing automatically
    start_slide     : 0,      // Start slide (0 is random)
    stop_loop       : 0,      // Pauses slideshow on last slide
    random          : 0,      // Randomize slide order (Ignores start slide)
    slide_interval  : 3000,   // Length between transitions
    transition      : 6,      // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition_speed  : 1000,   // Speed of transition
    new_window        : 1,      // Image links open in new window/tab
    pause_hover       : 0,      // Pause slideshow on hover
    keyboard_nav      : 1,      // Keyboard navigation on/off
    performance       : 1,      // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed 
    image_protect     : 1,      // Disables image dragging and right click with Javascript

    // Size & Position               
    min_width         : 0,      // Min width allowed (in pixels)
    min_height        : 0,      // Min height allowed (in pixels)
    vertical_center   : 1,      // Vertically center background
    horizontal_center : 1,      // Horizontally center background
    fit_always        : 0,      // Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait      : 1,      // Portrait images will not exceed browser height
    fit_landscape     : 0,      // Landscape images will not exceed browser width

    // Components             
    slide_links       : 'blank',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
    thumb_links       : 1,      // Individual thumb links for each slide
    thumbnail_navigation    :   0,      // Thumbnail navigation
    slides          :   [     // Slideshow Images
                      {image : '/images/bg/bg1.jpg'},
                      {image : '/images/bg/bg2.jpg'},
                      {image : '/images/bg/bg3.jpg'},
                      {image : '/images/bg/bg4.png'}
                  ],

    // Theme Options         
    progress_bar      : 1,      // Timer for each slide             
    mouse_scrub       : 0
  });
});
</script>
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
  <!--
  <script>
    var _gaq=[['_setAccount','UA-15363114-5'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>
  -->
  