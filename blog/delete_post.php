<?php 
  $path2root = "..";
  error_reporting(0);
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");

  $conn = dbConnect('write');
  // initialize flags
  $OK = false;
  $deleted = false;
  // initialize statement
  $stmt = $conn->stmt_init();
  // get details of selected record
  if (isset($_GET['article_id']) && !$_POST) {
    // prepare SQL query
    $sql = 'SELECT article_id, title, created
            FROM blog WHERE article_id = ?';
    if ($stmt->prepare($sql)) {
      // bind the query parameters
      $stmt->bind_param('i', $_GET['article_id']);
    // bind the result to variables
    $stmt->bind_result($article_id, $title, $created);
    // execute the query, and fetch the result
    $stmt->execute();
    $stmt->fetch();
    }
  }
  // if confirm deletion button has been clicked, delete record
  if (isset($_POST['delete'])) {
    $sql = 'DELETE FROM blog WHERE article_id = ?';
    if ($stmt->prepare($sql)) {
      $stmt->bind_param('i', $_POST['article_id']);
    $stmt->execute();
    // if there's an error affected_rows is -1
    if ($stmt->affected_rows > 0) {
      $deleted = true;
    } else {
        $error = 'There was a problem deleting the record. '; 
    }
    }
  }
  // redirect the page if deletion is successful, 
  // cancel button clicked, or $_GET['article_id'] not defined
  if ($deleted || isset($_POST['cancel_delete']) || !isset($_GET['article_id']))  {
    header('Location: /blog/');
    exit;
    }
  // if any SQL query fails, display error message
  if (isset($stmt) && !$OK && !$deleted) {
    $error .= $stmt->error;
  }

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
  <div class="hero-unit">
    <h1>Delete Blog Entry </h1>
    <?php 
    if (isset($error)  && !empty($error)) {
      echo "<p class='warning'>Error: $error</p>";
    }
    if($article_id == 0) { ?>
    <p class="warning">Invalid request: record does not exist.</p>
    <?php } else { ?>
    <p class="warning">Please confirm that you want to delete the following item. This action cannot be undone.</p>
    <p><?php echo $created . ': ' . htmlentities($title, ENT_COMPAT, 'utf-8'); ?></p>
    <?php } ?>
    <form id="form1" method="post" action="">
        <p>
      <?php if(isset($article_id) && $article_id > 0) { ?>
            <button class="btn btn-danger" type="submit" name="delete">Confirm Delete</button>
      <?php } ?>
        <button class="btn" name="cancel_delete" type="submit" id="cancel_delete">Cancel</button>
      <?php if(isset($article_id) && $article_id > 0) { ?>
        <input name="article_id" type="hidden" value="<?php echo $article_id; ?>">
      <?php } ?>
        </p>
    </form>
  </div>
</div><!-- .container -->

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