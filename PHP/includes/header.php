<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dashboardcode/bsmultiselect@1.1.18/dist/css/BsMultiSelect.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
    <script src="https://kit.fontawesome.com/2434c0369c.js" crossorigin="anonymous"></script>
    <title>Projeto Gamma8</title>
</head>
    <body>

    <?php
        session_start();

        $app = $_GET['app'];
        var_dump($_SESSION);

    ?>

    <div class="container my-4">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container my-2 p-2">
            <a class="navbar-brand" href="#!"><?php echo strtoupper($app)?></a>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" id="ddBtn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Areas de Acesso
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="ddBtn">
                                <?php
                                    $array = scandir(__DIR__ . '/app');
                                    for($i=2; $i<count($array); $i++){
                                        $filename = explode('.',$array[$i])[0];
                                        echo $app == $filename ? "<li><a class='dropdown-item active' href='index.php?app=" . $filename . "'>" . $filename . "</a></li>" : "<li><a class='dropdown-item' href='index.php?app=" . $filename . "'>" . $filename . "</a></li>";
                                    }
                                    if(isset($_SESSION['loginOK'])){
                                        echo "<li><hr class='dropdown-divider'></li>
                                        <li><a class='dropdown-item' href='index.php?app=logoff'>Sair</a></li>";
                                    }
                                ?>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <?php

        require_once "./functions/function.php";

        if(!file_exists(realpath(__DIR__)."/app/".$app.".php") && isset($app) ){
            include("error/error.php");
        } else {
            include("app/" . $app . ".php");
            validaSessao($app);
        }

    ?>
