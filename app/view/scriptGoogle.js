// app.js ou login.js (onde você tem o botão do Google)
    
        // 1. Importar os módulos do Firebase que você precisa
        // (Estas linhas você pode manter onde inicializa o Firebase ou criar um novo arquivo para autenticação)
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
        
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
                    window.location.href = 'home.html'; // Ajuste o caminho se necessário
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