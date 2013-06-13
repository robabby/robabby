<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  require_once("$path2root/assets/inc/connection.inc.php");
?>
<!doctype html>
<html>
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'] . "/assets/inc/head.inc.php"); ?>
  <style>
  @media all and (max-width: 1024px) {
    
  }
  </style>
</head>
<body id="blank">

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
  <div class="hero-unit">
    <h1>Hello World!</h1>
    <br />
    <?php
      $i = 1;
      do {
        echo "$i ";
        $i++;
      } while ($i <= 100);
    ?>
    <br />
    <br />
    <?php
      for ($i = 1; $i <= 100; $i++) {
        echo "$i ";
      }
    ?>
    <br />
    <br />
    <?php
      $shoppingList = array('Peanut Butter', 'Grape Jelly', 'Protien Shakes', 'Eggs', 'Bacon');
      foreach ($shoppingList as $item) {
        echo $item . '<br />';
      }
    ?>
    <br />
    <?php
      echo $_SERVER['SCRIPT_FILENAME'];
    ?>
  </div>
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