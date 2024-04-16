//script base para o header

// window.matchMedia('(prefers-color-scheme: dark)').matches ? ($('img#logo_hm').attr( "../../logo/HM_clean_logo_darkMode2.svg")) : console.log("")

// window.matchMedia('(prefers-color-scheme: dark)').matches ? ($('html').addClass('dark-mode')) : $('html').removeClass('dark-mode')



//essa sintaxe detecta se o usuário utiliza o modo escuro, caso positivo o estilo base da página mudará. Se não, ele irá inicidar com o estilo base padrão, apenas para garantir que não ocorram erros


const logo = () =>{

}

function toggleMenu(event){
    const nav = document.querySelector('nav')
    nav.classList.toggle('active'); //toggle significa adicione caso não tenha, remova caso tenha
    /*acessibilidade*/
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else event.currentTarget.setAttribute('aria-label', 'Abrir Menu') /*acessibilidade*/

    const btn = document.querySelector('span#hamburger')
    btn.classList.toggle('active')
} /*Configurando a função em escopo global para que ela possa ser chamada em setupEventListeners*/

window.setupEventListeners = () => {
    let btnMobile = document.querySelector('button#btn-mobile');
    btnMobile.addEventListener('click', toggleMenu);
}

//adicionando flaticon
const flaticon = document.createElement('link')
flaticon.setAttribute("rel", "shortcut icon")
flaticon.setAttribute("href", "../../logo/HM_clean_cropped.png")
flaticon.setAttribute("type", "image/x-icon")
document.head.append(flaticon)


/*adicionando cabeçalho */
const t = document.createElement('header')
t.setAttribute("class", "header")
const body = document.body

fetch("head.html")
.then(res => res.text())
.then(res=>{
    t.innerHTML = res
    body.prepend(t)
    window.setupEventListeners()
}).then( () => {
    const pref = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log(pref)

        
if(pref == true){ 
    console.log("rolou")
    $('html').addClass('dark-mode')
    $('#logo_hm').attr('src', '../../logo/hm-clean-logo-darkmode.svg')
    
} else {
    $('html').removeClass('dark-mode')
    $('#logo_hm').attr('src', '../../logo/hm-clean-logo.svg')
}

}

)


/*adicionando rodapé*/

const r = document.createElement('footer')

fetch("foot.html")
.then(res => res.text())
.then(res =>{
    r.innerHTML = res
    body.append(r)
} )



