



// export function autocomplete(input, () => searchData(search.value));


// function ciSearch(what = "", where = "") {
//   return where.toUpperCase().search(what.toUpperCase());
// }

// export async function autocomplete(input, data) {
//   //   let inputs = document.querySelectorAll(selector);
//   console.log(input);

//   input.classList.add("autocomplete-input");

//   let wrap = document.createElement("div");
//   wrap.className = "autocomplete-wrap";
//   input.parentNode.insertBefore(wrap, input);
//   wrap.appendChild(input);

//   let list = document.createElement("div");
//   list.className = "autocomplete-list";
//   wrap.appendChild(list);

//   let matches = [];

//   input.addEventListener("input", () => {
//     let value = input.value;
    
//     let countries = [];

//     data().then(data => {
//       data.forEach((dataItem, index) => {
        
//         countries.push(dataItem);
//       });
//     });


//     // let item = document.createElement("div");
//     // item.className = "autocomplete-item";
//     // item.innerHTML = parts[0] + "<strong>" + parts[1] + "</strong>" + parts[2];
//     // list.appendChild(item);
//     // listItems.push(item);

//     console.log(countries);

//     countries.forEach((country, index) => {
//       console.log(country);
//       let search = ciSearch(value, country);
//       if (search === -1) return false;
//       matches.push(index);
//     });

//     console.log(matches);

//   });
// }

//Да, я получается могу тут использовать эти данные, но как мне просто сохранить их в константу...Я хочу уже загруженные данные передавать в функцию autocomplete(data) и там уже что то с ними делать