$(document).ready(function(){ //usado para chamar o JQuery para nosso código
    /*console.log(document.querySelector("header button")) // fusado para chamar o campo HTML sem o JQuery
    console.log($('#botao-cancelar'))

    document.querySelector("header button").addEventListener("click", function(){ //para chamar um evendo quando clicamos no button através do JS

    }) */

    $("header button").click(function(){ // 1ª para adicionar um evendo quando clicamos no button através do JQuery
        $("form").slideDown() // adiciona um efeito para aparecer o formulário ao clicar
    })
    
    $("#botao-cancelar").click(function(){ // 1ª para adicionar um evendo quando clicamos no button através do JQuery
        $("form").slideUp() // adiciona um efeito para recolher o formulário ao clicar em cancelar
    })
    
    $("form").on("submit", function(e) { // 2ª para submeter um evendo quando clicamos no button através do JQuery
        e.preventDefault()
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val()
        const novoItem = $("<li style='display: none'></li>") //assim a imgaem não vai aparecer mas logo em baixo usaremos o fedIn
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem) //appendTo pega o elemnto desse linha e instere dentro do <li> na linha de cima
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank" >
                    Ver imagem em tamnho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000) // faz com que a imgaem aparece suavemente
        $(`#endereco-imagem-nova`).val(" ") //limpa o link das novas img apos cadastra-las
    })
})