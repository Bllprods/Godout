<?php
    require_once "../model/conexao.php";
    //require_once "../model/userModel.php";

    $action = $_GET["action"];
    $user = new User();
    switch ($action) {
        case 'cadastrar':
            $user -> cadastro();
            break;
    }    

    Class User{

        public function cadastro(){
            $username = $_POST['txtName'];
            $usermail = $_POST['txtEmail'];
            $senha = $_POST['senhaPSW2'];

            var_dump($usermail, $username, $senha);



        }
    }
?>