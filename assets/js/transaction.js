import { getDatabase, set,ref,push, query, orderByChild, equalTo, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDPQSndgLgYuXZaYEkYBJcsQpJPunK2J5o",
  authDomain: "finance-app-42e1b.firebaseapp.com",
  projectId: "finance-app-42e1b",
  storageBucket: "finance-app-42e1b.appspot.com",
  messagingSenderId: "1844469888",
  appId: "1:1844469888:web:c96dc5a104c6e479710665",
  measurementId: "G-2Z0V509LBZ"
};  
const testUser="MVK"
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const transactionsRef = ref(db, 'transactions');
const transactionsQuery = query(transactionsRef, orderByChild('username'), equalTo(testUser));
const transactionsList = [];

onValue(transactionsQuery, (snapshot) => {
  const transactionsList = [];
  snapshot.forEach((childSnapshot) => {
    const transaction = childSnapshot.val();
    transactionsList.push({
      ID: childSnapshot.key,
      Amount: transaction.price,
      Brand: transaction.brand,
      Category: transaction.category,
      Date: transaction.date
    });
  });

  // Clear the table body
  tableBody.innerHTML = '';

  // Render the transactions
  transactionsList.forEach(item => {
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
});

console.log(transactionsList)



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

subBtn.onclick=function() {
  // get values from modal inputs
  const amount = document.getElementById('amount').value;
  const brand = document.getElementById('brand').value;
  const note = document.getElementById('Note').value;
  const date = document.getElementById('date').value;

  // create new row
  const newRow = document.createElement('tr');
  const idCell = document.createElement('td');
  const amountCell = document.createElement('td');
  const brandCell = document.createElement('td');
  const dateCell = document.createElement('td');
  const noteCell = document.createElement('td');

  // set cell values
  idCell.textContent = "1";
  noteCell.textContent = note;
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

  // create new transaction reference and add data to database
  const newTransactionRef = push(transactionsRef);
  set(newTransactionRef, {
    username: testUser,
    date: date,
    time: '15:30',
    category: note,
    brand: brand,
    price: amount
  });
  
};
