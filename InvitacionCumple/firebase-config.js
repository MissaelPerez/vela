// Firebase Configuración Invitación Chars 32

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getFirestore,
collection,
addDoc,
serverTimestamp
}
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// Configuración Firebase

const firebaseConfig = {

apiKey: "AIzaSyC_hrFs5fETSKWQduhuE9DZ7aRRSoTGZOQ",

authDomain: "invitacion-chars-32.firebaseapp.com",

projectId: "invitacion-chars-32",

storageBucket: "invitacion-chars-32.firebasestorage.app",

messagingSenderId: "815256350032",

appId: "1:815256350032:web:d7276fe7eb603f4934d055"

};



// Inicializar Firebase

const app = initializeApp(firebaseConfig);


// Base de datos

const db = getFirestore(app);



export {

db,

collection,

addDoc,

serverTimestamp

};