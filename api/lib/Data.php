<?php

class Data
{
  private $db;

  public static function save($record)
  {
    $db = getDB();
    $stmt = $db->prepare("INSERT INTO registration2020 (memberID, registrationData) VALUES (?, ?) ON DUPLICATE KEY UPDATE memberID = ?, registrationData = ?");
    $stmt->bind_param('isis', $memberID, $registration, $memberID, $registration);
    $memberID = $record->memberID;
    $registration = json_encode(['veteran' => $record->veteran, 'guests' => $record->guests]);

    return $stmt->execute();
  }

  public static function get($memberID)
  {
    $db = getDB();
    $stmt = $db->prepare("SELECT registrationData FROM registration2020 WHERE memberID = ?");
    $stmt->bind_param('i', $memberID);
    $stmt->bind_result($json);
    $stmt->execute();
    $stmt->fetch();

    return json_decode($json);
  }
}
