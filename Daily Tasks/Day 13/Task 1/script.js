function findSmallest() {

    let input = document.getElementById("numberInput").value;
    let numbers = input.split(",").map(Number);

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    document.getElementById("result").innerHTML =
        "Smallest Number: " + smallest;
}