<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  require_once("$path2root/assets/inc/connection.inc.php");
  // database connection info
  //$conn = mysql_connect('rawdesigns.db.7625389.hostedresource.com','rawdesigns','Forever#23') or trigger_error("SQL", E_USER_ERROR);
  $conn = mysql_connect('localhost','root','') or trigger_error("SQL", E_USER_ERROR);
  $db = mysql_select_db('rawdesigns',$conn) or trigger_error("SQL", E_USER_ERROR);
  // find out how many rows are in the table 
  $sql = "SELECT COUNT(*) FROM blog";
  $result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
  $r = mysql_fetch_row($result);
  $numrows = $r[0];

  // number of rows to show per page
  $rowsperpage = 8;
  // find out total pages
  $totalpages = ceil($numrows / $rowsperpage);

  // get the current page or set a default
  if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
     // cast var as int
     $currentpage = (int) $_GET['currentpage'];
  } else {
     // default page num
     $currentpage = 1;
  } // end if

  // if current page is greater than total pages...
  if ($currentpage > $totalpages) {
     // set current page to last page
     $currentpage = $totalpages;
  } // end if
  // if current page is less than first page...
  if ($currentpage < 1) {
     // set current page to first page
     $currentpage = 1;
  } // end if

  // the offset of the list, based on current page 
  $offset = ($currentpage - 1) * $rowsperpage;

  // get the info from the db 
  $sql = "SELECT title, article, created, article_id FROM blog ORDER BY created DESC LIMIT $offset, $rowsperpage";
  $result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
  <link rel="stylesheet" href="<?php echo $path2root; ?>/assets/css/highlighter/dessert.css" />
  <style>
  #blog .post pre {
  }
  </style>
</head>
<body id="blog">

<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## HEADER & NAV ## -->
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
  <div class="row">
      <br />
      <br />
      <?php while ($list = mysql_fetch_assoc($result)) { ?>
        <div class="span6">
        <div class="well post">
          <div class="row-fluid">
            <span class="label label-inverse pull-right"><?php echo $list['created']; ?></span>
            <h2><a href="post.php?article_id=<?php echo $list['article_id']; ?>"><?php echo $list['title']; ?></a></h2>
            <p><?php echo substr($list['article'], 0, 350); ?>...</p>
            <br />
            <p>
              <a class="btn btn-inverse btn-large pull-right" href="post.php?article_id=<?php echo $list['article_id']; ?>">Read Article &raquo;</a>
            </p>
            <br>
            <br>
            <br>
          </div>
        </div>
        </div>
      <?php } // end while  ?>
  </div><!-- .row -->

  <!-- Start Pagination -->
  <div class="row-fluid">
    <div class="span12">
      <div style="display:none;" class="pagination-centered">

<?php
/******  build the pagination links ******/
// range of num links to show
$range = 3;

// if not on page 1, don't show back links
if ($currentpage > 1) {
   // show << link to go back to page 1
   echo "<a class='btn' href='{$_SERVER['PHP_SELF']}?currentpage=1'><i class='icon-fast-backward'></i></a> ";
   // get previous page num
   $prevpage = $currentpage - 1;
   // show < link to go back to 1 page
   echo " <a class='btn' href='{$_SERVER['PHP_SELF']}?currentpage=$prevpage'><i class='icon-step-backward'></i></a> ";
} // end if 

// loop to show links to range of pages around current page
for ($x = ($currentpage - $range); $x < (($currentpage + $range) + 1); $x++) {
   // if it's a valid page number...
   if (($x > 0) && ($x <= $totalpages)) {
      // if we're on current page...
      if ($x == $currentpage) {
         // 'highlight' it but don't make a link
         echo " <a class='btn btn-info'>$x</a> ";
      // if not current page...
      } else {
         // make it a link
         echo " <a class='btn' href='{$_SERVER['PHP_SELF']}?currentpage=$x'>$x</a> ";
      } // end else
   } // end if 
} // end for
                 
// if not on last page, show forward and last page links        
if ($currentpage != $totalpages) {
   // get next page
   $nextpage = $currentpage + 1;
    // echo forward link for next page 
   echo " <a class='btn' href='{$_SERVER['PHP_SELF']}?currentpage=$nextpage'><i class='icon-step-forward'></i></a> ";
   // echo forward link for lastpage
   echo " <a class='btn' href='{$_SERVER['PHP_SELF']}?currentpage=$totalpages'><i class='icon-fast-forward'></i></a> ";
} // end if
/****** end build pagination links ******/
?>
        </div><!-- #Pagination-Centered -->
      </div><!-- #span11 -->
      
    </div><!-- #row -->

</div><!-- .container -->

<br />
<br />
<br />

<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include("$path2root/assets/inc/footer.inc.php"); ?>
<!-- ## FOOTER ## -->
<!-- Place this tag after the last badge tag. -->
<script src="<?php echo $path2root; ?>/assets/css/highlighter/prettify.js"></script>
<script>prettyPrint();</script>
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
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