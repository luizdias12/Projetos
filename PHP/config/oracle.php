<?php

$ora_user="VILLE5";
$ora_pass="G00GL3";
$ora_host="villep-scan.villefort.lan";
$ora_serv="CEMAPROD";

$ora_conn = oci_connect($ora_user,$ora_pass,$ora_host.'/'.$ora_serv);
if (!$ora_conn){
	$ora_conn_erno = oci_error();
    echo ($ora_conn_erno['message']."\n");
    oci_close($ora_conn);
} else {
    echo "Conectado com sucesso";
}

?>