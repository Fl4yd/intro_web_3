import "./styles.css";


async function getData() {
  const url = './dataset.json';
  const dataPromise = await fetch(url);
  const dataJSON = await dataPromise.json();
  dataJSON.forEach(city => {
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
  });
}

import data from "./dataset.json";

function range(start, end) {
  if(start === end) return [start];
  return [start, ...range(start + 1, end)];
}

const labels = data.dataset.dimension.Alue.category.label;
let label_strings = [];
for(var key in labels) {
  if(labels.hasOwnProperty(key)) {
    label_strings.push(labels[key])
  }
}

const values = data.dataset.value;
const table_body = document.getElementById('table-body');
const table_head = document.getElementById('table-head')
let tr = document.createElement('tr')
let th1 = document.createElement('th')
let th2 = document.createElement('th')
th1.innerText = "Municipality";
th2.innerText = "Population";
tr.appendChild(th1);
tr.appendChild(th2);
table_head.appendChild(tr);

for(var idx in range(0,309)) {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  td1.innerText = label_strings[idx];
  td2.innerText = values[idx];
  tr.appendChild(td1);
  tr.appendChild(td2);
  table_body.appendChild(tr);
}