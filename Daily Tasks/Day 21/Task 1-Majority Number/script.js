function findMajority() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);
    let result = "No Majority Element Found";

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count > arr.length / 2) {
            result = "Majority Element: " + arr[i];
            break;
        }
    }

    document.getElementById("result").innerText = result;
}
