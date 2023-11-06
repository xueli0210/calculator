let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(button){
  calculation += button;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
  document.querySelector('.js-p-display-calculation')
    .innerHTML = calculation
}
