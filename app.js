// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se guardarán los amigos
let amigos = [];

// CReando la funcionde agregar amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");

    /* tengo que elimar espacios en blanco puede que el usuario
    ingrese espacios en blanco y lo considere como texto vacio o cadena de 
    texto vacio */
    const nombre = input.value.trim(); //Eliminar espacios en blanco

    // si el campo nombre esta vacio que muestre una alerta
    if (nombre === "") {
        alert(" Por favor, ingresa un nombre válido.");
        return;
    }

    // dentro del array ingreso los nombres
    amigos.push(nombre);

    // Limpiar la caja de texto
    input.value = "";

    //llamo mostrarlista para que se vea en la pantalla
    mostrarLista();
}

// quiero generar la lista de nombres en la pantalla
// busco en index la etiquueta que contega lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

        amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert(" No hay amigos para sortear. Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
