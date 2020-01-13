<?php

$link = get_db_link();

if ($request['method'] === 'GET') {
  $sqlGetAll =
  "SELECT * FROM grades";
  $result = mysqli_fetch_all($link->query($sqlGetAll), MYSQLI_ASSOC);
  $response['body'] = $result;
  send($response);
}

if ($request['method'] === 'POST') {
  $name = $request['body']['name'];
  $course = $request['body']['course'];
  $grade = $request['body']['grade'];
  $sqlAddStudent =
  "INSERT INTO grades (name, course, grade) VALUES ('$name', '$course', '$grade')";
  $link -> query($sqlAddStudent);
  $lastId = $link->insert_id;

  $sqlRes =
  "SELECT * FROM grades WHERE id = $lastId";
  $obj = $link->query($sqlRes);
  $result = mysqli_fetch_assoc($obj);

  $response['body'] = $result;
  send($response);
}
