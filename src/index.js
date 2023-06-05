import "./styles.css";


async function makeTable() {
  const response1 = await fetch('https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff');
  const response2 = await fetch('https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065')
  const data = await response1.json();
  const data2 = await response2.json();

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
th2.innerText = "Population";
th3.innerText = "Employment amount";
th4.innerText = "Employment-%";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
table_head.appendChild(tr);

// Iterate thru data and add into table
// Employment classes based on employment-%

for(var idx = 0;idx < values.length;idx++) {
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
  

}
makeTable()