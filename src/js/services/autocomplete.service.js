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
    input.nextElementSibling.innerHTML = list;

    watchMatches(input);
  }
}

function watchMatches(input) {
  const list = document.querySelectorAll('.list-group-item');
  list.forEach(item => item.addEventListener('click', function() {
    input.value = item.textContent;
    document.getElementById('city').removeAttribute('disabled');
    input.nextElementSibling.innerHTML = '';
  }))
}

function filterMatches(countries, value) {
  let matches = countries.filter(country => {
    const regex = new RegExp(`^${value}`, 'gi');
    return country.match(regex);
  });

  return matches;
}

async function getCountries() {
    try {
      const response = await axios.get(
        `/location/get-countries`);
      allCountries = Object.values(response);
      return Object.values(response);
    } catch (error) {
      console.log(err);
      return Promise.reject(err);
    }
}

async function getCities(countryIndex) {
  try {
    const response = await axios.get(
      `/location/get-cities/${countryIndex}`);
    return Object.values(response);
  } catch (error) {
    console.log(err);
    return Promise.reject(err);
  }
}

export function autocompleteCountries(input) {
    let value = input.value;

    getCountries().then(countries => {

      let matches = filterMatches(countries, value);

      if (value.length === 0) {
        matches = [];
        document.querySelector('#autocomplete-country .matchList').innerHTML = '';
      }

      renderMatches(matches, input);
    })
}

export function autocompleteCities(currentInput, countryInput) {
  
  // let value = countryInput.value;
  let countryIndex = allCountries.indexOf(countryInput.value) + 1;

  getCities(countryIndex).then(cities => {
    
    let matches = filterMatches(cities, currentInput.value);
    
    if (currentInput.value.length === 0) {
      matches = [];
      document.querySelector('#autocomplete-city .matchList').innerHTML = '';
    }
  
    renderMatches(matches, currentInput);
  })
}



