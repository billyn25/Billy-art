<?php

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$to = $email;
$subject = $name.' - '.$email;
$txt = $text;
$headers = "From: webmaster@landing.com";


$send = mail('billyndavid@gmail.com',$subject,$txt,$headers);

if( $send == true ) {
    echo "Message sent successfully...";
}else {
    echo "Message could not be sent...";
}