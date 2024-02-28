let radioAdjust = () => $('div.radio-group').css('height',$('div.carrossel').height())
window.addEventListener("resize", radioAdjust)
radioAdjust() 
//todas estão sendo redimencionadas baseadas no mesmo carrossel. O que não tem problema já que todas tem o mesmo tamanho


const rad = Array.from(document.querySelectorAll('input[type="radio"]')) //array com todos os radio button
const AllCarrossel = Array.from(document.querySelectorAll('.container')) //array com todos os containers
const imagens = document.querySelectorAll(".container img") //array com todas as imagens dentro dos container. É possível 

const nextImage = (container, valor) => {

  container.style.transform = `translateX(${(-valor + 1) * 100}%)`
  let radioT = container.closest(".carrossel").querySelector('.container')
}

  let contadorIndividual = []
  let timerIndividual = []

  function timerGeral(i, Tempo){
    timerIndividual[i] = setInterval(() => {
    if(contadorIndividual[i] >= 3) contadorIndividual[i] = 0
    contadorIndividual[i]++}, Tempo)  }


      let carrosselNum = AllCarrossel.length
      let timer = [] //array onde contém cada setInterval




      for(let i = 0; i< carrosselNum; i++) timer[i] = setInterval(() => automaticImage(AllCarrossel[i], contadorIndividual[i]), timerGeral(i, 2000), contadorIndividual[i] = 1,)
      

      //é possível setar tempos individuais
      

function automaticImage(container, contador){
  //if(contador > $('#carrossel1 img').length - 1) contador = 0

  container.style.transform = `translateX(${(-contador + 1) * 100}%)`
 
  //$(`#C1R${contador}`).prop("checked", true) pode localizar usando children
}




rad.forEach(function(transicao){
  transicao.addEventListener("click", function(){
    //clearInterval(timer[0])
    let carrossel = this.closest(".carrossel").querySelector('.container') 
    let radioVal = this.value
    //contadorIndividual[0] = radioVal

    nextImage(carrossel, radioVal)
   
    //timer[0] = setInterval(() => automaticImage(AllCarrossel[0], contadorIndividual[0]), timerGeral(0, 2000), contadorIndividual[0] = 1,)

    

    //cont = radioVal - 1 
    //rad é o array com todos os radio buttons, e o for each faz com que todos eles executem a função seguinte
    //closest pega o elemento "vô" com a classe carrossel, e a partir dele o querySelector busca seu elemento filho com a classe container. Logo, através do radio button localizamos o container de imagens correspondente, armazenado na variavel carrossel
    
  })
}
)



function sla(){
let timer = setInterval(() => nextImage(), 4500)

clearInterval(timer)
timer = setInterval(() => nextImage(), 4500)
let cont = 0
}
        //quando um radio button for clicado, a variável radioVal irá pegar o valor dessa radio e usar o translate para mudar o slide para a foto correspondente. O contador irá receber o mesmo valor - 1 para que siga para a próxima foto
  



        //let containerArray = []
        // let containerArrayIndex = 1
    
        // AllCarrossel.forEach( () => {
        //   containerArray.push(containerArrayIndex)
        //   containerArrayIndex++
        // })
    
        // let TimerIndex = [] //timer para cada container individual
        // let ContainerIndex = [] //array com a ordem de cada container, para localizar o Timerindex correspondente
        // let ContainerIndex2 = 1
    
        // AllCarrossel.forEach(() => {
        //   TimerIndex.push(1)
        //   ContainerIndex.push(ContainerIndex2)
        //   ContainerIndex2++
        // })
    
        // ContainerIndex2 = 1
    
        // console.log(ContainerIndex)
    
        // AllCarrossel.forEach((element) => {
        //   let temp = TimerIndex[ContainerIndex2]
        //   element = setInterval(nextImage(element, TimerIndex[ContainerIndex2]), ContainerIndex2++, 4000)
          
        // })
        
        // //element da no mesmo que usar AllCarrossel[TimerIndex] TimerIndex++




         //   function alsdsalkd(){
  // let timer1 = setInterval(() => automaticImage(AllCarrossel[0], contadorIndividual[0]), timerGeral(containerIndex[0], 2000),)

  // let timer2 = setInterval(() => automaticImage(AllCarrossel[1], contadorIndividual[1]), timerGeral(containerIndex[1], 3000),)
  //   }
    
    