const email = document.getElementById("txtEmail");
const senha = document.getElementById("txtPsw1");
const senhaConf = document.getElementById("txtPsw2");
const msgEmailContainer = document.getElementById("msgEmail");

// Regex para validação de formato de e-mail (robusta, mas não perfeita)
// Verifica: user@domain.tld, permitindo caracteres como ., _, % e +.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Função para testar o email com a Regex
const isValidEmail = (email) => emailRegex.test(email);

email.addEventListener("input", ()=>{
    // 1. Limpa a mensagem sempre que o usuário digita
    msgEmailContainer.textContent = "";
    msgEmailContainer.style.color = "initial";
    
    // Pega o valor atual e remove espaços em branco (boa prática)
    const emailValue = email.value.trim();

    // 2. Verifica se o campo não está vazio E se o formato é inválido.
    if (emailValue !== "" && !isValidEmail(emailValue)) {
        msgEmailContainer.textContent = "O endereço de email não parece ter um formato válido. Ex: nome@provedor.com";
        msgEmailContainer.style.color = "red";
    }

    // Nota: Se emailValue for "" (vazio), a mensagem não é mostrada,
    // pois assumimos que a validação de campo obrigatório será feita na submissão do formulário.
});