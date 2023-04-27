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

// Especifica o provedor de autenticação
const provider = new GoogleAuthProvider();

const auth = getAuth();

signInWithPopup(auth, provider)

var user;

onAuthStateChanged(auth, (user) => {
    if (user) {
        sessionStorage.userData = JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid
        })
    } else {
        delete sessionStorage.userData
    }
});