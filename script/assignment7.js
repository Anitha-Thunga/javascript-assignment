//creation of an account
const account = {
  // accountName with string data type and contain account holder name
  accountName: "John Doe",
  // balnace with number data type and total amount of account 
  balance: 1000,
//getBalance displays the total amount of account
  getBalance: function () {
    alert("Your balance is: " + this.balance);
  },
// deposit() deposit money onto the balnce of the account
  deposit: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid deposit amount");
    } else {
      this.balance += amount;
      alert(amount + " deposited successfully.");
    }
  },
//withdraw() withdraw money from the balance of the account
  withdrawal: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid withdrawal amount");
    } else if (amount > this.balance) {
      this.accountError("Insufficient funds");
    } else {
      this.balance -= amount;
      alert(amount + " withdrawn successfully.");
    }
  },
//getAccountName() displays the account holders name to the user
  getAccountName: function () {
    alert("Account holder: " + this.accountName);
  },
//displays erros
  accountError: function (message) {
    alert("Error: " + message);
  },
//exit the account
  exitAccount: function () {
    alert("Thank you for using the ATM.Visit again. Goodbye!");
  }
};


function atm() {
  let message;
  do{
    message= parseInt(prompt(
      "select a choice:\n" +
      "1. Get Balance\n" +
      "2. Deposit\n" +
      "3. Withdraw\n" +
      "4. Get Account Name\n" +
      "5. Exit"
    ));

    switch (message) {
      case 1:
        account.getBalance();
        break;

      case 2:
        let depositAmount = parseFloat(prompt("Enter deposit amount:"));
        account.deposit(depositAmount);
        break;

      case 3:
        let withdrawAmount = parseFloat(prompt("Enter withdrawal amount:"));
        account.withdrawal(withdrawAmount);
        break;

      case 4:
        account.getAccountName();
        break;

      case 5:
        account.exitAccount();
        break;

      default:
        account.accountError("Invalid menu option");
    }
 }while (message !== 5);

}


// Start ATM
atm();