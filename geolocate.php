<?php 
  $path2root = "";
  ob_start();
  try {
  include('./assets/inc/title.inc.php'); 
  include('./assets/inc/user_agent.php');
  require_once("./assets/inc/connection.inc.php");
?>
<!doctype html>
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
  <script type="text/javascript" charset="UTF-8" src="http://maps.google.com/maps/api/js?sensor=false"></script>
  <script type="text/javascript" charset="UTF-8">
  var positionopts;
  positionopts = {
    enableHighAccuracy: true,
    timeout: 10000} ;
  var headerref;
  var geocoder;
  function init() {
   
   headerref = document.getElementById("header");
   geocoder = new google.maps.Geocoder();
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handler, problemhandler, positionopts);
   }
  else {
    if (document.getElementById("place")) {
      document.getElementById("place").innerHTML = "I'm sorry but geolocation services are not supported by your browser";
      document.getElementById("place").style.color = "#FF0000";
    }
   }
  }
  var listener;
  var map;
  var blatlng;
  var myOptions;
  function handler(position) {
    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;
    var result;
    makemap(mylat,mylong);
    document.coutput.lat.value = mylat;
    document.coutput.lon.value = mylong;
    document.coutput.acc.value = position.coords.accuracy;
      reversegeo(blatlng);
  }
  function reversegeo(latlng) {
       geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
             document.msg.subject.value = results[0].formatted_address;
          } else {
            alert("No results found in reverse geocoding.");
          }
          }
        else {
          alert("Geocoder failed due to: " + status);
        }
      });
  }
  function problemhandler(prob) {
    switch(prob.code) {
    case 1:
     document.getElementById("place").innerHTML = "User declined to share the location information.";
     break;
    case 2:
     document.getElementById("place").innerHTML = "Errors in getting base location.";
     break;
    case 3:
     document.getElementById("place").innerHTML = "Timeout in getting base location.";
    }
    document.getElementById("header").innerHTML = "Base location needs to be set!";
  }
  var xmarker = "images/3.png";
  function makemap(mylat,mylong) {
    var marker;
      blatlng = new google.maps.LatLng(mylat,mylong);
      myOptions = {
      zoom: 14,
        center: blatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      //disableDefaultUI: true
      };
      map = new google.maps.Map(document.getElementById("place"), myOptions);
      marker = new google.maps.Marker({
                     position: blatlng,
                     title: "center",
                     icon: xmarker,
                     map: map });
    listener = google.maps.event.addListener(map, 'click', function(event) {
        checkit(event.latLng);
        });

  }
  function checkit(clatlng) {
    var distance = dist(clatlng,blatlng);
    var result;
    distance = Math.floor((distance+.005)*100)/100;
    var distanceString = String(distance)+" km. away.";
    var newcoords = String(clatlng.lat())+" lat. "+String(clatlng.lng())+" lng.";
    distanceString = newcoords+" "+distanceString;
    //default teardrop marker
    marker = new google.maps.Marker({
                     position: clatlng,
                     title: distanceString,
                     map: map });
    document.msg.body.value = document.msg.body.value + " However, I really am at "+distanceString;
  }
   function dist(point1, point2) {
      //spherical law of cosines
      var R = 6371; // km
      //var R =  3959; // miles
      var lat1 = point1.lat()*Math.PI/180;
      var lat2 = point2.lat()*Math.PI/180 ;
      var lon1 = point1.lng()*Math.PI/180;
      var lon2 = point2.lng()*Math.PI/180;

  var d = Math.acos(Math.sin(lat1)*Math.sin(lat2) +
                    Math.cos(lat1)*Math.cos(lat2) *
                    Math.cos(lon2-lon1)) * R;
      return d;
    }
  </script>
  <style>
  #place {
    display:block;
    margin:0 auto;
    width:880px;
    height:400px;
    border:10px solid #fff;
    box-shadow:0px 0px 10px 1px rgba(0, 0, 0, .75);
  }
  .well, .btn {
    border-radius:0px;
  }
  </style>
</head>
<body id="blank" onLoad="init();">

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## --
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
  <div class="well">
    <a class="btn btn-inverse" href="sandbox.php">&lt; Go Back</a>
    <br />
    <br />
    <div id="place"></div>
  </div>
  <div class="well">
    <h2>We've got you <small>Now send your location to a friend!</small></h2>
    <form name="coutput">
      <table>
        <tr>
          <td>
            Latitude: <input type="text" name="lat"> 
          </td>
          <td>
            Longitude: <input type="text" name="lon"> 
          </td>
          <td>
            Accuracy (meters): <input type="text" name="acc">
          </td>
        </tr>
      </table>
    </form>
    <form name="msg" action="/assets/ops/send_geo_email.php" method="post">
      <table cellpadding"10">
        <tr>
          <td>
            Your email (for reply):
            <br />
            <input type="email" name="from" required />
          </td>
          <td>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td>
            To email:
            <br />
            <input type="email" name="to" required  />
          </td>
        </tr>
      </table>
      Subject: 
      <br />
      <input type="text" name="subject" size="100" />
      <p>
        Body of message (you may change it) <br/>
        <TEXTAREA NAME="body" COLS=40 ROWS=5>My geolocation is at the address given in the subject line.</TEXTAREA>
      </p>
     <input class="btn btn-primary btn-large" type="submit" value="Send" />
    </form>
  </div><!-- .well -->
</div><!-- .container -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include('./assets/inc/footer.inc.php'); ?>
<!-- ## FOOTER ## -->

</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header('Location: error.php');
  }
  ob_end_flush();
?>