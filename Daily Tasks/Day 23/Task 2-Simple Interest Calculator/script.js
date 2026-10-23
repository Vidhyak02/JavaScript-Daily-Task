function calculateInterest() {
    let amountInput = document.getElementById("amount").value;
    let rateInput = document.getElementById("rate").value;
    let timeInput = document.getElementById("time").value;

    let result = document.getElementById("result");

    if (amountInput === "" || rateInput === "" || timeInput === "") {
        result.innerText = "Please fill in all fields.";
        return;
    }

    let amount = Number(amountInput);
    let rate = Number(rateInput);
    let time = Number(timeInput);

    if (amount <= 0 || rate < 0 || time <= 0) {
        result.innerText = "Please enter valid values.";
        return;
    }

    let interest = (amount * rate * time) / 100;
    let totalAmount = amount + interest;

    result.innerText =
        "Principal Amount: " + amount.toFixed(2) + "\n" +
        "Interest Amount: " + interest.toFixed(2) + "\n" +
        "Total Amount: " + totalAmount.toFixed(2);
}
