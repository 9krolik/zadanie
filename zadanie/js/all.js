document.addEventListener("DOMContentLoaded", function(event) {
    
  
  const submit = document.querySelector('button');
  const audio = new Audio('imperial_march.mp3');
  
  
  submit.addEventListener('click', (event) => {
      let yoda = document.getElementById('checkbox_yoda').checked;
      let trooper = document.getElementById('checkbox_trooper').checked;
      let vader = document.getElementById('checkbox_vader').checked;
      let form = document.querySelector('form');
      event.preventDefault();
      if ((trooper && (yoda === false && vader === false))||
          (vader && (yoda === false && trooper === false))||
          ((vader && trooper) && yoda === false)){
          audio.play();}
      else {
          form.submit();
      }
  }, false)

});