function separateNumbers() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);

    let positive = [];
    let negative = [];
    let zero = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        } else if (arr[i] < 0) {
            negative.push(arr[i]);
        } else {
            zero.push(arr[i]);
        }
    }

    document.getElementById("result").innerHTML =
        "Negative Numbers: " + negative.join(", ") + "<br>" +
        "Positive Numbers: " + positive.join(", ") + "<br>" +
        "Zeros: " + zero.join(", ");
}
