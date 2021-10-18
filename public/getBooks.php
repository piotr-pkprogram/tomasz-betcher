<?php

$token = 'secret_ocQHBcRaLEuX6nhXBVBlradFOq75ybWq8n7E0P8tlBo';
$databaseId = '11a639229c674678b773f147be3e317b';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.notion.com/v1/databases/$databaseId/query");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Authorization: $token", "Notion-Version: 2021-08-16"));

$categoryData = curl_exec($ch);

curl_close($ch);

header('Access-Control-Allow-Origin: tomasz-betcher.infinityfreeapp.com');
header('Content-Type: application/json');
    echo $categoryData;

?>
