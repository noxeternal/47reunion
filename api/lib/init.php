<?php
$env = Dotenv\Dotenv::createImmutable(__DIR__);
$env->load();

$GLOBALS['db'] = null; // new mysqli(getenv('DBHost'), getenv('DBUser'), getenv('DBPass'), getenv('DBName'));
if ($db->connect_error)
  die($db->connect_error);
if ($db->error)
  die($db->error);

if (!defined('JWT_SECRET')) {
  define('JWT_SECRET', 'f9e8519d5ba2b2ba5e4b778e283c5ec72fe70384e4e23a52a250d00015ea0406'); // Random SHA256
}
