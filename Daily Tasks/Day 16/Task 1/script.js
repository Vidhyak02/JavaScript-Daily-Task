function generateFibonacci() {

    let n = Number(document.getElementById("numberInput").value);

    let a = 0;
    let b = 1;
    let series = "";

    for (let i = 0; i < n; i++) {

        series = series + a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerHTML =
        "Fibonacci Series: " + series;
}