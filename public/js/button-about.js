window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    let boton2 = document.querySelector("#btn-download-cv")
    let boton2dk = document.querySelector("#pato")
    
    
    

    boton2.addEventListener("mousedown", () => {

        boton2.style.animation = "btndown 0.5s 1"
        
    })

    boton2.addEventListener("mouseup", () => {

        boton2.style.animation = "btnup 0.5s 1"
        
    })


    boton2dk.addEventListener("mousedown", () => {

        boton2dk.style.animation = "btndown 0.5s 1"
        
    })

    boton2dk.addEventListener("mouseup", () => {

        boton2dk.style.animation = "btnup 0.5s 1"
        
    })
    


})