<?php
      $to = $_POST['to'];
	  $subject = $_POST['subject'];
	  $body = $_POST['body'];
      $headers = "From: " . $_POST['from'];
     if (mail($to, $subject, $body, $headers)) {
      echo("Your message was sent! <a href='/geolocate.php'>Go Back</a>");
      } else {
      echo("There was a problem: <br>the body is $body,<br> the to is $to,<br> subject is $subject,<br> headers is $headers.");
      }
?>
