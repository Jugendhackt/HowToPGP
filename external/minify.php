<?php

header('Content-type: text/'.$_GET["mime"]);

$path = $_GET["file"];
$path = str_replace("/", "", $path);
$content_old = file_get_contents($path);
$content = $content_old;

$content = preg_replace("/[\s]+/", " ", $content);
$content = str_replace(": ", ":", $content);
$content = str_replace("; ", ";", $content);
$content = str_replace(", ", ",", $content);
$content = str_replace("0.", ".", $content);
$content = str_replace("{ ", "{", $content);
$content = str_replace("} ", "}", $content);
$content = str_replace(" {", "{", $content);
$content = str_replace(" }", "}", $content);
$content = str_replace(" >", ">", $content);
$content = str_replace("> ", ">", $content);


echo $content;
echo "/* Saved ".round(100-strlen($content)/strlen($content_old)*100)."% */";
