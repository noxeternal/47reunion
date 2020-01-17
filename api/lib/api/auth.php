<?php

namespace api;

class auth extends JSAPI implements \interfaces\auth
{
  function __construct($method, $params)
  {
    $this->noAuth = ['login', 'logout', 'test'];
    parent::__construct($method, $params);
    $this->Auth = new \Auth();

    if (!isset($this->jwt) && isset($_ENV['HTTP_AUTHORIZATION'])) {
      preg_match('#^Bearer (.+?)$#', $_ENV['HTTP_AUTHORIZATION'], $m);
      if ($m) {
        $jwt = $m[1];
        $this->checkToken($jwt);
      }
    }
    if (!isset($this->jwt) && isset($_SERVER['HTTP_AUTHORIZATION'])) {
      preg_match('#^Bearer (.+?)$#', $_SERVER['HTTP_AUTHORIZATION'], $m);
      if ($m) {
        $jwt = $m[1];
        $this->checkToken($jwt);
      }
    }

    if (!isset($this->jwt) && isset($_COOKIE['auth__token_local'])) {
      preg_match('#^Bearer(%20| )(.+?)$#', $_COOKIE['auth__token_local'], $m);
      if ($m) {
        $jwt = $m[2];
        $this->checkToken($jwt);
      }
    }

    if (!isset($this->token->id) && !in_array($method, $this->noAuth)) {
      $this->unauthorized();
    }
  }

  function login($member_nbr): array
  {
    $auth = $this->Auth->login($member_nbr);

    if ($auth->valid) {
      if (!isset($this->token))
        $this->token = new \Token();

      $this->token->valid = $auth->valid;
      $this->token->id = $auth->id;
      $this->token->firstName = $auth->firstName;
      $this->token->lastName = $auth->lastName;

      $this->updateToken();
      return [
        "token" => $this->jwt
      ];
    } else {
      throw new \Exception("Invalid username or password (apiAuth) " . var_dump($auth->rehash));
    }
  }

  function logout(): bool
  {
    return $this->Auth->logout();

    $this->token = new \Token();
    $this->updateToken();
  }

  function getUser(): \User
  {
    return $this->Auth->getUser($this->token);
  }

  function test($data): array
  {
    return is_array($data) ? $data : [$data];
  }
}
