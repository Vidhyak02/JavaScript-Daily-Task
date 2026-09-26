function factorial() {
    var num = Number(document.getElementById("num").value);
    var temp = 1;
    var result = "";

    for (var i = 1; i <= num; i++) {
        temp = temp * i;
        result = result + temp + "<br>";
    }

    document.getElementById("result").innerHTML = result;
}

