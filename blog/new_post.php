<?php 
  $path2root = "..";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");

  // Set Up DB Connection
  if (isset($_POST['insert'])) {
    require_once("$path2root/assets/inc/connection.inc.php");
    // initialize flag
    $OK = false;
    // create database connection
    $conn = dbConnect('write');
    // initialize prepared statement
    $stmt = $conn->stmt_init();
    // create SQL
    $sql = 'INSERT INTO blog (title, article, created)
        VALUES(?, ?, NOW())';
    if ($stmt->prepare($sql)) {
    // bind parameters and execute statement
    $stmt->bind_param('ss', $_POST['title'], $_POST['article']);
      // execute and get number of affected rows
    $stmt->execute();
    if ($stmt->affected_rows > 0) {
      $OK = true;
    }
  }
  // redirect if successful or display error
  if ($OK) {
    header("Location: $path2root/blog/");
    exit;
    } else {
    $error = $stmt->error;
    }
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
    <h1>Insert New Entry</h1>
    <form id="form1" method="post" action="">
      <p>
        <label for="title">Title:</label>
        <input name="title" type="text" class="span6" id="title">
      </p>
      <p>
        <label for="article">Article:</label>
        <textarea name="article" cols="60" rows="8" class="span6" id="article"></textarea>
      </p>
      <p>
        <button class="btn btn-inverse btn-large" type="submit" name="insert" id="insert">&nbsp;&nbsp;Publish&nbsp;&nbsp;</button>
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