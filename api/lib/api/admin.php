<?php

namespace api;

class admin extends JSAPI
{
  function __construct($method, $params)
  {
//    $this->noAuth = [];
    parent::__construct($method, $params);
  }

}
