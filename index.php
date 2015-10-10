<?php

if(isset($_GET["lang"])) {
    setcookie("lang", $_GET["lang"], time()+3600*24*100);
    $_COOKIE["lang"] = $_GET["lang"];
}

file_put_contents("counter.txt", @file_get_contents("counter.txt") + 1);

$default_lang = strpos(strtolower($_SERVER["HTTP_ACCEPT_LANGUAGE"]), "de") !== false ? "de" : "en";
$lang = in_array(@$_COOKIE["lang"],["de","en"]) ? @$_COOKIE["lang"] : $default_lang;

include("./strings/strings-$lang.php");
$translations["LANG"] = $lang;


 if(@$_GET["page"] == "") {
    $content = file_get_contents("./templates/startpage.html");
} else if(@$_GET["page"] == "questions") {
    $content = file_get_contents("./templates/questions.html");
} else if(@$_GET["page"] == "description") {
    $content = "";
    
    $os      = @$_GET["os"];
    $client  = @$_GET["client"];
    $level   = @$_GET["level"];
    $browser = @$_GET["browser"];

    function add($file) {
        global $content, $lang;
        if(file_exists("./strings/descriptions-$lang/$file")) {
            $content .= file_get_contents("./strings/descriptions-$lang/$file");
        } else {
            $content .= file_get_contents("./strings/descriptions-$lang/not_translated.html");
        }
    }
    
    // Fills $content with snippets:
    include("./snippet-loader.php");
    
    $content = str_replace("{CONTENT}", $content, file_get_contents("./templates/description.html"));
} else  if(@$_GET["page"] == "impressum") {
    $content = file_get_contents("./templates/impressum.html");
} else if(@$_GET["page"] == "sources") {
    $content = file_get_contents("./templates/sources.html");
} else {
    $content = file_get_contents("./templates/error404.html"); 
}


$main_page = file_get_contents("./templates/main_page.html");
$main_page = str_replace('{CONTENT}', $content, $main_page);


foreach($translations as $name => $value) {
    $main_page = str_replace('$(' . $name . ')', $value, $main_page);
}

$main_page = preg_replace('/\s+/', " ", $main_page);
$main_page = str_replace("> <", "><", $main_page);

echo $main_page;

?>