<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/api/health-check':
  case '/api/grades':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
