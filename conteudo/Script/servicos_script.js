let radioAdjust = () => $('div.radio-group').css('height',$('div.carrossel').height())
window.addEventListener("resize", radioAdjust)
radioAdjust() 



const box = document.querySelector(".container")
const imagens = document.querySelectorAll(".container img")
let cont = 0

function nextImage(){

cont++

if(cont > imagens.length - 1) cont = 0

box.style.transform = `translateX(${-cont * 100}%)`

$(`#C1R${cont + 1}`).prop("checked", true)

}

$('input[name="radioC1"]').click( () => {
    var radioVal = $('input[name="radioC1"]:checked').val()
    box.style.transform = `translateX(${(-radioVal + 1) * 100}%)`
    cont = radioVal - 1 //quando um radio button for clicado, a variável radioVal irá pegar o valor dessa radio e usar o translate para mudar o slide para a foto correspondente. O contador irá receber o mesmo valor - 1 para que siga para a próxima foto

    clearInterval(timer)
    timer = setInterval(() => nextImage(), 4500) //clear interval para o contator e setInterval inicia de novo. Isso faz com que ele seja reiniciado sempre que o usuário clicar para voltar para algum slide
   
})

 //let timer = setInterval(() => nextImage(), 4500)

  //colocar alguma forma de quando a pessoa clicar na foto, aumentar o tamanho dela e parar o carrossel até ela fechar a imagem
  //corrigir la no css a bolinha do radio que está levemente torta