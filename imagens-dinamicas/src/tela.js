const ID_CONTEUDO = "conteudo"
class Tela{
    static obterCodigoHTML(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.img}" name="${item.nome} "class="card-img-top" alt="...">
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
}
