function calculateBill() {
    let units = document.getElementById("units").value;
    let bill = 0;

    if (units === "" || Number(units) < 0) {
        document.getElementById("result").innerText =
            "Please enter a valid number of units.";
        return;
    }

    units = Number(units);

    if (units <= 100) {
        bill = units * 1.5;
    } else if (units <= 200) {
        bill = (100 * 1.5) + ((units - 100) * 2.5);
    } else if (units <= 300) {
        bill = (100 * 1.5) + (100 * 2.5)
               + ((units - 200) * 4);
    } else {
        bill = (100 * 1.5) + (100 * 2.5)
               + (100 * 4) + ((units - 300) * 6);
    }

    document.getElementById("result").innerText =
        "Units Consumed: " + units +
        "\nTotal Electricity Bill: " + bill.toFixed(2);
}