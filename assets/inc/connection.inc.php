<?php
function dbConnect($usertype, $connectionType = 'mysqli') {
  $host = 'localhost'; // The host address
  $db = 'database_name'; // Name of the database

  // For read-only
  if ($usertype  == 'read') {
  	$user = 'root';
  	$pwd = '';
  } 
  // For read-write
  elseif ($usertype == 'write') {
  	$user = 'root';
	  $pwd = '';
  } else {
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
