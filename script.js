let balance = 2000;
let loginForm = document.getElementById("form-container");
let loginAttempts = 3;

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "admin" && password === "123") {
    alert("Inico de sesion correcto");
    showTransactionMenu();
  } else {
    loginAttempts--;
    if (loginAttempts > 0) {
      alert("Intenta de nuevo");
    } else {
      loginForm.style.display = "none";
      alert("Cuenta bloqueada");
    }
  }
});

function showTransactionMenu() {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("transaction-menu").style.display = "block";
  document.getElementById("balance").style.display = "block";
}

function updateBalance() {
  document.getElementById("balance").textContent = "Balance: $" + balance;
}

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalance();
    alert("Deposited $" + amount + ". New Balance: $" + balance);
  } else {
    alert("Enter an amount greater than 0");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      updateBalance();
      alert("Withdrawal for $" + amount + ". New balance: $" + balance);
    } else {
      alert("Insufficients funds");
    }
  } else {
    ("Enter a valid amount to withdraw");
  }
}

function transfer() {
  const recipient = document.getElementById("recipient").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!isNaN(amount) && amount > 0 && recipient !== "") {
    balance -= amount;
    updateBalance();
    alert(
      "Transferred $" +
        amount +
        " to " +
        recipient +
        ". Your new balance: $" +
        balance
    );
  } else {
    alert("Please enter a valid amount and recipient for transfer.");
  }
}

function viewBalance() {
  alert("Current balance: $" + balance);
}

window.onload = function () {
  updateBalance();
};

function logout() {
  location.reload();
}
