function sumOfDigits() {

    let number = document.getElementById("numberInput").value;
    let sum = 0;

    number = Math.abs(Number(number));

    while (number > 0) {
        sum = sum + (number % 10);
        number = Math.floor(number / 10);
    }

    document.getElementById("result").innerHTML =
        "Sum of Digits: " + sum;
}