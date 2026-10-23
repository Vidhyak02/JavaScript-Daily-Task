function calculateSalary() {
    let basic = Number(document.getElementById("basicSalary").value);
    let hraPercent = Number(document.getElementById("hra").value);
    let daPercent = Number(document.getElementById("da").value);
    let deduction = Number(document.getElementById("deduction").value);

    let result = document.getElementById("result");

    if (
        document.getElementById("basicSalary").value === "" ||
        document.getElementById("hra").value === "" ||
        document.getElementById("da").value === "" ||
        document.getElementById("deduction").value === ""
    ) {
        result.innerText = "Please fill in all fields.";
    } else if (
        basic <= 0 ||
        hraPercent < 0 ||
        daPercent < 0 ||
        deduction < 0 ||
        hraPercent > 100 ||
        daPercent > 100
    ) {
        result.innerText = "Please enter valid values.";
    } else {
        let hraAmount = basic * hraPercent / 100;
        let daAmount = basic * daPercent / 100;

        let grossSalary = basic + hraAmount + daAmount;
        let netSalary = grossSalary - deduction;

        if (netSalary < 0) {
            result.innerText = "Deduction cannot exceed gross salary.";
            return;
        }

        result.innerText =
            "Basic Salary: ₹" + basic.toFixed(2) + "\n" +
            "HRA: ₹" + hraAmount.toFixed(2) + "\n" +
            "DA: ₹" + daAmount.toFixed(2) + "\n" +
            "Gross Salary: ₹" + grossSalary.toFixed(2) + "\n" +
            "Deduction: ₹" + deduction.toFixed(2) + "\n" +
            "Net Salary: ₹" + netSalary.toFixed(2);
    }
}
