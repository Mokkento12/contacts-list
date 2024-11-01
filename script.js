const contactList = document.getElementById("contactList");

const contacts = [];

function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    contacts.push({ name, phone });

    // Сбрасываем значения полей ввода
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";

    // Обновляем список контактов
    updateContacts();
  }
}

function updateContacts() {
  contactList.innerHTML = contacts
    .map(
      (contact) =>
        `
        <div class="contact">
          <span class="contact-name">${contact.name}</span>
          <span>${contact.phone}</span>
          <button onclick="removeContact('${contact.name}')">Удалить</button>
        </div>
        `
    )
    .join("");
}

function removeContact(name) {
  const index = contacts.findIndex((contact) => contact.name === name);

  if (index > -1) {
    contacts.splice(index, 1);

    updateContacts();
  }
}
