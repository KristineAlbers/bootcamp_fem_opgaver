document.addEventListener('DOMContentLoaded', () => {

  //Opgave 1 Knap skift i mellem to farver reverse
  var button = document.querySelector('#my-button');
  let colorArray = ['pink', 'gray'];
  
  button.addEventListener('click', function(){
    button.style.backgroundColor = colorArray [0];
    colorArray.reverse();
//    newColor;
  });
  

  //Opgave 2 Regnestykke

  let numbera = document.querySelector('#number_a');
  let a = 4;
  numbera.textContent = a

  let numberb = document.querySelector('#number_b');
  let b = 3;
  numberb.textContent = b


  function beregnForhold (a, b) {
    if (a > 0 && b > 0) {
      return a / b;
    }
  };      
  
  let resultat = beregnForhold(4, 3);
  
      console.log(resultat);



  //Opgave 3 skjul Element Via Css Selector

  function skjulElementViaCssSelector (cssSelector) {
    let displayElement = document.querySelector(cssSelector);
    //if(displayElement){
    displayElement.style.display = 'none';
  //}
  };

  skjulElementViaCssSelector ('.result');

});