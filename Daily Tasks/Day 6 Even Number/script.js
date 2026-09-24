
function findEven() {
    var limit = document.getElementById("limit").value;
    var result = "";

    for (var i = 0; i <= limit; i++) {
        if (i % 2 == 0) {
            result = result + i + "<br>";
        }
    }

    document.getElementById("result").innerHTML = result;
}

