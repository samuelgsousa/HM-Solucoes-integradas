let radioAdjust = () => $('div.radio-group').css('height',$('div.carrossel').height())
window.addEventListener("resize", radioAdjust)
radioAdjust() 



const box = document.querySelector(".container")
const imagens = document.querySelectorAll(".container img")
let cont = 0

function nextImage(){
cont++
if(cont > imagens.length - 1){
    cont = 0
}
box.style.transform = `translateX(${-cont * 100}%)`
}




// setInterval(function(){
//  nextImage()
// }, 4500)