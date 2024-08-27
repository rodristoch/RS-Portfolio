window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    /* el Menu hamburguesa en MOBILE */
    let botonMenuHamb = document.querySelector("#menuH")
    let fabars = document.querySelector(".fa-bars-staggered")
    let faxmark = document.querySelector(".fa-xmark")
    let mainDeAtras = document.querySelector("main")
    let body = document.querySelector("body")
    let header = document.querySelector(".top")
    let footer = document.querySelector("footer")
    
    /* ------- capturo los divs -------- */
    /* el contenedor en MOBILE */
    /* los ppales */
    let divlinks = document.querySelector(".div-links")
    let sectiontop = document.querySelector(".section-top")
    let h2nombre = document.querySelector(".h2-nombre")

    




    /* MOBILE para que aparezca el contenedor azul ppal oculto, al apretar en el Menu Hamb */
    botonMenuHamb.addEventListener("click", () => {

        /* alert("hola") */

        divlinks.classList.toggle("div-links-show")
        sectiontop.classList.toggle("section-top-panel-abierto")
        h2nombre.classList.toggle("h2-nombre-panel-abierto")
        fabars.classList.toggle("fa-bars-staggered-panel-abierto")
        faxmark.classList.toggle("fa-xmark-panel-abierto")
        
    })

    // When the user scrolls down 20px from the top of the document, show the button
    /* window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            sectiontop.classList.toggle("section-top-scroll-down");
        
        }
    } */


    
})