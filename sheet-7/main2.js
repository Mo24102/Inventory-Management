let items = [];
let idCounter = 1;

const myForm = document.forms[0];
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const itemName = document.getElementById("itemName").value;
  const itemQty = parseInt(document.getElementById("itemQuantity").value);
  items.push({ id : idCounter++, name: itemName, qty: itemQty });
  document.getElementById("itemName").value = "";
  document.getElementById("itemQuantity").value = "";
  renderTable();
});

const renderTable = () => {
  const tboody = document.getElementById("inventoryTable");
  tboody.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>
        <button class="edit" onclick="editItem(${item.id})">edit</button>
        <button class="delete" onclick="deleteItem(${item.id})">delete</button>
        </td>
        `;
    tboody.appendChild(row);
  });
};

const editItem = (id) => {
  const item = items.find((item) => item.id == id);
  if (item) {
    const newName = prompt("enter product name", item.name);
    const newQty = prompt("enter product quantity", item.qty);
    if (newName) item.name = newName;
    if (newQty) item.qty = newQty;
    renderTable();
  }
};

const deleteItem = (id) => {
  items = items.filter((items) => items.id != id);
  renderTable();
};
