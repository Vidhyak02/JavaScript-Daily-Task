function countVowels() {

    let text = document.getElementById("textInput").value;
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < text.length; i++) {

        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        "Number of Vowels: " + count;
}