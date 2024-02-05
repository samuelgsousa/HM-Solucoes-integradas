window.addEventListener("resize",redimCarrossel)

let count = 1;
document.getElementById("radio1").checked = true;

  setInterval(function(){
      nextImage()
  }, 5000)

 function nextImage(){
     count++
     if(count > 4){
         count = 1
     }

     document.getElementById("radio" + count).checked = true;
 }



redimCarrossel()

 function redimCarrossel(){ //essa função irá ajustar as imagens para que não fique estranhas quando o tamanho do carrossel diminuir
     let windowW = window.innerWidth
    if(windowW < 900){ //todas as imagens começam a ficar com margem excessiva com menos de 900px, por isso um único if. O transition é para tornar o ajustes mais suaves caso a pessoa diminua a tela
        $('#img2').css('margin-top', `${0}px`)
        $('#img3').css('margin-top', `${0}px`)
        $('#img4').css('margin-top', `${0}px`)
    } else {
        $('#img2').css('transition', '0.5s')
        $('#img3').css('transition', '0.5s')

        $('#img2').css('margin-top', `${-3}%`)
        $('#img3').css('margin-top', `${-2}%`)
        $('#img4').css('margin-top', `${-2}%`)
        
        
}
 
 }

 //as imagens contam para a margem. por isso que em mobile fica estranho



