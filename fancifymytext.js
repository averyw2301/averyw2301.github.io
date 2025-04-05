function makeTextBigger(){
    let textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";

}

function fancifyText(){
    let textArea = document.getElementById("userText");
    let fancy = document.getElementById("fancy");

    if(fancy.checked){
        alert("You selected FancyShmancy!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    } else {
        alert("You selected BoringBetty!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[words.length - 1] !== "") {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}