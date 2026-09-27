
function showValues() {
    let input = document.getElementById("values").value;

    let arr = input.split(",");
    let text = "";

    arr.map(function(value, index) {
        text = text + value +" "+ index + "<br>";
    });

    document.getElementById("result").innerHTML = text;
}

