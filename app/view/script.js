const btnCad = document.getElementById("Cadastro");

btnCad.addEventListener("click", () => {
    Swal.fire({
        title: 'Cadastre-se',
        html: `
            <hr>
            <input id="swalNome" class="swal2-input" placeholder="Nome">

            <input id="swalEmail" class="swal2-input" placeholder="Email">
            <br>
            <label for="swalConta">Selecione o tipo de conta</label>
            <select id="swalConta" class="swal2-select">
                <option value="Empresa">Empresa</option>
                <option value="Independente">Independente</option>
            </select>
            <input id="swalSenha" class="swal2-input" placeholder="senha">
            <input id="swalCSenha" class="swal2-input" placeholder="Confirmação senha">
        `,
        confirmButtonText: 'Enviar',
        voltarButtonText: 'Voltar',
        preConfirm: () => {
            const nome = document.getElementById('swalNome').value;
            const email = document.getElementById('swalEmail').value;
            const tConta = document.getElementById('swalConta').value;
            const senha = document.getElementById('swalSenha').value;
            const confSenha = document.getElementById('swalCSenha').value;

            if (!nome || !email || !tConta || !senha || !confSenha) {
            Swal.showValidationMessage('Preencha todos os campos!');
            return false;
            }
            if (senha != confSenha) {
            Swal.showValidationMessage('Senhas Não coincidem!');
            return false;    
            }
            return { nome, email, tConta, senha};
        }
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(`Nome: ${result.value.nome}\n
                        Email: ${result.value.email}\n
                        Tipo: ${result.value.tConta}\n
                        Senha: ${result.value.senha}`);
        }
    });
});
