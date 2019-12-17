import axios from "../plugin/axios";

let allCountries = '';

function renderMatches(matches, input) {
  if (matches.length > 0) {
    const html = matches.map(match => `
    <li class="list-group-item"><p>${match}</p></li>
    `).join('');
    const list = `<ul class="list-group">
    ${html}
    </ul>`
    document.querySelector('#autocomplete-country .matchList').innerHTML = list;
    watchMatches(input);
  }
}

function renderMatchesCities(matches, input) {
  if (matches.length > 0) {
    const html = matches.map(match => `
    <li class="list-group-item"><p>${match}</p></li>
    `).join('');
    const list = `<ul class="list-group">
    ${html}
    </ul>`
    document.querySelector('#autocomplete-city .matchList').innerHTML = list;
    watchMatches(input);
  }
}

function watchMatches(input) {
  const list = document.querySelectorAll('.list-group-item');
  list.forEach(item => item.addEventListener('click', function() {
    input.value = item.textContent;
    document.querySelector('#autocomplete-country .matchList').innerHTML = '';
    document.querySelector('#autocomplete-city .matchList').innerHTML = '';
  }))
}

export async function getCountries(input) {
    let value = input.value;
    const response = await fetch(`https://mlp-demo.herokuapp.com/api/public/location/get-countries`);
    const countries = await response.json();
    allCountries = Object.values(countries);

    let matches = allCountries.filter(country => {
      const regex = new RegExp(`^${value}`, 'gi');
      return country.match(regex);
    });

    
    if (value.length === 0) {
      matches = [];
      document.querySelector('#autocomplete-country .matchList').innerHTML = '';
    }

    renderMatches(matches, input);

}

export async function getCities(currentInput, input) {
  console.log(allCountries);
  let value = input.value;
  let index = allCountries.indexOf(value) + 1;
  
  const response = await fetch(`https://mlp-demo.herokuapp.com/api/public/location/get-cities/${index}`);
  const cities = await response.json();

  let matches = Object.values(cities).filter(city => {
    const regex = new RegExp(`^${currentInput.value}`, 'gi');
    return city.match(regex);
  });
  
  if (currentInput.value.length === 0) {
    matches = [];
    document.querySelector('#autocomplete-city .matchList').innerHTML = '';
  }

  renderMatchesCities(matches, currentInput);

  console.log(matches);
}



