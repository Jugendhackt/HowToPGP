<?php
/*
 * $os, $client, $level, $browser
 * 
 */
if($client == "thunderbird") {
    if($os == "windows" || $os == "osx") {
        add("W_Thunderbird_install.html");
    } else if ($os == "linux") {
        add("L_Thunderbird_install.html");
    }
} else if($client == "browser") {
    add("Mailvelope_introduction.html");
	if($browser == "firefox"){
		add("Mailvelope_install_firefox.html");
	}else if($browser == "chrome"){
    	add("Mailvelope_install _chrome.html");
	}
}
if($client != "browser"){        
	if($os == "windows") {
		add("W_GPG4Win.html");
	} else if($os == "osx") {
		add("M_GPGTools.html");
	}

	if($level == "3") {
		add("GnuPG.html");
	}

	add("Thunderbird_Enigmail.html");

	if($level == "1" || $level == "2") {
		add("public_private_key_simple.html");
	} else {
		add("public_private_key_technical.html");
	}
	add("Enigmail_create_keys.html");
}
add("keyserver.html");
add("test_email.html");
add("Nutze_es_richtig.html");

if($level == "3") {
    add("web_of_thrust.html");
}
