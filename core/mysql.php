<?php

$banco = "Intranet";
$usuario = "master";
$senha = "P@ssw0rd";
$hostname = "localhost";

$mysqli = new mysqli($hostname,$usuario,$senha,$banco);

if ($mysqli->connect_error) {
	die ('Erro ao conectar (' . $mysqli->connect_errno .')'
		. $mysqli->connect_error);
}

?>