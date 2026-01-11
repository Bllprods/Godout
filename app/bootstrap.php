<?php
$env = parse_ini_file(__DIR__ . '/../.env');

define('BASE', dirname(__DIR__) . '/app');
define('BASE_PUBLIC', dirname(__DIR__) . '/public');

// Data e sessão
date_default_timezone_set('America/Sao_Paulo');
session_start();

// Inicializando BD
try {
    $pdo = new PDO(
        "mysql:host=" . $env['DB_HOST'] . ";dbname=" . $env['DB_NAME'] . ";charset=utf8mb4",
        $env['DB_USER'],
        $env['DB_PASS']
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // exceções
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); // transformar retornos em array associativo
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false); // só com dados reais

} catch (PDOException $e) {
    echo "ERRO DE CONEXÃO NO PDO: " . $e->getMessage();
    exit();
} catch (Exception $e) {
    echo "ERRO não passou da conexão: " . $e->getMessage();
    exit();
}
