<?php

$y = $_GET['y'];
$r = $_GET['r'];
$x = $_GET['x'];

$time_zone_offset = $_GET['time_zone_offset'];

function check_triangle($x, $y, $r) {
    return ($x >= 0 && $y <= 0) &&
        ($x <= $r / 2 && $y < -$r);
}

function check_square($x, $y, $r) {
    return ($x <= 0 && $y <= 0) &&
        ($x >= -$r && $y >= -$r);
}

function check_circle($x, $y, $r) {
    return ($x >= 0 && $y >= 0) &&
        $x ^ 2 + $y ^ 2 <= ($r / 2) ^ 2;
}

$time = date('H:i:s', time() - $time_zone_offset * 60);

$start_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 8);
$flag = check_square($x, $y, $r) || check_triangle($x, $y, $r) || check_circle($x, $y, $r);
$res = "{" .
    "\"x\":\"$x\"," .
    "\"y\":\"$y\"," .
    "\"r\":\"$r\"," .
    "\"start_time\":\"$start_time\"," .
    "\"time\":\"$time\"," .
    "\"result\":\"$flag\"" .
    "}";
echo $res;