<?php

namespace api;

class records extends JSAPI
{
  function __construct($method, $params)
  {
    $this->noAuth = [];
    parent::__construct($method, $params);
  }

  function get($member_nbr): array
  {
    return \Data::get($member_nbr);
  }

  function save($record): bool
  {
    return \Data::save($record);
  }
}
