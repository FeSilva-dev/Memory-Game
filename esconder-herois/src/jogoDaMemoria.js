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

        this.iconePadrao = './arquivos/ninja.png'
        this.heroisEscondidos = []
    }

    // para usar o this, nao precisamos usar o static
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela inicial
        this.tela.atualizarImagens(this.heroisIniciais)
        // forca a 'tela' a usar o this de jogo da memoria
        this.tela.configurarBotao(this.jogar.bind(this))
    }

    embaralhar(){
        const copias = this.heroisIniciais
        
        // duplicar itens 
        .concat(this.heroisIniciais)

        // entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id:Math.random() / 0.5})
        })

        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)

        // vamos esperar 1 segundo para atualizar a tela

        setTimeout(() => {
            this.esconderHerois(copias)
        }, 700);
    }

    esconderHerois(herois){
        // vamos esconder a imagem de todos os herois pelo icone padrao
        // como fizemos no constructor, vamos extrair somente o necessario
        const heroisOcultos = herois.map(( {nome, id} ) => ({
            id,
            nome,
            img: this.iconePadrao
        }))

        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)

        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }

    jogar() {
        this.embaralhar()
    }
}
