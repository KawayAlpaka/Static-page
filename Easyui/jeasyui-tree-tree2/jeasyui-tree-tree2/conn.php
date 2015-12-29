<?php

$conn = @mysql_connect('127.0.0.1','root','admin');
if (!$conn) {
	// die('Could not connect: ' . mysql_error() . 'admin');
	// die('Could not connect: ');
	die('Could not connect: ');
}
mysql_select_db('mydb', $conn);

?>