function checkPrime() {

    let number = Number(document.getElementById("numberInput").value);
    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById("result").innerHTML =
            number + " is a Prime Number";
    } else {
        document.getElementById("result").innerHTML =
            number + " is Not a Prime Number";
    }
}