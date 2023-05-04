let modalBtn = document.getElementById("createTrans")
let modal = document.querySelector(".Modal")
let closeBtn = document.querySelector(".close-btn")
let subBtn=document.getElementById("save-btn")
const tableBody = document.querySelector('tbody');
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