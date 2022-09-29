// https://www.omnicalculator.com/everyday-life/ounce-to-kg-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kgRadio = document.getElementById('kgRadio');
const ounceRadio = document.getElementById('ounceRadio');

let kg;
let ounce = v; 

// labels of the inpust
const variable = document.getElementById('variable');

kgRadio.addEventListener('click', function() {
  variable.textContent = 'ounce';
  ounce = v;
  result.textContent = '';
});

ounceRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;

  else if(ounceRadio.checked)
    result.textContent = `ounce = ${computeounce().toFixed(5)}`;
})

// calculation

function computekg() {
  return Number(ounce.value) * 0.0283495;
}

function computeounce() {
  return Number(kg.value) / 0.0283495;
}