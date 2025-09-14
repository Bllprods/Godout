<?php

    define ('BASE_PATH', __DIR__ . '/../' );

    require_once BASE_PATH . 'app/controller/Tcontroll.php';

    $telas = new Tcontroll();


    switch ($actions) {
        case 'home':
            $telas->home();
            break;
        case 'serv':
            $telas->Tserv();
            break;
        case 'Tlog':
            $telas->Tlogin();
            break;
        case ''
        default:
            $telas->home();
            break;
    }
?>