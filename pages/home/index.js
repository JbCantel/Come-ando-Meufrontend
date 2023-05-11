$(document).ready(myHome)

/**
 * IMPORTANTE!
 * URL para obter todos os artigos ordenados pela data e com status ativo:
 * http://localhost:3000/articles?_sort=date&_order=desc&status=on
 * \---------+---------/
 *           |
 *           +--> URL da API → variável 'app.apiBaseURL' em '/index.js'
 **/

/**
 * Função principal da página "home".
 **/
function myHome() {

    changeTitle()

    var articleList = '';

    $.get(app.apiBaseURL + 'articles', {
        _sort: 'date',
        _order: 'desc',
        status: 'on'
    })
        .done((data) => {
            data.forEach((art) => {
                articleList += `
                    <div class="article art-item" data-id="${art.id}">
                        <img src="${art.thumbnail}" alt="${art.title}">
                        <div>
                            <h3>${art.title}</h3>
                            <p>${art.resume}</p>
                        </div>
                    </div>                    
                `
            })
            $('#artList').html(articleList)

            getMostViewed()
            getLastComments()
        })
        .fail((error) => {
            $('#artList').html('<p class="center">Oooops! Não encontramos nenhum artigo...</p>')
        })

}
// Função que exibe os artigos mais visitados.
function getMostViewed(limit) {

    var htmlOut = ''
// Método Get que recolhe os artigos com vizualizações em ordem decrescente e status "on"
    $.get(app.apiBaseURL + 'articles', {
        status: 'on',
        _sort: 'views',
        _order: 'desc',
        _limit: limit || 5
    })
        .done((data) => {
            // Caso encontre um ou mais artigos
            if (data.length > 0) {
                // Adiciona os artigos em uma lista não ordenada (ul)
                htmlOut = '<ul>'
                // Para cada artigo, adiciona um ( ) com seu id e seu título
                data.forEach((item) => {
                    htmlOut += `<li class="article" data-id="${item.id}">${item.title}</li>`
                })
                // Fecha com (/ul).
                htmlOut += '</ul>'
            } else {
                //Caso não tenha artigos.
                htmlOut = '<p class="center">Nenhum artigo encontrado.</p>'
            }
// Adiciona os artigos armazenados na váriavel htmlOut para o HTML.
            $('#mostVisited').html(htmlOut)
        })
        // Caso não comsiga adicionar os artigos no HTML, exibe a mensagem
        .fail((error) => {
            $('#mostVisited').html('<p class="center">Nenhum artigo encontrado.</p>')
        })

}
// Função que exibe os últimos cometários
function getLastComments(limit) {

    var htmlOut = ''
// Método que recebe todos os cometários ordena com status "on", data decrescente e limita como os 5 últimos comentários.
    $.get(app.apiBaseURL + 'comments', {
        status: 'on',
        _sort: 'date',
        _order: 'desc',
        _limit: limit || 5
    })
        .done((data) => {
             // Caso encontre um ou mais comentários
            if (data.length > 0) {
                htmlOut = '<ul>'
                data.forEach((item) => {
                    htmlOut += `<li class="article" data-id="${item.article}">${item.content.truncate(45)}</li>`
                })
                htmlOut += '</ul>'
            } else {
                htmlOut = '<p class="center">Nenhum comentário ainda.</p>'
            }

            $('#lastComments').html(htmlOut)
        })
        .fail((error) => {
            $('#lastComments').html('<p class="center">Nenhum comentário ainda.</p>')
        })

}