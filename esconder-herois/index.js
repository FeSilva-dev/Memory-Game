function onLoad(){
    const dependencias = {
        tela: Tela
    }

    const jogodamemoria = new jogoDaMemoria(dependencias)
    jogodamemoria.inicializar()

}

window.onload = onLoad