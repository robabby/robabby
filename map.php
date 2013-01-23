<?php 
  $path2root = "";
  ob_start();
  try {
  include('./assets/inc/title.inc.php'); 
  include('./assets/inc/user_agent.php');
?>
<!doctype html>
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
  <style>
    html { height: 100% }
    body { height: 100%; margin: 0 !important; padding: 0 !important; overflow: hidden; }
    #map_canvas { height: 100% }
  </style>
  <script type="text/javascript" 
    src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCFtiZPliypwop5Kdc5M2ZI6q35qOpqBjg&sensor=true">
  </script>
  <script type="text/javascript">
    function initialize() {
      var myOptions = {
        center: new google.maps.LatLng(42.1722, -87.7972),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"),
          myOptions);
    }
  </script>
</head>
<body id="home" onload="initialize()">

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## -->
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->
<div id="map_canvas" style="width:100%; height:100%;"></div>
<!-- #### MAIN CONTENT GOES HERE #### -->

<?php include('./assets/inc/footer.inc.php'); ?>
</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header('Location: error.php');
  }
  ob_end_flush();
?>