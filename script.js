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

var mum = [$12am, aerodynamic, intothegroove, lunchboxfriends]
let $12am = {
    Name: "12AM",
    Song: "12am.mp3"
};
let aerodynamic = {
    Name: "Aerodynamic",
    Song: "aerodynamic.mp3"
};
let intothegroove = {
    Name: "Into the Groove",
    Song: "into-the-groove.mp3"
};
let lunchboxfriends = {
    Name: "Lunchbox Friends",
    Song: "lunchbox-friends.mp3"
};
let maniac = {
    Name: "Maniac",
    Song: "maniac.mp3"
};
let newbeginnings = {
    Name: "New Beginnings",
    Song: "new-beginnings.mp3"
};
let oknottobeok = {
    Name: "OK Not To Be OK",
    Song: "ok-not-to-be-ok.mp3"
};
let rescueme = {
    Name: "Rescue Me",
    Song: "rescue-me.mp3"
};
let resonance = {
    Name: "Resonance",
    Song: "resonance.mp3"
};
let runningupthathill = {
    Name: "Running Up that Hill",
    Song: "running-up-that-hill.mp3"
};
let she = {
    Name: "She",
    Song: "she.mp3"
};
let unicoimcomparavel = {
    Name: "Único imcomprarável",
    Song: "único-incomparável.mp3"
};
let voyager = {
    Name: "Voyager",
    Song: "voyager.mp3"
};

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