function displayText(answer) {
    document.getElementById("display-text").innerHTML = answer;
}

function convert() {
    let val = parseInt(document.getElementById("decimal").value);
    let answer = "";
    while (val > 0) {
        answer = (val % 2).toString() + answer;
        val = Math.floor(val / 2);
    }
    displayText(answer);
}

function reset() {
    document.getElementById("display-text").innerHTML = "";
    document.getElementById("decimal").value = "";
}

function pageRedirect() {
    window.location.href = "../decimal-convert.html";
}

function homeRedirect() {
    window.location.href = "../home-page.html";
}