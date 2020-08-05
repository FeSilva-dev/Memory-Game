function onLoad(){
    const dependencias = {
        tela: Tela,
        util: Util
    }

    const jogodamemoria = new jogoDaMemoria(dependencias)
    jogodamemoria.inicializar()

}

window.onload = onLoad