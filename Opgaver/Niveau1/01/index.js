document.addEventListener('DOMContentLoaded', () => {

  //Opgave 1 Knap skift i mellem to farver reverse
  var button = document.getElementById("my-button");
    function changeColor() {
        button.addEventListener("click", toggle);
      };
      
      function toggle() {
        var backColor = button.style.backgroundColor;
        button.style.backgroundColor = backColor === "black" ? "yellow" : "black";
      };
      
      changeColor();

  //Opgave 2 Regnestykke

  let numbera = document.querySelector('#number_a');
  let valuea = 4;
  numbera.textContent = valuea

  let numberb = document.querySelector('#number_b');
  let valueb = 3;
  numberb.textContent = valueb
  function divide (a, b) {
    if (a > 0 && b > 0) {
      return a / b;
    }

    divide(4, 3);
    
  };      
    console.log(divide(4, 3));
      
  //Opgave 3 skjul Element Via Css Selector

  function skjulElementViaCssSelector (cssSelector) {
    let displayElement = document.querySelector(cssSelector);
    displayElement.style.display = 'none';
  };

  skjulElementViaCssSelector ('.result');

});