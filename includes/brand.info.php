<?php

if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;
}

$brand_name = "Amazon Book Associates";
$brand_url = "https://amazonbookassociates.com/";
$brand_title = "Amazon Book Associates - Self Publishing Services , Printing, Wrting and distribution Company";
$meta_description = "Amazon Book Associates Offers Affordable book writing and printing service. Our team help you with custom book printing and writing. Create and Selft publish your book today.";

$asset_img = $brand_url."assets/images/";
$asset_vdo = $brand_url."assets/videos/";
$asset_css = $brand_url."assets/css/";
$asset_js = $brand_url."assets/js/";

$trustpilot_url = "https://www.facebook.com/#/";    // trustpilot
$bark_url = "https://www.facebook.com/#/";          // bark
$clutch_url = "https://www.facebook.com/#/";        // clutch
$goodfirms_url = "https://www.facebook.com/#/";     // goodfirm

$phone_1 = "+1 713 424 6498";
$phone_a_1 = "tel:+17134246498";

$phone_2 = "+1 123 1234 1234";
$phone_a_2 = "tel:+112312341234";


$email_1 = "info@amazonbookassociates.com";

$email_2 = "amazonbookassociates@gmail.com";

$address = "14090 southwest freeway sugar land tx 77478";

$address_link = "#!";

$fb = "https://www.facebook.com/amazonbookassociates";              // done
$inst = "https://www.instagram.com/amazonbookassociates/";           // done
$lnkdn = "https://www.linkedin.com/company/amazonbookassociates"; // linkedin
$twttr = "https://twitter.com/amazonbookassociates";              // twitter
$pntrst = "https://www.facebook.com/#";       // pinterest

$live_chat = "javascript:live_chat();";

function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function get_full_page_url() {
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
return $actual_link;
}
?>