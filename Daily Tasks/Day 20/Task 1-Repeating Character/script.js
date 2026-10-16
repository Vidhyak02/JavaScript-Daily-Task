function findRepeating() {
    let str = document.getElementById("text").value;
    let result = "No repeating character found";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                result = str[i];
                break;
            }
        }

        if (result !== "No repeating character found") {
            break;
        }
    }

    document.getElementById("result").innerText =
        "First Repeating Character: " + result;
}
