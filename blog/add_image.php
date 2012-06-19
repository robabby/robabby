<?php 
  $path2root = "..";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");

  // Connects to your Database
  mysql_connect("rawdesigns.db.7625389.hostedresource.com", "rawdesigns", "Forever#23") or die(mysql_error()) ;
  //mysql_connect("localhost", "rawdesigns", "Forever#23") or die(mysql_error()) ;
  mysql_select_db("rawdesigns") or die(mysql_error()) ;

?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
</head>
<body id="blank">
<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
     chromium.org/developers/how-tos/chrome-frame-getting-started -->
<!--[if lt IE 9]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## -->
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
    <div class="row-fluid">
        <div class="span3">
        
        </div><!-- #span2 -->
          <div class="span9">
        <div class="well">
        <h1>Attach an image to your post</h1>
        <form method="post" action="addMember.php" enctype="multipart/form-data">
          <p>Image File:</p>
          <input type="file" name="photo"> 
          <br />
          <input class="btn btn-inverse" type="submit" name="upload" title="Add data to the Database" value="Add Image"/>
        </form>
      </div><!-- #well -->
      </div><!-- #span10 -->
    </div><!-- #row-fluid -->
      
   </div><!-- #container -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include("$path2root/assets/inc/footer.inc.php"); ?>
<!-- ## FOOTER ## -->

</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header("Location: $path2root/error.php");
  }
  ob_end_flush();
?>