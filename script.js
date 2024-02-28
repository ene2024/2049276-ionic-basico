let BA=document.getElementById("button");
var articulotxt=document.getElementById("art");
var montotxt=document.getElementById("monto");
let seccionlista = document.getElementById("recibo");

var articulo ='';
var monto=0;
var total=0;

BA.onclick = function () {
    articulo=articulotxt.value;
    monto=parseInt(montotxt.value);

    total=total + monto;
 
    let lista = document.createElement('p');
    lista.innerHTML = `${articulo} . . . . . $ ${monto} . . . . Total:$ ${total}`;
    seccionlista.appendChild(lista);

    articulotxt.value=' ';
    montotxt.value= ' ';
}
