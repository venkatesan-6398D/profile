// This file contains JavaScript functions for handling user interactions on the frontend, such as adding new addresses or payment methods, and making API calls to the backend.

document.addEventListener("DOMContentLoaded", function () {
  loadCustomerProfile();
  loadAddresses();
  loadPaymentMethods();
});

function loadCustomerProfile() {
  fetch("/api/profile")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("userName").textContent = data.name;
      document.getElementById("userEmail").textContent = data.email;
      document.getElementById("userPhone").textContent = data.phone;
    })
    .catch((error) => console.error("Error loading profile:", error));
}

function loadAddresses() {
  fetch("/api/addresses")
    .then((response) => response.json())
    .then((data) => {
      const addressList = document.getElementById("addressList");
      addressList.innerHTML = "";
      data.forEach((address) => {
        const li = document.createElement("li");
        li.textContent = address;
        addressList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error loading addresses:", error));
}

function loadPaymentMethods() {
  fetch("/api/payment-methods")
    .then((response) => response.json())
    .then((data) => {
      const paymentList = document.getElementById("paymentList");
      paymentList.innerHTML = "";
      data.forEach((payment) => {
        const li = document.createElement("li");
        li.textContent = payment;
        paymentList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error loading payment methods:", error));
}

function addAddress() {
  const newAddress = prompt("Enter new address:");
  if (newAddress) {
    fetch("/api/addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: newAddress }),
    })
      .then((response) => response.json())
      .then(() => loadAddresses())
      .catch((error) => console.error("Error adding address:", error));
  }
}

function addPayment() {
  const newPayment = prompt("Enter new payment method:");
  if (newPayment) {
    fetch("/api/payment-methods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payment: newPayment }),
    })
      .then((response) => response.json())
      .then(() => loadPaymentMethods())
      .catch((error) => console.error("Error adding payment method:", error));
  }
}
