import axios from "../plugin/axios";

function renderMatches(matches, input) {
  if (matches.length > 0) {
    const html = matches.map(match => `
    <li class="list-group-item">
      <p>${match}</p>
    </li>
    `).join('');
    const list = `<ul class="list-group">
    ${html}
    </ul>`
    document.querySelector('#autocomplete-country .matchList').innerHTML = list;
    watchMatches(input);
  }
}

function watchMatches(input) {
  const list = document.querySelectorAll('.list-group-item');
  list.forEach(item => item.addEventListener('click', function() {
    input.value = item.textContent;
  }))
}

export async function getCountries(input) {
    let value = input.value;
    const response = await fetch(`https://mlp-demo.herokuapp.com/api/public/location/get-countries`);
    const countries = await response.json();


    // get matches to current text input
    let matches = Object.values(countries).filter(country => {
      const regex = new RegExp(`^${value}`, 'gi');
      return country.match(regex);
    });

    
    if (value.length === 0) {
      matches = [];
      document.querySelector('#autocomplete-country .matchList').innerHTML = '';
    }

    renderMatches(matches, input);
}

