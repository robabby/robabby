<?php 
  $path2root = "..";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");

  // create database connection
  $conn = dbConnect('read');
  $sql = 'SELECT * FROM blog ORDER BY created DESC';
  $result = $conn->query($sql) or die(mysqli_error());
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
    <h1>Manage Blog Entries</h1>
    <table class="table table-bordered table-condensed table-striped">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Created</th>
        <th scope="col">Attach Image</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
      <?php while($row = $result->fetch_assoc()) { ?>
      <tr>
        <td><?php echo $row['title']; ?></td>
        <td><?php echo $row['created']; ?></td>
        <td><a class="btn" href="add_image.php"><i class="icon-picture"></i>&nbsp;Add Image</a></td>
        <td><a class="btn btn-info" href="update_post.php?article_id=<?php echo $row['article_id']; ?>"><i class="icon-pencil icon-white"></i>&nbsp;Edit</a></td>
        <td><a class="btn btn-danger" href="delete_post.php?article_id=<?php echo $row['article_id']; ?>"><i class="icon-trash icon-white"></i>&nbsp;Delete</a></td>
      </tr>
      <?php } ?>
    </table>
    <p><a class="btn btn-primary" href="new_post.php"><i class="icon-plus icon-white"></i> New Entry</a></p>
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