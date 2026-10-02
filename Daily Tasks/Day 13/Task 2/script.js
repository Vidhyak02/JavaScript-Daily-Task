function countWords() {

    let sentence = document.getElementById("sentenceInput").value.trim();

    if (sentence === "") {
        document.getElementById("result").innerHTML =
            "Please enter a sentence";
        return;
    }

    let words = sentence.split(/\s+/);
    let count = words.length;

    document.getElementById("result").innerHTML =
        "Number of Words: " + count;
}