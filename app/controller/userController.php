<?php
    require_once "../model/conexao.php";
    require_once "../model/userModel.php";


    Class User(){
        $action = $_GET["action"]
        switch ($action) {
            case 'cadastrar':
                cadastro();
                break;
        }
        
        public function cadastro(){
            $username = $_POST['txtName'];
            $usermail = $_POST['txtEmail'];
            $senha = $_POST['senhaPSW2'];

            
            if ($username == "" || $usermail == "" || $senha == ""){
                return;
            }
            $emailValido = filter_var($usermail, FILTER_SANITIZE_EMAIL);
            if (filter_var($usermail, FILTER_VALIDATE_EMAIL)) {
                echo "$emailValido";
            }


        }
    }
?>