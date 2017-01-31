var textInput = document.getElementById("text");
var button = document.getElementById("button");
var output = document.getElementById("ouput");

textInput.addEventListener("keypress", pressed);
button.addEventListener("click", motherFunction);

function pressed(enterPress) {
    // console.log(enterPress.keyCode);
    if (enterPress.keyCode > 64 && enterPress.keyCode < 123) {
        return true;
    } else {
        alert("Letters only, plz")
        //how to keep numbers from still being registered?
    };
}
var alphaba;
var reversed;

function reversal(s) {
    reversed = s.split("").reverse().join("");
    console.log("reversal", reversed);   
}


function alphabits(s) {
    alphaba = s.split("").sort().join("");
    console.log("alphaba", alphaba)
}

function palindrome(s) {
    var flipped = s.split("").reverse().join("");
    var unflipped = s;
    if (flipped === unflipped) {
        output.innerHTML = "<h4>Your string <u>is</u> a palindrome.</h4>";
    } else { 
        output.innerHTML = "<h4>Your string is <u>NOT</u> a palindrome.</h4>";
    }}

function motherFunction() {
    reversal(textInput.value);
    alphabits(textInput.value);
    palindrome(textInput.value);
ouput.innerHTML += "<h3>" + alphaba + "<br>" + reversed + "</h3><br>";
}