$(document).ready(() => {
    
    let tema = window.matchMedia('(prefers-color-scheme: dark)').matches ?  $('#base').attr("href", "base_style_dark_mode.css") : $('#base').attr("href", "base_style.css") //essa função detecta se o usuário utiliza o modo escuro, caso positivo o estilo base da página mudará. Se não, ele irá inicidar com o estilo base padrão, apenas para garantir que não ocorram erros

    $('#' + $('title').text()).addClass("selectedPage") // essa linha pega o nome da página e localiza o link com o mesmo id para deixar selecionado
    
    $('nav > a').mouseover(() =>  $('nav > a').removeClass("selectedPage")) // remove a classe de todos os links quando o mouse está em cima de algum, porém, como existe a calsse hover no CSS, o link em que ele estiver com o Mouse em cima irá ficar destacado
    
    $('nav > a').mouseout(() => $('#' + $('title').text()).addClass("selectedPage")) //quando o usuário tirar o mouse do link irá localizar o link cujo o id seja igual o nome da página
    
    

});


