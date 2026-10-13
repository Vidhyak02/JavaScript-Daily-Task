function countFrequency() {
    let str = document.getElementById("userInput").value;
    let result = "";
    let checked = "";

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        if (checked.includes(str[i])) {
            continue;
        }

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        result += str[i] + " : " + count + "\n";
        checked += str[i];
    }

    document.getElementById("result").textContent = result;
}
