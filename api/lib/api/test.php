<?php

namespace api;

class test extends JSAPI
{
  function __construct($method, $params)
  {
    // parent::__construct($method, $params);
  }

  function ping($data)
  {
    return ['pong' => $data];
  }
}
