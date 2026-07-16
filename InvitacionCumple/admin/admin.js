import {
db
}
from "../firebase-config.js";


import {

collection,
getDocs

}
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const lista=document.getElementById("lista");



async function cargar(){


const datos=
await getDocs(
collection(db,"confirmaciones")
);



let contador=0;



datos.forEach(doc=>{


contador++;


let d=doc.data();



lista.innerHTML+=`

<tr>

<td>${d.nombre}</td>

<td>${

d.fecha?
d.fecha.toDate().toLocaleString()
:
""

}</td>

</tr>


`;


});



document.getElementById("total")
.textContent=
"Total: "+contador;



}



cargar();