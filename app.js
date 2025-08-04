let listaDeAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let nombre = amigoInput.value.trim();

    // Validación para nombres con menos de 2 letras
    if (nombre.length < 2) {
        alert("Por favor, ingresa un nombre con al menos 2 letras.");
        return;
    }

    // Validación para nombres repetidos
    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya se encuentra en la lista. Por favor, ingresa un nombre único.");
        return;
    }

    listaDeAmigos.push(nombre);

    let listaAmigosHTML = document.getElementById("listaAmigos");
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = `${listaDeAmigos.length}. ${nombre}`;
    nuevoAmigo.className = "name-item";
    nuevoAmigo.setAttribute("onclick", `quitarAmigo('${nombre}')`);
    listaAmigosHTML.appendChild(nuevoAmigo);

    amigoInput.value = "";
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (listaDeAmigos.length < 3) {
        alert("Necesitas al menos 3 amigos para realizar el sorteo.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
    let ganador = listaDeAmigos[indiceGanador];

    resultado.textContent = `¡El amigo secreto es: ${ganador}!`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    listaDeAmigos = [];

    document.getElementById("amigo").value = "";

    let listaAmigosHTML = document.getElementById("listaAmigos");
    listaAmigosHTML.innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.textContent = "";

}

// Extra: Función para eliminar a un amigo de la lista
function quitarAmigo(nombre) {
    let indice = listaDeAmigos.indexOf(nombre);
    if (indice > -1) {
        listaDeAmigos.splice(indice, 1);
        
        let listaAmigosHTML = document.getElementById("listaAmigos");
        listaAmigosHTML.innerHTML = "";
        listaDeAmigos.forEach((amigo, index) => {
            let nuevoAmigo = document.createElement("li");
            nuevoAmigo.textContent = `${index + 1}. ${amigo}`;
            nuevoAmigo.className = "name-item";
            nuevoAmigo.setAttribute("onclick", `quitarAmigo('${amigo}')`);
            listaAmigosHTML.appendChild(nuevoAmigo);
        });
    }
}