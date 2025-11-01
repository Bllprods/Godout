//* Login *//
// 1. Importar os módulos do Firebase que você precisa
// (Estas linhas você pode manter onde inicializa o Firebase ou criar um novo arquivo para autenticação)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// Importe o módulo de autenticação e suas funções específicas!
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// 2. Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDAcynqZp8KMgzcPZH2Ze5OEaFtWzMcwtk",
    authDomain: "projhub-cc8c2.firebaseapp.com",
    projectId: "projhub-cc8c2",
    storageBucket: "projhub-cc8c2.firebasestorage.app",
    messagingSenderId: "264400081700",
    appId: "1:264400081700:web:186829ee9d7d548fd4d9b1",
    measurementId: "G-VX0WXTYPK2"
};

// 3. Inicializar o Firebase (se ainda não estiver inicializado neste arquivo)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. Obter a instância de autenticação e o provedor Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// 5. Encontrar o botão do Google na sua página de login
// Você deve dar um ID ao seu botão do Google no HTML, por exemplo:
// <button id="google-sign-in-button" class="btn btn-primary" ...>Google</button>
const googleSignInButton = document.getElementById('google-sign-in-button');

if (googleSignInButton) {
    googleSignInButton.addEventListener('click', async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // O usuário foi autenticado com sucesso!
            const user = result.user;
            console.log("Usuário logado com Google:", user);
            // Redirecionar para a página inicial
            sessionStorage.setItem("logado", true);
            window.location.href = 'areaUsuario.html'; // Ajuste o caminho se necessário

        } catch (error) {
            // Lidar com erros de autenticação
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro de autenticação com Google:", errorCode, errorMessage);
            // Mostrar uma mensagem de erro para o usuário
            alert(`Erro ao fazer login com Google: ${errorMessage}`);
        }
    });
}

// Opcional: Monitorar o estado de autenticação para manter o usuário logado
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuário está logado
        console.log("Usuário já logado:", user.displayName);
        // Você pode redirecionar para 'home.html' automaticamente se o usuário tentar acessar a página de login já logado
        // window.location.href = 'home.html';
    } else {
        // Usuário não está logado
        console.log("Nenhum usuário logado no momento.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btnCad = document.getElementById("cadBtn");
    const btnLogin = document.getElementById("btnLog"); 
//* Cadastro com Email*//
if (btnCad) {
    btnCad.addEventListener("click", ()=>{
        const email = document.getElementById("Email").value; // <<-- CORRECTION HERE
        const password = document.getElementById("Senha").value; // <<-- CORRECTION HERE
        const authc = getAuth();
        createUserWithEmailAndPassword(authc, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User registered:", user);
            
            // ... You might want to redirect the user or show a success message
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error registering user:", errorCode, errorMessage);
            // ... Display error message to the user, e.g., in an alert or on the page
            alert(`Erro de cadastro: ${errorMessage}`);
        })
        window.location.href= "/login.html";
    });
}
//* Login com Email*//

if (btnLogin) { // Add a check to ensure the element exists
    btnLogin.addEventListener("click", ()=>{
        const email = document.getElementById("Email").value; // <<-- CORRECTION HERE
        const password = document.getElementById("Senha").value; // <<-- CORRECTION HERE
        const authl = getAuth();
        signInWithEmailAndPassword(authl, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User logged in:", user);
            sessionStorage.setItem("logado", true); // Similar to Google login
            window.location.href = 'areaUsuario.html'; // Redirect on successful login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error logging in:", errorCode, errorMessage);
            alert(`Erro de login: ${errorMessage}`); // Display error message
        });
    });
}
});

//* Consulta *//
export function con() {
    
// Observa o estado de autenticação
    onAuthStateChanged(auth, (user) => {
        const userNameSpan = document.getElementById("userName");
        const userEmailSpan = document.getElementById("userEmail");
        const userPhotoImg = document.getElementById("userPhoto");
        const userDescriptionSpan = document.getElementById("userDescription"); // Adicione este
        const userCompanySpan = document.getElementById("userCompany");         // Adicione este
        const userPlanSpan = document.getElementById("userPlan");               // Adicione este
        const userRoleSpan = document.getElementById("userRole");               // Adicione este

        if (user) {
            // Usuário logado
            console.log("Usuário logado:", user.displayName);

            if (userNameSpan) {
                userNameSpan.innerText = user.displayName || "Usuário sem nome";
            }
            if (userEmailSpan) {
                userEmailSpan.innerText = user.email || "Email não disponível";
            }
            if (userPhotoImg && user.photoURL) {
                userPhotoImg.src = user.photoURL;
            } else if (userPhotoImg) {
                // Se não houver photoURL, mantenha a imagem padrão ou defina uma de fallback
                userPhotoImg.src = "assets/19197195.jpg";
            }

            // Para 'descrição', 'empresa', 'plano' e 'cargo',
            // estas informações não vêm diretamente do Google Auth.
            // Você precisaria carregá-las de um banco de dados (ex: Cloud Firestore)
            // usando o user.uid como chave para identificar os dados específicos do usuário.
            // Por enquanto, vamos deixá-las como "N/A" ou um placeholder.
            if (userDescriptionSpan) {
                userDescriptionSpan.innerText = "Sua descrição aqui (carregue do BD)";
            }
            if (userCompanySpan) {
                userCompanySpan.innerText = "Sua empresa (carregue do BD)";
            }
            if (userPlanSpan) {
                userPlanSpan.innerText = "Seu plano (carregue do BD)";
            }
            if (userRoleSpan) {
                userRoleSpan.innerText = "Seu cargo (carregue do BD)";
            }

        } else {
            // Nenhum usuário logado ou o usuário deslogou
            console.log("Nenhum usuário logado.");
            if (userNameSpan) {
                userNameSpan.innerText = "Visitante";
            }
            if (userEmailSpan) {
                userEmailSpan.innerText = "Não logado";
            }
            if (userPhotoImg) {
                userPhotoImg.src = "assets/19197195.jpg"; // Volta para a imagem padrão
            }
            if (userDescriptionSpan) {
                userDescriptionSpan.innerText = "";
            }
            if (userCompanySpan) {
                userCompanySpan.innerText = "";
            }
            if (userPlanSpan) {
                userPlanSpan.innerText = "";
            }
            if (userRoleSpan) {
                userRoleSpan.innerText = "";
            }

            // Opcional: Redirecionar para a página de login se não houver usuário

            window.location.href = "home.html";
        }
    });
}

export function logout() {
    signOut(auth).then(() => {
        console.log("Usuário deslogado com sucesso.");
        sessionStorage.removeItem("logado");
        window.location.href = 'home.html'; 
    }).catch((error) => {
        console.error("Erro ao deslogar:", error.message);
        alert(`Erro ao deslogar: ${error.message}`);
    });
}