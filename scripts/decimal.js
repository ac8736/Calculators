function displayText(answer) {
    document.getElementById("display-text").innerHTML = answer;
}

function convert() {
    let binaryNum = document.getElementById("decimal").value;
    let answer = 0;
    let exp = 0;
    for (let i = binaryNum.length-1; i >= 0; i--) {
        console.log(binaryNum[i]);
        if (binaryNum[i] == "1") {
            answer += Math.pow(2, exp);
        }
        exp++;
    }
    displayText(answer);
}

function reset() {
    document.getElementById("display-text").innerHTML = "";
    document.getElementById("decimal").value = "";
}

function pageRedirect() {
    window.location.href = "../binary-convert.html";
}

function homeRedirect() {
    window.location.href = "../home-page.html";
}