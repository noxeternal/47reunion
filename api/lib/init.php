<?php

require_once(__DIR__.'/../vendor/autoload.php');
$env = Dotenv\Dotenv::createImmutable(__DIR__);
$env->load();

$GLOBALS['db'] = new mysqli(getenv('DBHost'), getenv('DBUser'), getenv('DBPass'), getenv('DBName'));
if($db->connect_error)
  die($db->connect_error);
if($db->error)
  die($db->error);

if (!defined('JWT_SECRET')) {
  define('JWT_SECRET','f9e8519d5ba2b2ba5e4b778e283c5ec72fe70384e4e23a52a250d00015ea0406'); // Random SHA256
}
  
if(!defined('PHP_API_PATH')){
  define('PHP_API_PATH',__DIR__.'/api/');
}

if(!defined('PHP_INTERFACE_PATH')) {
  define('PHP_INTERFACE_PATH',__DIR__.'/interfaces/');
}

set_include_path(get_include_path() . PATH_SEPARATOR . PHP_API_PATH);

if(!isset($skipAutoload)){
  autoloadAddFolder(__DIR__.'/');
}

autoloadAddFolder(PHP_API_PATH);
autoloadAddFolder(PHP_INTERFACE_PATH);

function autoloadAddFolder ($dir) {
  spl_autoload_register(function ($class) use ($dir) {
    $debug = defined('AUTOLOAD_DEBUG');
    if($debug) echo $class."<br>\n";
    $base_dir = $dir;
    $file = $base_dir . str_replace('\\', '/', $class) . '.class.php';
    if($debug) echo $file."<br>\n";
    if (file_exists($file))             { require_once $file;   return; }
    if (file_exists(strtolower($file))) { require_once strtolower($file);   return; }
    $file = str_replace('.class.php','.php',$file);
    if($debug) echo $file."<br>\n";
    if (file_exists($file))             { require_once $file;   return; }
    if (file_exists(strtolower($file))) { require_once strtolower($file);   return; }
  },false,true);
}