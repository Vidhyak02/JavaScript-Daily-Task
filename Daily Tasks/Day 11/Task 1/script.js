function findDuplicates() {

    let input = document.getElementById("numberInput").value;

    let numbers = input.split(",").map(Number);
    let duplicates = [];

    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
                duplicates.push(numbers[i]);
            }
        }
    }

    if (duplicates.length > 0) {
        document.getElementById("result").innerHTML =
            "Duplicate Elements: " + duplicates.join(", ");
    } else {
        document.getElementById("result").innerHTML =
            "No Duplicate Elements Found";
    }
}