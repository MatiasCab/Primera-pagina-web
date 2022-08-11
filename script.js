/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});*/

function addElementUL() {
    var a = document.getElementById("inputTexto").value;
    var l = document.createElement("li");
    l.innerHTML = a;
    var b = document.getElementById("listaDesordenada");
    b.appendChild(l);
    l.setAttribute("onclick", "eliminar(this)");
}

function addElementOL() {
    var a = document.getElementById("inputTexto").value;
    var l = document.createElement("li");
    var i = document.getElementById("listaOrdenada");
    l.innerHTML = a;
    l.setAttribute("onclick", "eliminar(this)");
    if(i.lastChild.className === "odd"){
        //l.className = "even"; funciona
        l.classList.add("even");
    }
    else{
        //l.className = "odd"; funciona
        l.classList.add("odd");
    }
    l.classList.add();
    var b = document.getElementById("listaOrdenada");
    b.appendChild(l);

}


function eliminar(elemento) {
    var p = elemento.parentElement;
    p.removeChild(elemento);
    ;
}

