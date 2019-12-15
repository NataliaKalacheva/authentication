function ciSearch(what = "", where = "") {
  return where.toUpperCase().search(what.toUpperCase());
}

export async function autocomplete(input, data) {
  //   let inputs = document.querySelectorAll(selector);
  console.log(input);
  console.log(data);
  input.classList.add("autocomplete-input");

  let wrap = document.createElement("div");
  wrap.className = "autocomplete-wrap";
  input.parentNode.insertBefore(wrap, input);
  wrap.appendChild(input);

  let list = document.createElement("div");
  list.className = "autocomplete-list";
  wrap.appendChild(list);

  let matches = [];

  input.addEventListener("input", () => {
    let value = input.value;

    data.forEach((dataItem, index) => {
      let search = ciSearch(value, dataItem);
      if (search === -1) return false;
      matches.push(index);
    });

    let item = document.createElement("div");
    item.className = "autocomplete-item";
    item.innerHTML = parts[0] + "<strong>" + parts[1] + "</strong>" + parts[2];
    list.appendChild(item);
    listItems.push(item);

    console.log(matches);
  });
}
