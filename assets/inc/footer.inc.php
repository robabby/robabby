  <footer>
    <h1><a class="toggle" id="toggle" href="#" onClick="return false"><img src="/images/social/share_w.png" width="30" /></a></h1>
    <div class="btn-group dropup">
      <button class="btn primary dropdown-toggle" data-toggle="dropdown"><img src="/images/ui/gear2.png" /></button>
      <ul class="dropdown-menu">
        <li><a data-toggle="modal" href="#contact">Feedback</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="sandbox.php">Twitter</a></li>
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
              <li><a href="http://plus.google.com/110039793553907601610" title="Google+"><img src="/images/social/google.png" /></a></li>
              <li><a href="http://www.facebook.com/stat30fbliss" title="Facebook"><img src="/images/social/facebook.png" /></a></li>
              <li><a data-toggle="modal" href="#contact" title="Email"><img src="/images/social/email.png" /></a></li>
            </ul>
            <br />
            <br />
            <br />
            <p class="copy">&copy; Rob Abby 
            <?php 
            
            $startYear = 2010;
            $thisYear = date('Y');
            if ($startYear == $thisYear) {
              echo $startYear;
            } else {
              echo "{$startYear} &#8211; {$thisYear}";
            }
            
            ?></p>
          </div>
          </div><!-- .row-fluid -->
        </div><!-- .container-fluid -->
      </div><!-- #drawer -->
  </footer>

  <script src="/assets/js/bootstrap.js"></script>
  <script src="/assets/js/jquery.easing.js"></script>
  <script>
    $('#drawer ul li a').tooltip('show');
    $("#toggle").click(function () {
      $("#drawer").slideToggle(1000, 'easeInOutCubic', function() {
        // Animation complete.
      });
    });
  </script>
  <script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>
  