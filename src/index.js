import './index.css'

const rangeInputs = document.querySelectorAll('.calculate__range');
const btnLink = document.querySelector('.calculate__link');

function handleInputChange(e) {
  let target = e.target
  const min = target.min
  const max = target.max
  const val = target.value
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
});

btnLink.addEventListener('click', (e) => {
  e.textContent = 'Loading...';
});