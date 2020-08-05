class jogoDaMemoria{
        // se mandar um obj = { tela: 1, idade: 2, etc: 3}
        // vai ignorar todo o resto e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/deadpool.png', name: 'deadpool'},
            {img: './arquivos/coringa.png', name: 'coringa'},
            {img: './arquivos/thor.png', name: 'thor'}
        ]
    }

    // para usar o this, nao precisamos usar o static
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela inicial
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}
