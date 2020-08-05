class jogoDaMemoria{
        // se mandar um obj = { tela: 1, idade: 2, etc: 3}
        // vai ignorar todo o resto e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            {img: './arquivos/batman.png', nome: 'batman'},
            {img: './arquivos/deadpool.png', nome: 'deadpool'},
            {img: './arquivos/coringa.png', nome: 'coringa'},
            {img: './arquivos/thor.png', nome: 'thor'}
        ]

        this.iconePadrao = './arquivos/ninja.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    // para usar o this, nao precisamos usar o static
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela inicial
        this.tela.atualizarImagens(this.heroisIniciais)
        // forca a 'tela' a usar o this de jogo da memoria
        this.tela.configurarBotao(this.jogar.bind(this))

        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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

    verificarSelecao(id, nome){
        const item = { id, nome }

        // vamos pegar a quantidade de herois selecionados 
        // e tomar a acao se foi certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                // adicionar dentro de uma lista
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade for 1 o usuario so podera escolher mais 1
                // vamos obter o primeiro item da lista
                const [opcao1] = this.heroisSelecionados
                // zerar lista anterior para selecionar mais dois
                this.heroisSelecionados = []
                // conferindo se o nome e o id bate
                if(opcao1.nome === item.nome &&
                    // aqui verificamos se sao ids diferente para o usuario nao clicar duas vezes no mesmo
                    opcao1.id !== item.id 
                ){
                    alert('combinacao correta!' + item.nome)
                    // para parar a execucao usamos o return
                    return;
                }

                alert('combinacao incorreta')
                // fim do case
                break;
        }
    }

    jogar() {
        this.embaralhar()
    }
}
