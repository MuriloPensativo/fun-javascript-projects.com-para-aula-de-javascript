let musicas = [
    "12AM", "Aerodynamic", "Into the Groove", "Lunchbox Friends", "Maniac",
    "New Beginnings", "OK Not To Be OK", "Rescue Me", "Resonance", "Running Up That Hill",
    "She", "Único Incomparável", "Voyager", "We're Finally Landing", "Zenith"
];
let reprodutor = document.getElementById("reprodutor");

let criaListaMusicas = () => {
    let lista = document.createElement("ol");

    for (let i = 0; i < musicas.length; i++) {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(musicas[i]));
        lista.appendChild(item);
    };

    return lista;
};

let listaMusicas = document.getElementById("listaMusicas");
listaMusicas.appendChild(criaListaMusicas());

let links = document.querySelectorAll("li");
for (let link of links) {
    link.addEventListener("click", selecionarMusica);
};

function selecionarMusica(e) {
    document.querySelector("#disco").classList.remove("pulse");

    let source = document.getElementById("source");
    source.src = "musicas/" + e.target.innerText + ".mp3";
    document.getElementById("musicaAtual").innerText = `Está tocando: ${e.target.innerText}`;

    reprodutor.load();
    reprodutor.play();

    document.querySelector("#disco").classList.add("pulse");
};

function tocarMusica() {
    if (reprodutor.readyState) {
        reprodutor.play();
    };
};

function pausarMusica() {
    reprodutor.pause();
};

let regulador = document.getElementById("regularVolume");
regulador.oninput = function(e) {
    let volume = e.target.value;
    reprodutor.volume = volume;
};

function atualizarProgresso() {
    if (reprodutor.currentTime > 0) {
        let barraProgresso = document.getElementById("progress");
        barraProgresso.value = (reprodutor.currentTime / reprodutor.duration) * 100;
    };
};

let barraProgresso = document.getElementById("progress");
barraProgresso.addEventListener("click", (e) => {
    reprodutor.currentTime = (e.offsetX / barraProgresso.clientWidth) * reprodutor.duration;
});