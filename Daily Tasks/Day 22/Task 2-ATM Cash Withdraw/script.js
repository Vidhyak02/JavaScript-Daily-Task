let correctPin = "1234";

function withdrawCash() {
    let pin = document.getElementById("pin").value;
    let balance = document.getElementById("amt").value;
    let amount = Number(document.getElementById("amount").value);
    let result = document.getElementById("result");

    if (pin === "") {
        result.innerText = "Please enter your ATM PIN.";
    } else if (pin !== correctPin) {
        result.innerText = "Invalid PIN. Please try again.";
    } else if (document.getElementById("amount").value === "") {
        result.innerText = "Please enter withdrawal amount.";
    } else if (amount <= 0) {
        result.innerText = "Enter a valid withdrawal amount.";
    } else if (amount % 100 !== 0) {
        result.innerText = "Enter amount in multiples of 100.";
    } else if (amount > balance) {
        result.innerText = "Insufficient balance.";
    } else {
        balance = balance - amount;

        result.innerText =
            "Withdrawal Successful!\n" +
            "Withdrawn Amount: " + amount + "\n" +
            "Remaining Balance: " + balance;
    }
}
