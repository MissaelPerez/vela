import {

db,
collection,
addDoc,
serverTimestamp

}

from "./firebase-config.js";





const musica = document.getElementById("musica");

const botonAbrir = document.getElementById("abrirBtn");



botonAbrir.addEventListener("click",()=>{


musica.play();


document.getElementById("inicio")
.style.display="none";


document.getElementById("contenido")
.style.display="block";


});







window.confirmar = async function(){



let nombre = document
.getElementById("nombre")
.value
.trim();




if(nombre===""){


alert("Escribe tu nombre");

return;


}




try{


await addDoc(

collection(db,"confirmaciones"),

{

nombre:nombre,

fecha:serverTimestamp()

}


);



document.getElementById("msg")
.innerHTML =
"🎉 Gracias "+nombre+"<br>Confirmación recibida";


document.getElementById("nombre")
.value="";



}

catch(error){


console.error(error);

alert("Error al guardar confirmación");


}



}