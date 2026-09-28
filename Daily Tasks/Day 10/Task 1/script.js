function capitalizeText() {

    let str = document.getElementById("text").value;

    let result = str.split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");

    document.getElementById("result").innerHTML = result;
}
