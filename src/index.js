import "./styles.css";

//Dataset imports
import data from "./dataset.json";
import data2 from "./dataset2.json";

//function that produces array of numbers from start to end
function range(start, end) {
  if(start === end) return [start];
  return [start, ...range(start + 1, end)];
}

//Fetches dictionary and converts into an array of strings
const labels = data.dataset.dimension.Alue.category.label;
let label_strings = [];
for(var key in labels) {
  if(labels.hasOwnProperty(key)) {
    label_strings.push(labels[key])
  }
}
// Fetch values for the table
const values = data.dataset.value;
const values2 = data2.dataset.value;
const table_body = document.getElementById('table-body');
const table_head = document.getElementById('table-head')

//Insert header data into the table
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th')
th1.innerText = "Municipality";
th2.innerText = "population";
th3.innerText = "Employment amount";
th4.innerText = "Employment-%";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
table_head.appendChild(tr);

// Iterate thru data and add into table
// Employment classes based on employment-%
for(var idx in range(0,309)) {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td')
  td1.innerText = label_strings[idx];
  td2.innerText = values[idx];
  td3.innerText = values2[idx];
  let employment_rate = Math.round(values2[idx]/values[idx] * 10000)/100;
  td4.innerText =  employment_rate + "%"
  if (employment_rate > 45) {
    tr.setAttribute('id','emp1')
  }else if (employment_rate < 25) {
    tr.setAttribute('id','emp2')
  }
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  table_body.appendChild(tr);
}