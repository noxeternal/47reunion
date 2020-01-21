<?php

class Auth
{
  private $db;

  function __construct()
  {
    $this->db = getDB();
  }

  function login($member_nbr)
  {
    $login = $this->db->prepare("SELECT m_firstname, m_lastname FROM member_info WHERE member_nbr = ?");
    $login->bind_param('i', $member_nbr);
    $login->bind_result($firstName, $lastName);
    $login->execute();
    $login->store_result();
    if (!$login->fetch()) throw new Exception('Invalid member number');
    $login->close();

    $auth = new User();
    $auth->valid = true;
    $auth->id = $member_nbr;
    $auth->firstName = $firstName;
    $auth->lastName = $lastName;

    return $auth;
  }

  function logout()
  {
    return true;
  }

  function getUser($token)
  {
    $return = new User();
    $return->valid = true;
    $return->id = $token->id;
    $return->firstName = $token->firstName;
    $return->lastName = $token->lastName;

    return $return;
  }
}
