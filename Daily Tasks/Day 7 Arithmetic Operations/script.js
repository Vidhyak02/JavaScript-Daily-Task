
function add() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var sum = num1 + num2;

    document.getElementById("result").innerHTML = "Addition = " + sum;
}

function sub() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var result = num1 - num2;

    document.getElementById("result").innerHTML = "Subtraction = " + result;
}

function mul() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var result = num1 * num2;

    document.getElementById("result").innerHTML = "Multiplication = " + result;
}

function div() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var result = num1 / num2;

    document.getElementById("result").innerHTML = "Division = " + result;
}

