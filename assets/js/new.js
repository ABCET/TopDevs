let Data = [
  {
    "ID": 1,
    "Amount": 100,
    "Brand": "Mathew",
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

const login = sessionStorage.getItem('isLoggedIn');
if (login) {
  const name=sessionStorage.getItem('name');
  name.innerHTML = name;
}

const dash = document.getElementById('dash');
dash.addEventListener('click', () => {
  const head = document.getElementById('head');
  head.innerHTML = 'Dashboard';
  const tablecontainer = document.querySelector('.table-container');
  tablecontainer.style.display = 'none';
  const box = document.querySelector('.box');
  box.style.display = 'flex';

  var ctx = document.getElementById('activity').getContext('2d');
  var activity = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
      datasets: [{
        data: [0, 10, 5, 2, 20, 30, 45, 44, 32, 67, 89, 90],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.5
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  activity.update();
});

const trans = document.getElementById('trans');
trans.addEventListener('click', () => {
  const head = document.getElementById('head');
  head.innerHTML = 'Transactions';
  const tablecontainer = document.querySelector('.table-container');
  tablecontainer.style.display = 'block';
  const box = document.querySelector('.box');
  box.style.display = 'none';

  let modalBtn = document.getElementById("createTrans")
  let modal = document.querySelector(".Modal")
  let closeBtn = document.querySelector(".close-btn")
  let subBtn = document.getElementById("save-btn")
  const tableBody = document.querySelector('tbody');

  tableBody.innerHTML = "";

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

  modalBtn.onclick = function () {
    modal.style.display = "block"
  }
  closeBtn.onclick = function () {
    modal.style.display = "none"
  }

  subBtn.onclick = function () {
    const amount = document.getElementById('amount').value;
    const brand = document.getElementById('brand').value;
    const Note = document.getElementById('Note').value;
    const date = document.getElementById('date').value;

    const newRow = document.createElement('tr');
    const idCell = document.createElement('td')
    const amountCell = document.createElement('td');
    const brandCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const noteCell = document.createElement('td');

    idCell.textContent = "1";
    noteCell.textContent = Note;
    amountCell.textContent = amount;
    brandCell.textContent = brand;
    dateCell.textContent = date;

    newRow.appendChild(idCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(brandCell);
    newRow.appendChild(noteCell);
    newRow.appendChild(dateCell);
    tableBody.appendChild(newRow);

    const modal = document.querySelector('.Modal');
    modal.style.display = 'none';
  }
});

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  window.location.href = 'index.html';
  sessionStorage.removeItem('isLoggedIn');
});
