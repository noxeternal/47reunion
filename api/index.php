<?php 
header('content-type:application/javascript');
$saveData = json_decode(file_get_contents('php://input'));
// print_r($saveData);

require('lib/init.php'); 
RPCServer::handle('JSAPI');