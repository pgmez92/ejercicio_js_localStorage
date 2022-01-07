

document.querySelector("#boton1").onclick = () => {
    let destinatario = document.querySelector("#receptor").value;
    let emisor = document.querySelector("#emisor").value;
    let asunto_msj = document.querySelector("#asunto").value;
    let texto_msj = document.querySelector("#texto").textContent;
    let mensaje = {
        fecha: new Date(),
        de: emisor,
        para: destinatario,
        asunto: asunto_msj,
        cuerpo: texto_msj
    }
    localStorage.setItem(destinatario, JSON.stringify(mensaje));
    listarMensajes();
}

listarMensajes();

function listarMensajes() {
    document.querySelector("#lista-msj").innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        //clonamos el nodo mensaje y le damos un id único
        let clon = document.querySelector("#mensaje").cloneNode(true);
        clon.id = "mensaje-" + Number(i);

        //le damos el valor de la localstorage al label del clon 
        let label = clon.querySelector("[name='datos']");
        label.textContent = localStorage.key(i);

        //programamos link borrar
        let linkBorrar = clon.querySelector("a[name='borrar']");
        linkBorrar.onclick = () => {
            localStorage.removeItem(localStorage.key(i));
            document.querySelector("#mensaje-" + Number(i)).remove();
            //volvemos a llamar a listarMensajes para que reasigne los id
            listarMensajes();
        }
        
        //añadimos el clon a la página
        document.querySelector("#lista-msj").appendChild(clon);
    }
}


