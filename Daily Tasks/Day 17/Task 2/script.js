function swapNumbers() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let temp = a;
    a = b;
    b = temp;

    document.getElementById("result").innerHTML =
        "After Swapping:<br>" +
        "First Number: " + a + "<br>" +
        "Second Number: " + b;
}

