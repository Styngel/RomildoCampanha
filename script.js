const temas = [
    document.getElementById("tema1"),
    document.getElementById("tema2"),
    document.getElementById("tema3"),
    document.getElementById("tema4"),
    document.getElementById("tema5"),
    document.getElementById("tema6"),
    document.getElementById("tema7"),
    document.getElementById("tema8"),
    document.getElementById("tema9"),
    document.getElementById("tema10")
];
const nav = document.getElementById('navmobile')

const h1 = document.getElementById('principais-propostas')

const todas = [
    document.getElementById("intro"),
    document.getElementById("page"),
]

const imgirmaos = document.getElementById('imgirmaos')

function h1vai(){
    h1.style.display = "none"
}
function h1vem(){
    h1.style.display = "block"
}

function ocultarTemas() {
    temas.forEach(tema => {
        tema.style.display = "none";
    });
}

function mostrartema(index) {
    let tema = temas[index];
    
    if (tema.style.display === "block"){
        h1vem();
        tema.style.display = "none";
    } 
    else {
        ocultarTemas();
        h1vai();
        tema.style.display = "block"; 
    }
}

function mostrarmenu(){
    if (nav.style.display == "block"){
        nav.style.display = 'none';
        mostrartodas();
        ocultarIrmaos();
    } else{
        nav.style.display = "block";
        fechartodas();
        mostrarIrmaos();
    }
}

function fecharnav(){
    nav.style.display = "none";
}

function fechartodas(){
    todas.forEach(todes => {
        todes.style.display = "none";
    })
}
function mostrartodas(){
    todas.forEach(todes => {
        todes.style.display = "block";
})
}

function mostrarIrmaos(){
    imgirmaos.style.display = "block";
}
function ocultarIrmaos(){
    imgirmaos.style.display = "none";
}