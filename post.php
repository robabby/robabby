<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  require_once("$path2root/assets/inc/connection.inc.php");
  require_once("$path2root/assets/inc/utility_funcs.inc.php");

  // create database connection
  $conn = dbConnect('read');
  // check for article_id in query string
  if (isset($_GET['article_id']) && is_numeric($_GET['article_id'])) {
    $article_id = (int) $_GET['article_id'];
  } else {
    $article_id = 0;
  }
  $sql = "SELECT title, article, DATE_FORMAT(updated, '%W, %M %D, %Y') AS updated, filename, caption
        FROM blog LEFT JOIN images USING (image_id)
        WHERE blog.article_id = $article_id";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();

  // Get Current Page URL
  function curPageURL() {
   $pageURL = 'http';
   if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
   $pageURL .= "://";
   if ($_SERVER["SERVER_PORT"] != "80") {
    $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
   } else {
    $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
   }
   return $pageURL;
  }

  /* To Return Page Title only 
  <?php
  function curPageName() {
   return substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
  }

  echo "The current page name is ".curPageName();
  ?>
  */
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
  <link rel="stylesheet" href="<?php echo $path2root; ?>/assets/css/highlighter/dessert.css" />
  <style>
  #post h2 {
    font-size: 35px;
    border-bottom:1px solid #333;
    padding-bottom:5px;
  }
  #post p {
    font-size:15px;
  }
  #post .social {
    display:block;
    clear:both;
    margin:10px 0 10px 125px;
  }
  #post .thumbnail {
    margin:0 0 0px 10px;
  }
  </style>
</head>
<body id="post">

<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## -->
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
  <div class="row">
      
    <br />

    <?php 
    if (isset($error)) {
      echo "<p class='warning'>Error: $error</p>";
    }
    if($article_id == 0) { ?>
      <div class="well">
        <p class="warning">Post not found!</p>
      </div>
    <?php } else { ?>
          
          
          
    <div class="span8">
      <div class="well post">
        <article>
          <span class="label label-inverse pull-right"><?php if ($row) { echo $row['updated']; } ?></span>
    
          <h2><?php if ($row) {
          echo $row['title'];
        } else {
          echo 'No record found';
        } ?>
      </h2>

      <div class="social">
        <div class="fb-like" data-send="false" data-width="50" data-show-faces="false" 
          style="display:inline-block; position:relative; width:50px; height:24px; margin:0 25px -2px 0; overflow:hidden;"></div>
        <g:plusone size="medium" style="margin:0 0 0 -10px"></g:plusone>
        <a href="https://twitter.com/share" class="twitter-share-button" data-via="stat30fbliss">Tweet</a>
        <a href="http://pinterest.com/pin/create/button/?url=<?php echo curPageURL(); ?>&media=http%3A%2F%2Frobabby.com%2Fimages%2Fcalvin_sandbox.jpg" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>
      </div>
    
    <?php
      if ($row && !empty($row['filename'])) {
      $filename = "images/{$row['filename']}";
      $imageSize = getimagesize($filename);
    ?>
    <img src="<?php echo $filename; ?>" alt="<?php echo $row['caption']; ?>"
        <?php echo $imageSize[3];?>>
        
        <?php } if ($row) { echo convertToParas($row['article']); } ?>

      <p><a class="btn" href="<?php
        // check that browser supports $_SERVER variables
        if (isset($_SERVER['HTTP_REFERER']) && isset($_SERVER['HTTP_HOST'])) {
          $url = parse_url($_SERVER['HTTP_REFERER']);
          // find if visitor was referred from a different domain
          if ($url['host'] == $_SERVER['HTTP_HOST']) {
            // if same domain, use referring URL
            echo $_SERVER['HTTP_REFERER'];
          }
        } else {
        // otherwise, send to main page
        echo 'blog.php';
        } ?>"><i class="icon-chevron-left"></i>&nbsp;Back</a></p>
      </article>
    </div><!--#hero-unit-->
  </div><!-- #span -->
  
  <div class="span4">
    <div class="well">

    </div>
  </div>

  </div><!--/row-->
  <?php } ?>
</div>
<!-- #### MAIN CONTENT GOES HERE #### -->

<br />
<br />

<!-- ## FOOTER ## -->
<?php include("$path2root/assets/inc/footer.inc.php"); ?>
<!-- ## FOOTER ## -->

<script src="<?php echo $path2root; ?>/assets/css/highlighter/prettify.js"></script>
<script>prettyPrint();</script>

<!-- ##### Social Scripts ##### -->
<!-- Google +1 -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>

<!-- Pinterest -->
<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>

<!-- Twitter -->
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
</script>

<!-- Facebook -->
<div id="fb-root"></div>
<script>
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=139862122798855";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header("Location: $path2root/error.php");
  }
  ob_end_flush();
?>