
function capitalizeWords() {

    let input = document.getElementById("words").value;

    let words = input.split(",");

    let result = words.map(function(word) {
        word = word.trim();
        return word[0].toUpperCase() + word.slice(1);
    });

    document.getElementById("result").innerHTML = result.join(", ");
}

