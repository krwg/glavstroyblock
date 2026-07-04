const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    authTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabId = tab.dataset.tab;
    authForms.forEach(form => form.classList.remove('active'));
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
  });
});

const addSupplierButton = document.getElementById('add-supplier');
const supplierSelect = document.getElementById('supplier');

function addSupplier() {
  const newSupplierName = prompt('Введите имя нового поставщика:');
  if (newSupplierName && supplierSelect) {
    const newOption = document.createElement('option');
    newOption.value = newSupplierName;
    newOption.text = newSupplierName;
    supplierSelect.add(newOption);
  }
}

function deleteSupplier() {
  if (!supplierSelect) return;
  const selectedIndex = supplierSelect.selectedIndex;
  if (selectedIndex > 0) {
    supplierSelect.remove(selectedIndex);
  }
}

if (addSupplierButton) addSupplierButton.addEventListener('click', addSupplier);
if (supplierSelect) supplierSelect.addEventListener('change', deleteSupplier);

const itemsSelect = document.getElementById('items');

function addItem() {
  const newItemName = prompt('Введите имя нового товара:');
  if (newItemName && itemsSelect) {
    const newOption = document.createElement('option');
    newOption.value = newItemName;
    newOption.text = newItemName;
    itemsSelect.add(newOption);
  }
}

if (itemsSelect) itemsSelect.addEventListener('change', addItem);

function acceptOrder(orderId) {
  const orderElement = document.getElementById(orderId);
  if (orderElement) {
    const acceptButton = orderElement.querySelector('.accept-button');
    if (acceptButton) {
      acceptButton.disabled = true;
      acceptButton.textContent = 'Принято';
    }
  }
}

function deleteOrder(orderId) {
  const orderElement = document.getElementById(orderId);
  if (orderElement) orderElement.remove();
}

document.querySelectorAll('.accept-button').forEach(button => {
  button.addEventListener('click', () => acceptOrder(button.dataset.orderId));
});

document.querySelectorAll('.delete-button').forEach(button => {
  button.addEventListener('click', () => deleteOrder(button.dataset.orderId));
});

const documentSelect = document.getElementById('document');
const printForm = document.getElementById('print-form');
const printPdfButton = document.getElementById('print-pdf');

function printDocument() {
  if (!documentSelect) return;
  const selectedDocument = documentSelect.value;
  const copiesEl = document.getElementById('copies');
  const copies = copiesEl ? copiesEl.value : '1';
  if (selectedDocument) {
    alert(`Печать документа ${selectedDocument} в количестве ${copies} копий`);
  }
}

function saveToPdf() {
  if (!documentSelect) return;
  const selectedDocument = documentSelect.value;
  if (selectedDocument) {
    alert(`Сохранение документа ${selectedDocument} в PDF`);
  }
}

if (printForm) {
  printForm.addEventListener('submit', (event) => {
    event.preventDefault();
    printDocument();
  });
}

if (printPdfButton) printPdfButton.addEventListener('click', saveToPdf);

const documentsList = document.getElementById('documents-list');

function addDocument(documentName) {
  if (!documentsList || !documentSelect) return;
  const newListItem = document.createElement('li');
  const newLink = document.createElement('a');
  newLink.href = '#';
  newLink.textContent = documentName;
  newListItem.appendChild(newLink);
  documentsList.appendChild(newListItem);

  const newOption = document.createElement('option');
  newOption.value = documentName;
  newOption.text = documentName;
  documentSelect.add(newOption);
}

if (documentsList && documentSelect) {
  addDocument('Новый документ');
}

const settingsForm = document.getElementById('settings-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const messageElement = document.getElementById('message');

if (settingsForm && passwordInput && confirmPasswordInput && messageElement) {
  settingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newPassword = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword === confirmPassword) {
      messageElement.textContent = 'Пароль успешно изменен!';
      passwordInput.value = '';
      confirmPasswordInput.value = '';
    } else {
      messageElement.textContent = 'Пароли не совпадают!';
    }
  });
}
