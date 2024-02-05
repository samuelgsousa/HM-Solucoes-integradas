
function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault() /*essa linha serve para previnir o evento click de ocorrer caso o touchstart ocorra, pois o touchstart gera um click com atraso de alguns milisegundos*/
    const nav = document.querySelector('nav')
    nav.classList.toggle('active'); //toggle significa adicione caso não tenha, remova caso tenha
    /*acessibilidade*/
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else event.currentTarget.setAttribute('aria-label', 'Abrir Menu') /*acessibilidade*/

    const btn = document.querySelector('span#hamburger')
    btn.classList.toggle('active')
} /*Configurando a função em escopo global para que ela possa ser chamada em setupEventListeners*/

function redimensionar(){
        if($(window).width() <= 600){
            $('header').removeClass("header_desktop").addClass("header_mobile")
            $('nav').removeClass("nav_desktop").addClass("nav_mobile")
            $('#btn-mobile').css('display', 'flex')
        } else{
            $('header').removeClass("header_mobile").addClass("header_desktop")
            $('nav').removeClass("nav_mobile").addClass("nav_desktop")
            $('#btn-mobile').css('display', 'none')
            $('#btn-mobile').removeClass("active")
            $('nav').removeClass("active")
            $('#hamburger').removeClass("active")
        }
    

}
window.setupEventListeners = function (){

    let btnMobile = document.querySelector('button#btn-mobile')
    btnMobile.addEventListener('click', toggleMenu)
    btnMobile.addEventListener('touchstart', toggleMenu)
}

/*adicionando cabeçalho */
const t = document.createElement('header')
t.setAttribute("class", "header_desktop")
const body = document.body

fetch("head.html")
.then(res => res.text())
.then(res=>{
    t.innerHTML = res
    body.prepend(t)
    window.setupEventListeners()
    redimensionar()
})

/*adicionando rodapé*/

const r = document.createElement('footer')
r.setAttribute("class", "site.footer")

fetch("foot.html")
.then(res => res.text())
.then(res =>{
    r.innerHTML = res
    body.append(r)
} )

let tema = window.matchMedia('(prefers-color-scheme: dark)').matches ?  $('#base').attr("href", "base_style_dark_mode.css") : $('#base').attr("href", "base_style.css") //essa função detecta se o usuário utiliza o modo escuro, caso positivo o estilo base da página mudará. Se não, ele irá inicidar com o estilo base padrão, apenas para garantir que não ocorram erros



$(document).ready(() => {

    window.addEventListener("resize",redimensionar)
    
    $('#' + $('title').text()).addClass("selectedPage") // essa linha pega o nome da página e localiza o link com o mesmo id para deixar selecionado
    
    $('nav > a').mouseover(() =>  $('nav > a').removeClass("selectedPage")) // remove a classe de todos os links quando o mouse está em cima de algum, porém, como existe a classe hover no CSS, o link em que ele estiver com o Mouse em cima irá ficar destacado
    
    $('nav > a').mouseout(() => $('#' + $('title').text()).addClass("selectedPage")) //quando o usuário tirar o mouse do link irá localizar o link cujo o id seja igual o nome da página
    

    

    
});




