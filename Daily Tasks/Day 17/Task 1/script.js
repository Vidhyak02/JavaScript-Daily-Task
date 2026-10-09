function checkLeapYear() {

    let year = Number(document.getElementById("yearInput").value);

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        document.getElementById("result").innerHTML =
            year + " is a Leap Year";
    }
    else {
        document.getElementById("result").innerHTML =
            year + " is Not a Leap Year";
    }
}