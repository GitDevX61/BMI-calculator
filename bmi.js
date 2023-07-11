const heightEl = document.querySelector('.js-height')
const weightEl =  document.querySelector('.js-weight')
heightEl.value;
weightEl.value;

const inputDisplayEl =  document.querySelector('.js-input-display')

const btnEl = document.querySelector('.js-btn')

const condition = document.querySelector('.js-condition')

function calculateBMI() {
  const result = (weightEl.value / (heightEl.value/100 * heightEl.value/100)).toFixed(2);
  inputDisplayEl.value = result;

  if (result < 18.5) {
    condition.innerHTML = "Underweight"
  } else if (result >= 18.5 && result <= 24.9) {
    condition.innerHTML = "Normal weight"
  } else if (result >= 25 && result <= 29.9) {
    condition.innerHTML = "Overweight"
  } else if (result >= 30) {
    condition.innerHTML  = "Obese"
  }
}

btnEl.addEventListener('click', calculateBMI)
