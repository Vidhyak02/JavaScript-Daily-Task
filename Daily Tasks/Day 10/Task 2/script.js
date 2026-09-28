function checkPalindrome() {

    let str = document.getElementById("text").value;

    let rev = str.split("").reverse().join("");

    if (str === rev) {
        document.getElementById("result").innerHTML = "Palindrome";
    } else {
        document.getElementById("result").innerHTML = "Not a Palindrome";
    }
}

