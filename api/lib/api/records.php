<?php

namespace api;

class records extends JSAPI {
  function __construct ($method, $params) {
    $this->noAuth = [];
    parent::__construct($method, $params);
  }

  function get () :array {
    $data = new \Data();
    return [];
  }

  function save () : bool {
    $data = new \Data();
    return false;
  }

}
