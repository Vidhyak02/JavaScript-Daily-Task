function findSum() {
    var input = document.getElementById("numbers").value;

    var a = input.split(",").map(Number);

    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }

    document.getElementById("result").innerHTML = "Sum = " + sum;
}

