<?php
ini_set('display_errors', true);
ini_set('error_reporting', E_ALL);

$env = Dotenv\Dotenv::createImmutable(__DIR__);
$env->load();

$secret = getenv('JWT_SECRET') ? getenv('JWT_SECRET') : '2a87ebfd9b0b3ea4aa9795cdd387491cc122511b21780dcdab3e647493db82ba';
define('JWT_SECRET', $secret);

$db = null;
function getDB()
{
  global $db;
  if (is_null($db))
    $db = new mysqli(getenv('DBHost'), getenv('DBUser'), getenv('DBPass'), getenv('DBName'));
  if ($db->connect_error)
    throw new Exception('DB Connection Error'); //: ' . $db->connect_error);
  if ($db->error)
    throw new Exception('DB Error'); //: ' . $db->error);
  return $db;
}
