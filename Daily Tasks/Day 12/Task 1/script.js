function countConsonants() {

    let text = document.getElementById("textInput").value;
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < text.length; i++) {

        let character = text[i].toLowerCase();

        if (character >= "a" && character <= "z" && !vowels.includes(character)) {
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        "Number of Consonants: " + count;
}