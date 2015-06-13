<?php
/*
 * $lang ==> "de" or "en"
 * $content ==> should be filled here
 * $os, $client, $level ==> settings
 * 
 */

if($os == "windows") {
    add("W_Thunderbird_install.html");
}
else if ($os == "linux") {
    add("L_Thunderbird_install.html");
}

if($os =="windows"){
    add("W_GPG4Win.html");
}
add("Thunderbird_Enigmail.html");

if(($level == "1")|| ($level == "2")){
    add("public_private_key_simple.html");
}
else{
    add("public_private_key_technical.html");
}

add("Enigmail_create_keys.html");
add("test_email.html");
add("Nutze_es_richtig.html");
