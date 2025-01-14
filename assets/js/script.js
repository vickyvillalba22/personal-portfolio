const descProyectos = [

    {
        desc: "Layout of a modern and responsive website based on a pre-designed template. I used HTML, CSS, and JavaScript to design a visually appealing site, with a user experience optimized for different devices.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Website front-end developement for a pre-designed canva",
        source: "assets/imgs/floria-project.png"
    },

    {
        desc:"In this typographic animation project, I explored the movement and dynamism of words using After Effects. I aimed to transform typography into an attractive and expressive visual element, combining graphic design and animation to convey messages in a unique way.",
        enlace: "https://drive.google.com/file/d/1PhY-wYa7TTwMAldNJsQPI5t5sFd-s8j1/view?usp=drive_link",
        titulo: "Typographic Animation",
        source: "assets/imgs/animacion-tipo.png"
    },

    {   
        desc:"I designed and programmed an interactive game in JavaScript. The game includes scoring and visual effects that provide a dynamic experience. It was created as part of a project to teach basic programming concepts in a fun way.",
        enlace: "https://juego-bomba-de-tiempo-first-year.vercel.app/",
        titulo: "JavaScript Game",
        source: "assets/imgs/javascript-game.jpg"
    },

    {
        desc:"I created a personal portfolio website using CSS Grid and Flexbox. The design is clean and responsive, with an interactive project section to showcase each work.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Website for Personal Portfolio",
        source: "assets/imgs/portfolio-weebsite.jpg"
    },

    {
        desc: "Development of a music video featuring a fellow singer. The project was done collaboratively, where I was responsible for directing, sound production, and editing.",
        enlace: "https://youtu.be/KH8t42iJ0Tc",
        titulo: "Music Video Production for Artist",
        source: "assets/imgs/videoclip-project.png"
    },

    {
        desc:"I designed a functional prototype of a mobile app for task organization and time management. It includes wireframes, an intuitive design, and interactive navigation that allows simulating the user experience.",
        enlace: "https://www.behance.net/gallery/185073747/Trabajo-universitario-Grido-Infantil",
        titulo: "Mobile App Prototype in Figma",
        source: "assets/imgs/grido-app.png"
    }

];

const miDialog = document.getElementById("modalProyecto");
const cerrarDialog = document.getElementById("cerrarDialog");
const goto = document.getElementById("go");

let imagenDialog = document.querySelector("dialog img");
let tituloDialog = document.querySelector("dialog h3");
let descDialog = document.querySelector("dialog p");
let linkDialog = document.querySelector("dialog a");
let botonDialog = document.getElementById("botonProject");

function showModal(){

    let pos = this.getAttribute('position');

    if (pos==3){
        botonDialog.classList.add("invisible");
        linkDialog.classList.add("invisible");
    } else {
        botonDialog.classList.remove("invisible");
        linkDialog.classList.remove("invisible");
    }

    imagenDialog.setAttribute("src", descProyectos[pos].source);
    tituloDialog.innerText = descProyectos[pos].titulo;
    descDialog.innerText = descProyectos[pos].desc;
    linkDialog.setAttribute("href", descProyectos[pos].enlace);

    miDialog.showModal();
}

cerrarDialog.addEventListener('click', ()=>{
    miDialog.close();
})



/*movimiento header*/

const header = document.getElementById("header");

window.addEventListener('scroll', ()=>{

    if (window.scrollY>50){
        header.classList.add("fondoNegro");
    } else {
        header.classList.remove("fondoNegro");
    }

});

/*proyectos*/

let contProyectos = document.getElementById("contProyectos");

let ids = 1;

