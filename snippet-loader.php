<?php
/*
 * $os, $client, $level, $browser
 *
 */
  if($client == "thunderbird") {
    if($os == "windows" || $os == "osx") {
        add("thunderbird_install_w.html");
    } else if ($os == "linux") {
        add("thunderbird_install_l.html");
    }
} else if($client == "browser") {
    add("not_translated.html");
    add("mailvelope_introduction.html");
    add("mailvelope_requirements.html");
    if($browser == "firefox"){
        add("mailvelope_install_firefox.html");
    } else if($browser == "chrome"){
        add("mailvelope_install_chrome.html");
    }
}

if($client != "browser"){
    if($os == "windows") {
        add("gpg4win.html");
    } else if($os == "osx") {
        add("gpgtools_m.html");
    }

    if($level == "3") {
        add("gnupg.html");
    }
    add("enigmail_thunderbird.html");
}

if($level == "1" || $level == "2") {
    add("public_private_key_simple.html");
} else {
    add("public_private_key_technical.html");
}
if($client != "browser"){
    add("enigmail_create_keys.html");
}

add("keyserver.html");
add("test_email.html");
add("using_it_right.html");

if($level == "3") {
    add("web_of_trust.html");
}
