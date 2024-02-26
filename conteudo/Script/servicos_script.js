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
    var teste = $('input[name="radioC1"]:checked').val()
    box.style.transform = `translateX(${(-teste + 1) * 100}%)`
    cont = teste - 1
    clearInterval(timer)
})

 let timer = setInterval(function(){
   nextImage()
  }, 4500)

  //colcoar alguma forma de quando a pessoa clicar na foto, aumentar o tamanho dela e parar o carrossel até ela fechar a imagem
  //colocar algo para quando o usuário clicar no radio, resetar a contagem do setInterval