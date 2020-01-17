<?php

namespace interfaces;

interface auth
{
  public function login($member_nbr): array;
  public function logout(): bool;
  public function getUser(): \User;
}
