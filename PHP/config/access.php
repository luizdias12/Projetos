<?php

    $user = $_POST['user_login'];
    $pass = $_POST['pass_login'];

    if($user && $pass){
        $_SESSION['loginOK'] = 1;
        $_SESSION['us_log'] = $user;
        header("Location: ../index.php?app=main");
    } else {
        session_destroy();
        header("Location: ../index.php?app=login");
    }
?>