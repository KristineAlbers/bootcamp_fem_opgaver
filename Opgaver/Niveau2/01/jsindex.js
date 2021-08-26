document.addEventListener('DOMContentLoaded', () => {
  //Opgave 1 Knap lyse skiftevis 
  //Løsning 1:
  /*
  const buttons2 = document.querySelector('#buttons');
  const buttonHighligtColor = 'yellow';
  
  function buttonHighligt(event){
    if(event.target.tagName === 'BUTTON'){
      let highligtElement = document.querySelector('.highlight');
      if(highligtElement){
        highligtElement.style.backgroundColor = '';
        highligtElement.classList.remove('highlight');
      };
      event.target.classList.add('highlight');
      event.target.style.backgroundColor = buttonHighligtColor;
    };
  };
  buttons2.addEventListener('click', event => buttonHighligt(event));
  */
//Løsning 2:
  var buttonsContainer = document.querySelector('#buttons');
  let buttons3 = document.querySelectorAll('button');

  //buttons.addEventListener('click', function(event){
    buttonsContainer.addEventListener('click', (event) => {    
      if(event.target.localName === 'button'){
        buttons3.forEach(butten => butten.removeAttribute('style')); 
      event.target.style.backgroundColor = 'pink';
      };

    
  });
 
});