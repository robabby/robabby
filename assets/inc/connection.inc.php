<?php
function dbConnect($usertype, $connectionType = 'mysqli') {
<<<<<<< HEAD
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
=======
  //$host = 'rawdesigns.db.7625389.hostedresource.com';
  $host = 'localhost';  
  $db = 'rawdesigns';
  if ($usertype  == 'read') {
	$user = 'rawdesigns';
	$pwd = 'Forever#23';
  } elseif ($usertype == 'write') {
  	$user = 'rawdesigns';
	$pwd = 'Forever#23';
  } else {
	exit('Unrecognized connection type');
  }
  if ($connectionType == 'mysqli') {
	$result = new mysqli($host, $user, $pwd, $db) ;
	if (!$result) die ('Cannot connect to database');
	return $result;
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
  } else {
    try {
      return new PDO("mysql:host=$host;dbname=$db", $user, $pwd);
    } catch (PDOException $e) {
      echo 'Cannot connect to database';
      exit;
    }
  }
}
