<?php
function dbConnect($usertype, $connectionType = 'mysqli') {
  $host = 'somehost.com'; // Database host path
  $db = 'somedb'; // name of your database
  
  // If user is read-ony
  if ($usertype  == 'read') {
  	$user = 'root'; //username
  	$pwd = 'pass'; // password
  } 
  // If user is read-write
  elseif ($usertype == 'write') {
  	$user = 'rawdesigns';
	  $pwd = 'Forever#23';
  } 
  // Unrecognized user or connection type
  else {
	  exit('Unrecognized connection type');
  }
  if ($connectionType == 'mysqli') {
	  $result = new mysqli($host, $user, $pwd, $db) ;
	  if (!$result) die ('Cannot connect to database');
	    return $result;
  } else {
    try {
      return new PDO("mysql:host=$host;dbname=$db", $user, $pwd);
    } catch (PDOException $e) {
      echo 'Cannot connect to database';
      exit;
    }
  }
}
