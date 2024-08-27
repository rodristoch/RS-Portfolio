window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    let boton = document.querySelector(".button-navbar-idioma")
    let flechita = document.querySelector("#flechita-abajo")  /* la flechita de al lado */

    /* ------- capturo los divs -------- */
    /* el contenedor en DESKTOP */
    let opciones = document.querySelector(".contenedor-opciones")
    let espanol = document.querySelector(".opcion-espanol")
    let ingles = document.querySelector(".opcion-ingles")

    /* ------- capturo los textos -------- */
    /* HOME */
    /* Panel MOBILE */
    let contenedorVerdeMedioHome = document.querySelector(".contenedor-verde-medio-home .link-contenedor-oculto-top")  
    let contenedorVerdeUltimodeabajoHome = document.querySelector(".contenedor-verde-ultimodeabajo-home .link-contenedor-oculto-top") 

    /* Navbar DESKTOP */
    let buttonNavbarHome2 = document.querySelector(".button-navbar-home2 a") 
    let buttonNavbarHome3 = document.querySelector(".button-navbar-home3 a") 
    let seleccionIdiomaHome = document.querySelector(".seleccion-idioma-home") 

    /* Footer */
    let divLoremHome = document.querySelector(".div-lorem-home .lorem")
    let divFlexLinksFooterHome = document.querySelector(".div-flex-links-footer-home")
    let tituloDesktopFooterHome = document.querySelector(".titulo-desktop-footer-home")


    /* ABOUT */
    /* Panel MOBILE */
    let contenedorVerdeMedioAbout = document.querySelector(".contenedor-verde-medio-about .link-contenedor-oculto-top")  
    let contenedorVerdeUltimodeabajoAbout = document.querySelector(".contenedor-verde-ultimodeabajo-about .link-contenedor-oculto-top") 

    /* Navbar DESKTOP */
    let buttonNavbarAbout2 = document.querySelector(".button-navbar-about2 a") 
    let buttonNavbarAbout3 = document.querySelector(".button-navbar-about3 a") 
    let seleccionIdiomaAbout = document.querySelector(".seleccion-idioma-about") 

    /* Footer */
    let divLoremAbout = document.querySelector(".div-lorem-about .lorem")  /* el texto del footer */
    let divFlexLinksFooterAbout = document.querySelector(".div-flex-links-footer-about")  /* el div con los links del footer */
    let tituloDesktopFooterAbout = document.querySelector(".titulo-desktop-footer-about")  /* el titulo Contact del footer */

    /* PROYECTS */
    /* Panel MOBILE */
    let contenedorVerdeMedioProyects = document.querySelector(".contenedor-verde-medio-proyects .link-contenedor-oculto-top")  
    let contenedorVerdeUltimodeabajoProyects = document.querySelector(".contenedor-verde-ultimodeabajo-proyects .link-contenedor-oculto-top") 

    /* Navbar DESKTOP */
    let buttonNavbarProyects2 = document.querySelector(".button-navbar-proyects2 a") 
    let buttonNavbarProyects3 = document.querySelector(".button-navbar-proyects3 a") 
    let seleccionIdiomaProyects = document.querySelector(".seleccion-idioma-proyects") 

    /* Footer */
    let divLoremProyects = document.querySelector(".div-lorem-proyects .lorem")  /* el texto del footer */
    let divFlexLinksFooterProyects = document.querySelector(".div-flex-links-footer-proyects")  /* el div con los links del footer */
    let tituloDesktopFooterProyects = document.querySelector(".titulo-desktop-footer-proyects")  /* el titulo Contact del footer */



    /* EN EL HOME */
    /* Education */
    let verCertificado = document.querySelector(".ver-certificado")  /* el titulo obtenido en education */
    let verCertificadoJava = document.querySelector(".ver-certificado-java")  /* el titulo obtenido en education */
    let verCertificadoArq = document.querySelector(".ver-certificado-arq")  /* el titulo obtenido en education */

    /* Servicios */
    let tituloServicioDiseño = document.querySelector(".titulo-servicio-diseño")  /* el titulo del servicio */
    let descripcionServiceDiseño = document.querySelector(".descripcion-service-diseño")  /* la descripcion del servicio */

    let tituloServicioUser = document.querySelector(".titulo-servicio-user")  /* el titulo del servicio */
    let descripcionServiceUser = document.querySelector(".descripcion-service-user")  /* la descripcion del servicio */

    let tituloServicioCode = document.querySelector(".titulo-servicio-code")  /* el titulo del servicio */
    let descripcionServiceCode = document.querySelector(".descripcion-service-code")  /* la descripcion del servicio */

    let tituloServicioFront = document.querySelector(".titulo-servicio-diseño-front")  /* el titulo del servicio */
    let descripcionServiceFront = document.querySelector(".descripcion-service-diseño-front")  /* la descripcion del servicio */

    let tituloServicioBack = document.querySelector(".titulo-servicio-diseño-back")  /* el titulo del servicio */
    let descripcionServiceBack = document.querySelector(".descripcion-service-diseño-back")  /* la descripcion del servicio */

    let tituloServicioDb = document.querySelector(".titulo-servicio-diseño-db")  /* el titulo del servicio */
    let descripcionServiceDb = document.querySelector(".descripcion-service-diseño-db")  /* la descripcion del servicio */

    


    /* ------- capturo los textos en espanol -------- */
    /* EN TODAS */
    let contenedorVerdeMedioHomeES = document.querySelector(".contenedor-verde-medio-home-es")  /* el links de proyects en el div mobile */
    let contenedorVerdeUltimodeabajoHomeES = document.querySelector(".contenedor-verde-ultimodeabajo-home-es")  /* el links de who am i en el div mobile */

    let buttonNavbarHomeES = document.querySelector(".button-navbar-home-es")  /* los links del navbar */
    let buttonNavbarHome2ES = document.querySelector(".button-navbar-home2-es")  /* los links del navbar */
    let buttonNavbarHome3ES = document.querySelector(".button-navbar-home3-es")  /* los links del navbar */
    let seleccionIdiomaHomeES = document.querySelector(".seleccion-idioma-home-es")  /* el Selecciona tu idioma */



    /* EN TODAS */
    let contenedorVerdeMedioAboutES = document.querySelector(".contenedor-verde-medio-about-es")  /* el links de proyects en el div mobile */
    let contenedorVerdeUltimodeabajoAboutES = document.querySelector(".contenedor-verde-ultimodeabajo-about-es")  /* el links de who am i en el div mobile */

    let buttonNavbarAboutES = document.querySelector(".button-navbar-about-es")  /* los links del navbar */
    let buttonNavbarAbout2ES = document.querySelector(".button-navbar-about2-es")  /* los links del navbar */
    let buttonNavbarAbout3ES = document.querySelector(".button-navbar-about3-es")  /* los links del navbar */
    let seleccionIdiomaAboutES = document.querySelector(".seleccion-idioma-about-es")  /* el Selecciona tu idioma */



    /* EN TODAS */
    let contenedorVerdeMedioProyectsES = document.querySelector(".contenedor-verde-medio-proyects-es")  /* el links de proyects en el div mobile */
    let contenedorVerdeUltimodeabajoProyectsES = document.querySelector(".contenedor-verde-ultimodeabajo-proyects-es")  /* el links de who am i en el div mobile */

    let buttonNavbarProyectsES = document.querySelector(".button-navbar-proyects-es")  /* los links del navbar */
    let buttonNavbarProyects2ES = document.querySelector(".button-navbar-proyects2-es")  /* los links del navbar */
    let buttonNavbarProyects3ES = document.querySelector(".button-navbar-proyects3-es")  /* los links del navbar */
    let seleccionIdiomaProyectsES = document.querySelector(".seleccion-idioma-proyects-es")  /* el Selecciona tu idioma */

    /* EN EL HOME */
    /* Education */
    let verCertificadoES = document.querySelector(".ver-certificado-es")  /* el titulo obtenido en education */
    let verCertificadoJavaES = document.querySelector(".ver-certificado-java-es")  /* el titulo obtenido en education */
    let verCertificadoArqES = document.querySelector(".ver-certificado-arq-es")  /* el titulo obtenido en education */

    /* Servicios */
    let tituloServicioDiseñoES = document.querySelector(".titulo-servicio-diseño-es")  /* el titulo del servicio */
    let descripcionServiceDiseñoES = document.querySelector(".descripcion-service-diseño-es")  /* la descripcion del servicio */

    let tituloServicioUserES = document.querySelector(".titulo-servicio-user-es")  /* el titulo del servicio */
    let descripcionServiceUserES = document.querySelector(".descripcion-service-user-es")  /* la descripcion del servicio */

    let tituloServicioCodeES = document.querySelector(".titulo-servicio-code-es")  /* el titulo del servicio */
    let descripcionServiceCodeES = document.querySelector(".descripcion-service-code-es")  /* la descripcion del servicio */

    let tituloServicioFrontES = document.querySelector(".titulo-servicio-diseño-front-es")  /* el titulo del servicio */
    let descripcionServiceFrontES = document.querySelector(".descripcion-service-diseño-front-es")  /* la descripcion del servicio */

    let tituloServicioBackES = document.querySelector(".titulo-servicio-diseño-back-es")  /* el titulo del servicio */
    let descripcionServiceBackES = document.querySelector(".descripcion-service-diseño-back-es")  /* la descripcion del servicio */

    let tituloServicioDbES = document.querySelector(".titulo-servicio-diseño-db-es")  /* el titulo del servicio */
    let descripcionServiceDbES = document.querySelector(".descripcion-service-diseño-db-es")  /* la descripcion del servicio */
    /* FOOTER */
    let divLoremHomeES = document.querySelector(".div-lorem-home-es")  /* el texto del footer */
    let divLoremAboutES = document.querySelector(".div-lorem-about-es")  /* el texto del footer */
    let divLoremProyectsES = document.querySelector(".div-lorem-proyects-es")  /* el texto del footer */

    let divFlexLinksFooterHomeES = document.querySelector(".div-flex-links-footer-home-es")  /* el div con los links del footer */
    let divFlexLinksFooterAboutES = document.querySelector(".div-flex-links-footer-about-es")  /* el div con los links del footer */
    let divFlexLinksFooterProyectsES = document.querySelector(".div-flex-links-footer-proyects-es")  /* el div con los links del footer */

    let tituloDesktopFooterHomeES = document.querySelector(".titulo-desktop-footer-home-es")  /* el titulo Contact del footer */
    let tituloDesktopFooterAboutES = document.querySelector(".titulo-desktop-footer-about-es")  /* el titulo Contact del footer */
    let tituloDesktopFooterProyectsES = document.querySelector(".titulo-desktop-footer-proyects-es")  /* el titulo Contact del footer */

    
    /* DESKTOP para que aparezca el contenedor azul ppal oculto, al apretar en el boton */
    boton.addEventListener("click", () => {

        /* alert("hola") */

        opciones.classList.toggle("contendor_opciones-show")  /* con el toggle si el al apretar el boton de ordenar ese div no tiene la clase pasada por parametro la agrega, y si la tiene la quita */

        /* flechita.classList.toggle("fa-chevron-down2") */
        
    })

    /* INGLES */
    ingles.addEventListener("click", () => {

        /* alert("hola") */

        boton.innerHTML = "English";
        opciones.classList.toggle("contendor_opciones-show");

        
        /* contenedorVerdeMedioHome.innerHTML = "Proyects";
        contenedorVerdeUltimodeabajoHome.innerHTML = "Who am I?";

        buttonNavbarHome2.innerHTML = "Who am I?";
        buttonNavbarHome3.innerHTML = "Proyects";
        seleccionIdiomaHome.innerHTML = "Select your language:";

        divLoremHome.innerHTML = "Thank you for visiting and taking time watching my portfolio, I made it with professionalism and passion, and I hope you enjoyed it like I did making it for you. Please feel free to contact me about anything you need.";
        divFlexLinksFooterHome.style.display = "flex"
        divFlexLinksFooterHomeES.style.display = "none"
        tituloDesktopFooterHome.innerHTML = "Contact"

        verCertificado.innerHTML = "See certificate_"
        verCertificadoJava.innerHTML = "In progress_"
        verCertificadoArq.innerHTML = "Completed_"

        tituloServicioDiseño.innerHTML = "Design_"
        descripcionServiceDiseño.innerHTML = "Creation of the website with fonts, color palettes and a eye-friendly modern design."

        tituloServicioUser.innerHTML = "User Experience_"
        descripcionServiceUser.innerHTML = "Intuitive, eye-friendly, modern and simple design for easy consumption."

        tituloServicioCode.innerHTML = "Clean code_"
        descripcionServiceCode.innerHTML = "Code simplification, clean and understandable to facilitate site maintenance."

        tituloServicioFront.innerHTML = "Front end_"
        descripcionServiceFront.innerHTML = "Pages dynamism, validations in forms and scripts for a better user experience."

        tituloServicioBack.innerHTML = "Back end_"
        descripcionServiceBack.innerHTML = "Creation and maintenance of APIs, routing and server-side validations."

        tituloServicioDb.innerHTML = "Database_"
        descripcionServiceDb.innerHTML = "Creation, maintenance and editing of SQL databases using MySQL/PostreSql." */
        
        

    })

    /* ESPAÑOL */
    espanol.addEventListener("click", () => {

        /* alert("hola") */

        boton.innerHTML = "Spanish";
        opciones.classList.toggle("contendor_opciones-show");

        /* contenedorVerdeMedioHome.innerHTML = "Proyectos";
        contenedorVerdeUltimodeabajoHome.innerHTML = "¿Quién soy yo?";

        buttonNavbarHome2.innerHTML = "¿Quién soy yo?";
        buttonNavbarHome3.innerHTML = "Proyectos";
        seleccionIdiomaHome.innerHTML = "Selecciona tu idioma:";

        divLoremHome.innerHTML = "Gracias por visitar y ver mi portafolio, lo hice con profesionalismo y pasión, y espero que lo hayas disfrutado como yo lo hice haciéndolo. No dudes en ponerte en contacto conmigo sobre lo que necesites."
        divFlexLinksFooterHome.style.display = "none"
        divFlexLinksFooterHomeES.style.display = "flex"
        tituloDesktopFooterHome.innerHTML = "Contacto"

        verCertificado.innerHTML = "Ver certificado_"
        verCertificadoJava.innerHTML = "En progreso_"
        verCertificadoArq.innerHTML = "Completado_"

        tituloServicioDiseño.innerHTML = "Diseño_"
        descripcionServiceDiseño.innerHTML = "Creación global del sitio con elección de fuentes, paleta de colores y diseño amigable y moderno."

        tituloServicioUser.innerHTML = "Experiencia de usuario_"
        descripcionServiceUser.innerHTML = "Diseño intuitivo, amigable a la vista, moderno y sencillo para el fácil consumo del usuario."

        tituloServicioCode.innerHTML = "Código limpio_"
        descripcionServiceCode.innerHTML = "Simplificación de código, limpio y entendible para facilitar el mantenimiento del sitio"

        tituloServicioFront.innerHTML = "Front end_"
        descripcionServiceFront.innerHTML = "Dinamismo en páginas, validaciones en formularios y scripts para una mejor experiencia de usuario."

        tituloServicioBack.innerHTML = "Back end_"
        descripcionServiceBack.innerHTML = "Creación y mantenimiento de API's, ruteo y validaciones del lado del servidor."

        tituloServicioDb.innerHTML = "Bases de datos_"
        descripcionServiceDb.innerHTML = "Creación, mantenimiento y edición de bases de datos SQL usando MySQL/PostreSql" */
        
        
        
    })

    
})

function agregar(req, res) {

    res.render("aboutme.ejs")


}
