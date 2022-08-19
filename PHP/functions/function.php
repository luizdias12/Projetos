<?php

function validaSessao($app){
    if(!isset($_SESSION['loginOK']) && $app != 'login') {
        // header("Location: index.php?app=login");
        httpMsg(403, 'fas fa-ban');
    } else if(isset($_SESSION['loginOK']) && $app != 'login') {
        httpMsg(200, 'fas fa-circle-check');
    } else if(isset($_SESSION['loginOK']) && $app == 'login') {
        echo "<script>location.replace('index.php?app=main')</script>";
    }
}

function httpMsg($http, $icon){
    switch($http){
        case 403 : $msg = "HTTP " . $http . " - Acesso Proibido";
            break;
        case 200 : $msg = "HTTP " . $http . " - Bem Vindo " . $_SESSION['us_log'];
            break;
    }

    die('<div class="jumbotron jumbotron-fluid">
    <div class="container my-4 p-2">
        <h1 class="display-4"><i class="'.$icon.'"></i></h1>
        <h1 class="display-4">'.$msg.'</h1>
    </div>
</div>');
}

?>