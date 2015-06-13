<?php

include("./strings/strings-de.php");



$content = file_get_contents("./templates/questions.html");





$main_page = file_get_contents("./templates/main_page.html");
$main_page = str_replace('{CONTENT}', $content, $main_page);


foreach($translations as $name => $value) {
    $main_page = str_replace('$(' . $name . ')', $value, $main_page);
}

echo $main_page;

?>