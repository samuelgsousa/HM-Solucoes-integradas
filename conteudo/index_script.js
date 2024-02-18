window.addEventListener("resize",redimCarrossel)

let count = 1;
let sld = 0;
 //depois mudar a referencia, ao invés de usar radio usar as imagens em si

   setInterval(function(){
       nextImage()
   }, 5000)

 function nextImage(){
     count++
     
     if(count > 4){
         count = 1
         sld = -25
     }
     //slide first
   
     sld += 25

     $('.first').css("margin-left", `-${sld}%`) //a transição é feita diminuindo a margem de 25& em 25%, por conta de serem 4 imagens. Depois tentar criar um carrossel utilizando o create element. Para não ficar muito pesado, você pode utilizar variáveis que pegem as fotos. Ai cria um elemento na esquerda da div, move a foto, e deleta a imagem que sumiu na esquerda
 }



redimCarrossel()

 function redimCarrossel(){ //essa função irá ajustar as imagens para que não fique estranhas quando o tamanho do carrossel diminuir
     let windowW = window.innerWidth
     let disp = document.querySelector(".slider").clientHeight
        $('#display').css('height', `${disp}px`) //ajustando para a altura da div display ser sempre do mesmo tamanho que o slider

    if(windowW < 2000){ //todas as imagens começam a ficar com margem excessiva com menos de 900px, por isso um único if. O transition é para tornar o ajustes mais suaves caso a pessoa diminua a tela
        $('#img2').css('margin-top', `${0}px`)
        $('#img3').css('margin-top', `${0}px`)
        $('#img4').css('margin-top', `${0}px`)
    } else
     {
        $('#img2').css('transition', '0.5s')
        $('#img3').css('transition', '0.5s')

        $('#img2').css('margin-top', `${-3}%`)
        $('#img3').css('margin-top', `${-2}%`)
        $('#img4').css('margin-top', `${-2}%`)
}
        //da pra transformar em media query depois
 }

 


//730px
//550