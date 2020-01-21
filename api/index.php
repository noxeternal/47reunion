<?php
ini_set('display_errors', true);
require('vendor/autoload.php');
require_once('lib/init.php');
RPCServer::handle('JSAPI');
