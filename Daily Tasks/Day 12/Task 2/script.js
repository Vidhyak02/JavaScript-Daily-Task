function findLargest() {

    let input = document.getElementById("numberInput").value;
    let numbers = input.split(",").map(Number);

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    document.getElementById("result").innerHTML =
        "Largest Number: " + largest;
}