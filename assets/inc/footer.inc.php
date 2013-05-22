  <footer>
    <h1><a class="toggle" id="toggle" href="#" onClick="return false"><img src="/images/social/share_w.png" width="30" /></a></h1>
    <div class="btn-group dropup">
      <button class="btn primary dropdown-toggle" data-toggle="dropdown"><img src="/images/ui/gear2.png" /></button>
      <ul class="dropdown-menu">
        <li><a data-toggle="modal" href="#contact">Contact</a></li>
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
            <p class="copy">&copy; Rob Abby 
            <?php 
            
            $startYear = 1983;
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

<?php
// Collect all of the scripts and render them on the page
if ($handle = opendir("$path2root/assets/js")) {

    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
      // only collect the necessary files
        if (($entry != "." && $entry != ".." && $entry != "modernizr.custom.48780.js") && strpos($entry, ".js")) {
            echo "<script src=\"/assets/js/".$entry."\"></script>\n";
        }
    }

    closedir($handle);
}
?>
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
  