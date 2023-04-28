/*** Integração com o Firebase.com
 * 
 * 
 * Configuração do Firebase para o site do Cantel
 */

const firebaseConfig = {
    apiKey: "AIzaSyADbflWGcfupzm6eOHJ0VmUXQbhWAIHq8M",
    authDomain: "frontend-1b56f.firebaseapp.com",
    projectId: "frontend-1b56f",
    storageBucket: "frontend-1b56f.appspot.com",
    messagingSenderId: "1094482346609",
    appId: "1:1094482346609:web:a97e0d90e1a88344d711d0"
};


/**
* Integração com o Firebase.com
**/
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

// Importa o Authentication
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);

// Inicializa o mecanismo de autenticação.
const auth = getAuth();

// Especifica o provedor de autenticação
const provider = new GoogleAuthProvider();


onAuthStateChanged(auth, (user) => {
    console.log('>>>', user)
    if (user) {
        sessionStorage.userData = JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
            created: user.metadata.createdAt,
            lastLogin: user.metadata.lastLoginAt 
        })
    } else {
        delete sessionStorage.userData
    }
});

// Executa a jQuery quando o documento estiver pronto.
$(document).ready(myFirebase)

function myFirebase() {

    // Detecta cliques no botão de login.
    $('#navUser').click(login)
}

// Função que processa cliques no botão login/profile.
function login() {

    // Se não está logado...
    if (!sessionStorage.userData) {

        // Faz login usando popup.
        signInWithPopup(auth, provider)

            // Se logou corretamente.
            .then(() => {

                // Redireciona para a 'home'.
                location.href = '/home'
            })

        // Se está logado..
    } else

        // Redireciona para 'profile'.
        location.href = '/profile'

        return false
}