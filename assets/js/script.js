const descProyectos = [

    {
        desc: "Creación de una landing page moderna y responsiva para una marca de ropa sostenible. Utilicé HTML, CSS y JavaScript para diseñar un sitio visualmente atractivo, con animaciones suaves al desplazarse y una experiencia de usuario optimizada para dispositivos móviles.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Website front-end developement for a pre-designed canva",
        source: "assets/imgs/floria-project.png"
    },

    {
        desc:"Desarrollé un reel animado en After Effects para promocionar un producto tecnológico en redes sociales. El proyecto incluyó diseño de gráficos, edición de audio y sincronización de efectos visuales para captar la atención del público objetivo.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Typographic Animation",
        source: "assets/imgs/animacion-tipo.png"
    },

    {   
        desc:"Diseñé y programé un juego interactivo en JavaScript utilizando Canvas. El juego incluye mecánicas de colisión, puntuación y efectos visuales que brindan una experiencia dinámica. Fue diseñado como parte de un proyecto para enseñar conceptos básicos de programación de forma divertida.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "JavaScript Game",
        source: "assets/imgs/javascript-game.jpg"
    },

    {
        desc:"Creé un sitio web de portafolio personal utilizando CSS Grid y Flexbox. El diseño es limpio y responsivo, con una sección de proyectos interactiva que incluye filtros y animaciones personalizadas para destacar cada trabajo.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Website for Personal Portfolio",
        source: "assets/imgs/portfolio-weebsite.jpg"
    },

    {
        desc: "Desarrollé una infografía animada interactiva sobre energías renovables utilizando HTML, CSS y SVG. El proyecto combina datos visuales con animaciones dinámicas para educar al usuario de manera atractiva y didáctica.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Music Video Production for Artist",
        source: "assets/imgs/videoclip-project.png"
    },

    {
        desc:"Diseñé un prototipo funcional de una aplicación móvil para organizar tareas y gestionar el tiempo. Incluí wireframes, un diseño intuitivo y una navegación interactiva que permite simular la experiencia del usuario.",
        enlace: "https://villalba-zalcman-pf-maquetado.vercel.app/",
        titulo: "Mobile App Prototype in Figma",
        source: "assets/imgs/grido-app.png"
    }

]

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
    articulo.classList.add("bordeRedondo", "df", "centerX", "centerY", "proyecto");

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

    //console.log(articulo);

    ids++;

}

/*habilidades*/

const habilidades = [

    {
        hab: "Communication",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Teamwork",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Creativity",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Problem Solving",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Adaptability",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Time Management",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Attention to Detail",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Empathy",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

    {
        hab: "Critical Thinking",
        icono1: "fa-regular", 
        icono2: "fa-comments"
    },

]

let contHabilidades = document.getElementById("contHabilidades");

for (let i=0; i<habilidades.length; i++){

    let container = document.createElement("div");
    container.classList.add("df", "centerX", "centerY", "proyecto", "bordeRedondo");

    let contenedorcito = document.createElement("div");
    contenedorcito.classList.add("df", "centerX", "centerY", "spacee", "w70", "h80");

    let icono = document.createElement("i");
    icono.classList.add(habilidades[i].icono1, habilidades[i].icono2);
    icono.classList.add("blanco");

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
})

