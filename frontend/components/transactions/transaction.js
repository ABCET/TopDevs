let Data=[
  {
    "ID": 1,
    "Amount": 100,
    "Brand": "MAthew",
    "Category": "Lifestyle",
    "Date": "11-12-2023"
  },
  {
    "ID": 2,
    "Amount": 200,
    "Brand": "Acme",
    "Category": "Beauty",
    "Date": "10-01-2024"
  },
  {
    "ID": 3,
    "Amount": 50,
    "Brand": "XYZ Corp",
    "Category": "Grocery",
    "Date": "05-23-2023"
  }
];

let modalBtn = document.getElementById("createTrans")
let modal = document.querySelector(".Modal")
let closeBtn = document.querySelector(".close-btn")
let subBtn=document.getElementById("save-btn")
const tableBody = document.querySelector('tbody');

Data.forEach(item => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.ID}</td>
    <td>${item.Amount}</td>
    <td>${item.Brand}</td>
    <td>${item.Category}</td>
    <td>${item.Date}</td>
  `;
  tableBody.appendChild(row);
});

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}

subBtn.onclick=function()
{
    // get values from modal inputs
  
  const amount = document.getElementById('amount').value;
  const brand = document.getElementById('brand').value;
  const Note = document.getElementById('Note').value;
  const date = document.getElementById('date').value;
  
  // create new row
  const newRow = document.createElement('tr');
  const idCell=document.createElement('td')
  const amountCell = document.createElement('td');
  const brandCell = document.createElement('td');
  
  const dateCell = document.createElement('td');
  const noteCell = document.createElement('td');
  
  // set cell values
  idCell.textContent="1";
  noteCell.textContent = Note;
  amountCell.textContent = amount;
  brandCell.textContent = brand;
  dateCell.textContent = date;
  
  // append cells to row
  
  newRow.appendChild(idCell);
  newRow.appendChild(amountCell);
  newRow.appendChild(brandCell);
  newRow.appendChild(noteCell);
  newRow.appendChild(dateCell);
  
  // append row to table body
  tableBody.appendChild(newRow);
  
  // hide modal
  const modal = document.querySelector('.Modal');
  modal.style.display = 'none';
}