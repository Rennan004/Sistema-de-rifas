<?php

session_start(); //Inicio a sessão para coletar das as informações existentes na sessão do navegador

session_destroy();
// Obter a nossa conexão com o banco de dados
include('../../conexao/conn.php');
$SENHA = $_REQUEST['SENHA'];
$LOGIN = $_REQUEST['LOGIN'];
// Gerar uma consulta em banco de dados com as informações digitadas no formulário de login
$sql = $pdo->query("SELECT ID, NOME, COUNT(ID) AS achou, TIPO_ID FROM VENDEDOR WHERE LOGIN = '$LOGIN' AND SENHA = '$SENHA' 
");

// Gero as devidas comparações
while ($resultado = $sql->fetch(PDO::FETCH_ASSOC)) {
        if($resultado['achou'] >= 1){
        session_start(); // Inicio uma sessão --> é um local onde eu guardo informações para serem utilizadas posteriormente
        $_SESSION['ID'] = $resultado['ID'];
        $_SESSION['NOME'] = $resultado['NOME'];
        $_SESSION['TIPO'] = $resultado['TIPO_ID'];
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Login correto!',
            'TYPE' => $resultado['TIPO_ID'],
            'ID' => $resultado['ID']
        );
    }else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Nome de usuário ou senha INCORRETOS.'
        );
    }
}

echo json_encode($dados);