/**
 * Configuração do Firebase
 * By Cantel
 * MIT License 
 **/

/**
 * Configurações so Firebase
 * 
 * IMPORTANTE!
 * Troque os valores de 'firebaseConfig' pelos dados do SEU FIREBASE!
 **/
 
 const firebaseConfig = {
    apiKey: "AIzaSyADbflWGcfupzm6eOHJ0VmUXQbhWAIHq8M",
    authDomain: "frontend-1b56f.firebaseapp.com",
    projectId: "frontend-1b56f",
    storageBucket: "frontend-1b56f.appspot.com",
    messagingSenderId: "1094482346609",
    appId: "1:1094482346609:web:a97e0d90e1a88344d711d0"
  };

// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa o Firebase Authentication 
const auth = firebase.auth();

// Define provedor de autenticação.
var provider = new firebase.auth.GoogleAuthProvider();