<?php
// Collect all of the scripts and render them on the page
//if ($handle = opendir("$path2root/assets/js")) {

    /* This is the correct way to loop over the directory. */
//    while (false !== ($entry = readdir($handle))) {
      // only collect the necessary files
//        if (($entry != "." && $entry != ".." && $entry != "modernizr.custom.48780.js") && strpos($entry, ".js")) {
//            echo "<script src=\"/assets/js/".$entry."\"></script>\n";
//        }
//    }

//    closedir($handle);
//}
?>
<script src="/assets/js/hide-address-bar.js"></script>
<script src="/assets/js/plugins.js"></script>
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