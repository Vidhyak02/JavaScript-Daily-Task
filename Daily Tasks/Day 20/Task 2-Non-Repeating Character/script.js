function findNonRepeating() {
    let str = document.getElementById("text").value;
    let result = "No non-repeating character found";

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1) {
            result = str[i];
            break;
        }
    }

    document.getElementById("result").innerText =
        "First Non-Repeating Character: " + result;
}
