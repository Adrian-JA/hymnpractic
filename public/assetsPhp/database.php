<?php 
$server = "b0p6i0cywh5srfwte3v7-mysql.services.clever-cloud.com";
$username = "ud71ob31uwpjjwb4";
$password = "vKVXjBlNTT3mvDjis8pH";
$database = 'b0p6i0cywh5srfwte3v7';	

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}


?>