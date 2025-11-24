// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNwZ94ok9msGG1QNRz5nimdnm-BCZTWUU",
    authDomain: "agendavue-b9fb5.firebaseapp.com",
    projectId: "agendavue-b9fb5",
    storageBucket: "agendavue-b9fb5.firebasestorage.app",
    messagingSenderId: "335176995746",
    appId: "1:335176995746:web:9639b7c4bfc66b048518fb"
  };
  

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
