/*var nombre= prompt("Ingrese el nombre");
var edad= prompt("Ingrese la edad");*/
//console.log(saludo);
alert(nombre +" "+ edad);
presentar_saludo(nombre,edad);
function presentar_saludo(name,edad){
    alert(name+" "+ edad);
    let ubication =document.getElementById("saludo");
    ubication.textContent= name +" "+edad;
    //document.getElementById("saludo").innerHTML='<a>'+ name+' '+edad+'</a>'
    //document.getElementById('prueba').innerHTML="<h1> hola mundo </h1>"

    let new1 = document.createElement("h2");
    new1.textContent ="hola mundo"
    let despues= document.getElementById("prueba");
    despues.appendChild(new1);
}

function saludo2(){
    console.log("hola")
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("edad").value;
    let ubicacion = document.getElementById("saludo");
    ubicacion.textContent= nombre+" "+ edad;
    let new1 =document.createElement("h2");
    new1.textContent= "hola mundo"
    let despues =document.getElementById("prueba");
    despues.appendChild(new1)
}
