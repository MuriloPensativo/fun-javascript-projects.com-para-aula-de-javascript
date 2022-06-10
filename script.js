let musicas = [
    "bringmethehorizon-canyoufeelmyheart.mp3",
    "caleb-12am.mp3",
    "conangray-maniac.mp3",
    "daftpunk-aerodynamic.mp3",
    "daftpunk-voyager.mp3",
    "harrystyles-she.mp3",
    "home-resonance.mp3",
    "home-werefinallylanding.mp3",
    "katebush-runningupthathill.mp3",
    "kavinsky-zenith.mp3",
    "madonna-intothegroove.mp3",
    "marshmello-rescueme.mp3",
    "melaniemartinez-lunchboxfriends.mp3",
    "neffex-scars.mp3",
    "pregadorluo-unicoincomparavel.mp3",
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