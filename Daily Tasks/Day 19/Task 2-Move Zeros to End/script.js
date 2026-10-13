function moveZeros() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);

    let result = [];
    let zeros = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        } else {
            result.push(arr[i]);
        }
    }

    for (let i = 0; i < zeros; i++) {
        result.push(0);
    }

    document.getElementById("result").innerHTML =
        "Result: " + result.join(", ");
}