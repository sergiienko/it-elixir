<?php

$send_to = 'sergiienko.d.g@gmail.com';
$subject = 'IT Elixir';

$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];

if (isset($name) && isset($phone)) {
  @mail($send_to, $subject, "$name\n$phone");
  echo 'Successfully';
  exit(0);
}

echo 'Error';