for (let i=0; i<descProyectos.length; i++){

    let articulo = document.createElement("article");
    articulo.setAttribute("id", `proyecto${ids}`);
    articulo.setAttribute("position", i);
    articulo.classList.add("bordeRedondo", "df", "centerX", "centerY", "proyecto");

    articulo.addEventListener('click', showModal);

    let contenedor = document.createElement("div");
    contenedor.classList.add("df", "centerX", "centerY", "spaceb", "h90", "w90");

    if (ids==1 || ids == 6){
        contenedor.classList.add("columna");
    }

        let imagen = document.createElement("img");
        imagen.setAttribute("src", descProyectos[i].source);
        imagen.classList.add("h80", "w100", "bordeRedondo", "objCover");

        if (ids > 1 && ids < 6){
            imagen.classList.remove("w100");
            imagen.classList.add("w50");
        }

        let titulito = document.createElement("h3");
        titulito.classList.add("subtitulos-peque", "fuente", "blanco", "textCenter");
        titulito.innerText = descProyectos[i].titulo;

    contenedor.append(imagen, titulito);
    articulo.appendChild(contenedor);

    contProyectos.appendChild(articulo);

    ids++;

}

/*habilidades*/

const habilidades = [

    {
        hab: "Communication",
        icono1: "bi", 
        icono2: "bi-chat"
    },

    {
        hab: "Teamwork",
        icono1: "bi", 
        icono2: "bi-people"
    },

    {
        hab: "Creativity",
        icono1: "bi", 
        icono2: "bi-lightbulb"
    },

    {
        hab: "Problem Solving",
        icono1: "bi", 
        icono2: "bi-gear"
    },

    {
        hab: "Adaptability",
        icono1: "bi", 
        icono2: "bi-shuffle"
    },

    {
        hab: "Time Management",
        icono1: "bi", 
        icono2: "bi-clock"
    },

    {
        hab: "Attention to Detail",
        icono1: "bi", 
        icono2: "bi-search"
    },

    {
        hab: "Empathy",
        icono1: "bi", 
        icono2: "bi-hand-thumbs-up"
    },

    {
        hab: "Critical Thinking",
        icono1: "bi", 
        icono2: "bi-hand-index"
    },

]

let contHabilidades = document.getElementById("contHabilidades");

for (let i=0; i<habilidades.length; i++){

    let container = document.createElement("div");
    container.classList.add("df", "centerX", "centerY", "proyecto", "bordeRedondo");

    if (i>5){
        container.classList.add("invisibleM")
    }

    let contenedorcito = document.createElement("div");
    contenedorcito.classList.add("df", "centerX", "centerY", "spacee", "w70", "h80");

    let icono = document.createElement("i");
    icono.classList.add(habilidades[i].icono1, habilidades[i].icono2);
    icono.classList.add("blanco", "parrafitos");

    let habilidad = document.createElement("h4");
    habilidad.classList.add("blanco", "parrafitos", "fuente");
    habilidad.innerText = habilidades[i].hab;

    contenedorcito.append(icono, habilidad);
    container.appendChild(contenedorcito);

    //console.log(container);

    contHabilidades.appendChild(container);

}

/*menu hamburguesa*/

const nav = document.getElementById("nav")
const cerrar = document.getElementById("cerrar-menu");
const abrir = document.getElementById("abrir-menu");

abrir.addEventListener('click', ()=>{
    nav.classList.add("visible");
});

cerrar.addEventListener('click', ()=>{
    nav.classList.remove("visible");
});

/*esto es para que cuando se toque en algun link del menu vaya a la section ocultando el nav*/

const links = document.querySelectorAll('#nav-list li a');

links.forEach(link=>{
    link.addEventListener('click', ()=>{
        nav.classList.remove("visible");
    })
});

/*read more*/

let readmore = document.getElementById("readmore");
let pOculto = document.getElementById("parrafoOculto");

readmore.addEventListener('click', ()=>{
    pOculto.classList.toggle("invisibleM");
    
    if (pOculto.classList.contains("invisibleM")){
        readmore.innerHTML="Read more..."
    } else {
        readmore.innerHTML="Less"
    }

});



