let radioAdjust = () => $('div.radio-group').css('height',$('div.carrossel').height())
window.addEventListener("resize", radioAdjust)
radioAdjust() 
//todas estão sendo redimencionadas baseadas no mesmo carrossel. O que não tem problema já que todas tem o mesmo tamanho


const rad = Array.from(document.querySelectorAll('input[type="radio"]')) 
const AllCarrossel = Array.from(document.querySelectorAll('.container')) 
const imagens = document.querySelectorAll(".container img") //array com todas as imagens dentro dos container. É possível 

rad.forEach(function(transicao){
  transicao.addEventListener("click", function(){
    let carrossel = this.closest(".carrossel").querySelector('.container') 
    let radioVal = this.value
  
    nextImage(carrossel, radioVal)

    contadorIndividual[parseInt(this.name.slice(-1)) - 1] = radioVal
       //localiza o nome do radio-group e converte para número apenas o ultimo caractere, qu é sempre 1, 2, 3 etc. Deve ter outra forma melhor de fazer isso
   
  
    //rad é o array com todos os radio buttons, e o for each faz com que todos eles executem a função seguinte
    //closest pega o elemento "vô" com a classe carrossel, e a partir dele o querySelector busca seu elemento filho com a classe container. Logo, através do radio button localizamos o container de imagens correspondente, armazenado na variavel carrossel
    
  })
}
)


const nextImage = (container, valor) => {
  container.style.transform = `translateX(${(-valor + 1) * 100}%)`
  container.closest(".carrossel").querySelector('.radio-group').querySelector(`input[value="${valor}"]`).checked = true
  //o container localiza o carrossel correspondente, depois o radio group dentro dele, e depois o radio button dentro dele para marcar
}

   let contadorIndividual = []
   let timer = [] //array onde contém cada setInterval

   function timerGeral(i, Tempo){
    
     timer[i] = setInterval(() => {
      nextImage(AllCarrossel[i], contadorIndividual[i])

      if(contadorIndividual[i]>=3) contadorIndividual[i] = 0
      contadorIndividual[i]++
     }, Tempo)
   }
   //NECESSÁRIO ALTERAR O NÚEMRO 3 PARA ALGUM ARRAY OU VARIÁVEL QUE RETORNE A QUANTIDADE DE IMAGENS DE CADA CONTAINER. POSSÍVELMENTE EM JQUERY É POSSÍVEL SEM USAR UM MONTE DE ARRAY E VARIÁVEL
   
      for(let i = 0; i <= AllCarrossel.length; i++) timerGeral(i, 4500), contadorIndividual[i] = 1
      
      
