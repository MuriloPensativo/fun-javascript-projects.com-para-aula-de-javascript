let musicas = [
    "12am.mp3",
    "aerodynamic.mp3",
    "into-the-groove.mp3",
    "lunchbox-friends.mp3",
    "maniac.mp3",
    "new-beginnings.mp3",
    "ok-not-to-be-ok.mp3",
    "rescue-me.mp3",
    "resonance.mp3",
    "running-up-that-hill.mp3",
    "she.mp3",
    "único-incomparável.mp3",
    "voyager.mp3",
    "we're-finally-landing.mp3",
    "zenith.mp3",
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
    source.src = "musicas/" + e.target.innerText;
    document.getElementById("musicaAtual").innerText = `Tocando agora: ${e.target.innerText}`;

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