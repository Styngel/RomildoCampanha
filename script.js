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

const videos = [
    document.getElementById("video0"),
    document.getElementById("video1"),
    document.getElementById("video2"),
    document.getElementById("video3"),
    document.getElementById("video4"),
    document.getElementById("video5"),
    document.getElementById("video6"),
    document.getElementById("video7"),
    document.getElementById("video8"),
    document.getElementById("video9"),
    document.getElementById("video10"),
    document.getElementById("video11"),
    document.getElementById("video12"),
    document.getElementById("video13"),
    document.getElementById("video14"),
    document.getElementById("video15"),
    document.getElementById("video16"),
    document.getElementById("video17"),
    document.getElementById("video18"),
    document.getElementById("video19"),
    document.getElementById("video20"),
    document.getElementById("video21"),
    document.getElementById("video22"),
    document.getElementById("video23"),
    document.getElementById("video24"),
    document.getElementById("video25"),
    document.getElementById("video26"),
    document.getElementById("video27"),
    document.getElementById("video28"),
    document.getElementById("video29")
];

const nav = document.getElementById('navmobile')

const h1 = document.getElementById('principais-propostas')


const todas = [
    document.getElementById("intro"),
    document.getElementById("page"),
]

const imgirmaos = document.getElementById('imgirmaos')

const footer = document.getElementById('footer')

const cnpjtxt = document.getElementById('cnpjtxt')

const seta = document.getElementById('seta')

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

function ocultarVideos(){
    videos.forEach((video) => {
        if (video) {
            video.style.display = "none";
        }
    })
}

function mostrarvideos(index){
    let video = videos[index];
    
    if (video.style.display === "block"){
        video.style.display = "none"
    }
        else{
            ocultarVideos();
            video.style.display = "block";
        } 
    };


function mostrarmenu(){
    if (nav.style.display == "block"){
        nav.style.display = 'none';
        footer.style.position = '';
        mostrartodas();
        ocultarIrmaos();
    } else{
        nav.style.display = "block";
        fechartodas();
        mostrarIrmaos();
        mostrarFooter();
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
        todes.style.display = "";
})
}

function mostrarIrmaos(){
    imgirmaos.style.display = "block";
}
function ocultarIrmaos(){
    imgirmaos.style.display = "none";
}

function mostrarFooter(){
    footer.style.position = "fixed";
}

function cnpjs(){
   if (cnpjtxt.style.display == "none"){
       cnpjtxt.style.display = 'block';
       setaabre();
  } else {
        cnpjtxt.style.display = "none";
        setafecha();
    } }
  
function setaabre(){
    seta.style.transform = "rotatex(180deg)"
}
function setafecha(){
    seta.style.transform = "rotatex(0deg)"
}


//


    

    