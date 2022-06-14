let musicas = [
    {Name: "12AM", Song: "12am.mp3"},
    {Name: "Aerodynamic", Song: "aerodynamic.mp3"},
    {Name: "Into the Groove", Song: "into-the-groove.mp3"},
    {Name: "Lunchbox Friends", Song: "lunchbox-friends.mp3"},
    {Name: "Maniac", Song: "maniac.mp3"},
    {Name: "New Beginnings", Song: "new-beginnings.mp3"},
    {Name: "OK Not To Be OK", Song: "ok-not-to-be-ok.mp3"},
    {Name: "Rescue Me", Song: "rescue-me.mp3"},
    {Name: "Resonance", Song: "resonance.mp3"},
    {Name: "Running Up that Hill", Song: "running-up-that-hill.mp3"},
    {Name: "She", Song: "she.mp3"},
    {Name: "Único Incomparável", Song: "único-incomparável.mp3"},
    {Name: "Voyager", Song: "voyager.mp3"},
    {Name: "We're Finally Landing", Song: "we're-finally-landing.mp3"},
    {Name: "Zenith", Song: "zenith.mp3"}
];
let reprodutor = document.getElementById("reprodutor");

let criaListaMusicas = () => {
    let lista = document.createElement("ol");

    for (let i = 0; i < musicas.length; i++) {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(musicas[i].Name));
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
    document.getElementById("musicaAtual").innerText = `Está tocando: ${e.target.innerText.substr(0, e.target.innerText.length - 4)}`;

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
