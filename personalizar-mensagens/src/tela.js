// METODOS STATICS NAO PODEM USAR THIS
// POR ISSO NAO VAMOS USAR O UTIL NO CONSTRUCTOR

const util = Util
const ID_CONTEUDO = "conteudo"
const ID_BTNJOGAR = "jogar"
const ID_MENSAGEM = "mensagem"  
const CLASSE_INVISIVEL = "invisible"
const MENSAGENS = {
    sucesso: {
        texto: 'Combinacao correta',
        classe: 'alert-sucess'
    },
    fracasso: {
        texto: 'Combinacao errada',
        classe: 'alert-danger'
    }
}
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"
class Tela{
    static obterCodigoHTML(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br/>
        </div>
        `
    }

    static alterarConteudoHTML(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    static gerarStringpelaIMG(data){
        // para cada item da lista, vai executar a funcao obterCodigoHTML,
        // ao final, vai concatenar tudo em uma unica string
        // muda de array para string
        return data.map(Tela.obterCodigoHTML).join('')
    }

    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringpelaIMG(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }

    static configurarBotao(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BTNJOGAR)
        btnJogar.onclick = funcaoOnclick
    }

    static configurarBotaoVerificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick
    }

    static mostrarHerois(nomeDoHeroi, img){
        const elementosHtml = document.getElementsByName(nomeDoHeroi)
        // para cada elemento encontrado na tela, vamos encontrar o src dele
        // com o forEach, para cada item dentro dos () setamos o valor de imagem
        elementosHtml.forEach(item => (item.src = img))
    }

    static async exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.fracasso.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.fracasso.classe)
            elemento.innerText = MENSAGENS.fracasso.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }

    static exibirContador(mostrar = true){
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar){
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL)
    }

}
