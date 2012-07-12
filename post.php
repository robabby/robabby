<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");
  require_once("$path2root/assets/inc/utility_funcs.inc.php");

  // create database connection
  $conn = dbConnect('write');
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
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
  <style>
  #post h2 {
    font-size: 35px;
  }
  #post p {
    font-size:15px;
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
          <span class="label label-info pull-right"><?php if ($row) { echo $row['updated']; } ?></span>
    
          <h2><?php if ($row) {
          echo $row['title'];
        } else {
          echo 'No record found';
        } ?>
      </h2>

    <?php
      if ($row && !empty($row['filename'])) {
      $filename = "images/{$row['filename']}";
      $imageSize = getimagesize($filename);
    ?>
    <img src="<?php echo $filename; ?>" alt="<?php echo $row['caption']; ?>"
        <?php echo $imageSize[3];?>>
        
        <p><?php } if ($row) { echo convertToParas($row['article']); } ?></p>

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