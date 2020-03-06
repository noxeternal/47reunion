<?php

namespace api;

class records extends JSAPI
{
  function __construct($method, $params)
  {
//    $this->noAuth = [];
    parent::__construct($method, $params);
  }

  function get($member_nbr)
  {
    return \Data::get($member_nbr);
  }

  function save($record)
  {
    return \Data::save($record);
  }

  function whosGoing() {
    return \Data::getAll();
  }
}
