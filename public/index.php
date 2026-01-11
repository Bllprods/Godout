<?php
require __DIR__ . '/../app/bootstrap.php';

$route = $_GET['route'] ?? "init";

switch ($route) {
    case 'init':
        include BASE . "/view/Planoria.html";
        break;
    case 'header':
        include BASE . "/view/subTelas/header.html";
        break;
    case 'home':
        include BASE . "/view/paginas/home.html";
        break;
    case 'servicos':
        include BASE . "/view/paginas/servicos.html";
        break;
    case 'precos':
        include BASE . "/view/paginas/precos.html";
        break;
    case 'areaUser':
        include BASE . "/view/paginas/areaUser.html";
        break;
    case 'areaEmp':
        include BASE . "/view/paginas/areaEmp.html";
        break;
    case 'control':
        include BASE . "/view/paginas/control.html";
        break;
    case 'Auth':
        include BASE . "/view/loginCad/AuthPage.html";
        break;
    case 'log':
        include BASE . "/view/loginCad/login.html";
        break;
    case 'cad':
        include BASE . "/view/loginCad/cadastro.html";
        break;
    default:
        http_response_code(404);
        echo "Página não encontrada";
}
