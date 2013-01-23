<?php 
  $path2root = "";
  include('./assets/inc/title.inc.php'); 
  include('./assets/inc/user_agent.php');
  require_once("./assets/inc/connection.inc.php");

  // Scan Directory Script
  //
  // define number of columns in table
  define('COLS', 2);
  // initialize variables for the horizontal looper
  $pos = 0;
  $firstRow = true;
  // set maximum number of records
  define('SHOWMAX', 6);
  $conn = dbConnect('read');
  // prepare SQL to get total records
  $getTotal = 'SELECT COUNT(*) FROM images';
  // submit query and store result as $totalPix
  $total = $conn->query($getTotal);
  $row = $total->fetch_row();
  $totalPix = $row[0];
  // set the current page
  $curPage = isset($_GET['curPage']) ? $_GET['curPage'] : 0;
  // calculate the start row of the subset
  $startRow = $curPage * SHOWMAX;
  // prepare SQL to retrieve subset of image details
  $sql = "SELECT filename, caption FROM images LIMIT $startRow," . SHOWMAX;
  // submit the query
  $result = $conn->query($sql) or die(mysqli_error());
  // extract the first record as an array
  $row = $result->fetch_assoc();
  // get the name and caption for the main image
  if (isset($_GET['image'])) {
    $mainImage = $_GET['image'];
  } else {
    $mainImage = $row['filename'];
  }
?>
<!doctype html>
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
</head>
<body id="blank">

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## --
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
  <div class="hero-unit">
    <a class="btn btn-large btn-inverse pull-right" href="drag_drop.php" title="">Upload More Files</a>
    <h1>Scan Folder Conents</h1>
        
    <h3>All Files</h3>
          
    <table class="table table-bordered table-striped">
      <th>Filename</th>
      <th>View File</th>
      <?php 
        $files = new DirectoryIterator('/uploads/');
        foreach ($files as $file) { ?>
          <tr>
            <td><?php echo $file ?></td>
            <td><a class="btn" href="/uploads/<?php echo $file ?>">View File</a></td>
          </tr>
      <?php } ?>
    </table>

    <!--
    <h3>Images Only</h3>
    
    <table class="table table-bordered table-striped">
          <th>Filename</th>
          <th>View File</th>
      <?php 
        $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('./uploads/'));
        $images = new RegexIterator($files, '/\.(?:jpg|png|gif)$/i');
        foreach ($images as $file) { ?>
          <tr>
            <td><?php  echo $file->getRealPath(); ?></td>
            <td><a class="btn" href="/uploads/<?php echo $file ?>">View File</a></td>
          </tr>
      <?php } ?>
    </table>
    -->

  </div>
</div><!-- .container -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include('./assets/inc/footer.inc.php'); ?>
<!-- ## FOOTER ## -->

</body>
</html>