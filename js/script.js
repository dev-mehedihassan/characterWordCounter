let textInput = document.getElementById("textInput");
let wordCount = document.getElementById("wordCount");
let charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    let text = textInput.value

    charCount.innerText = text.length;

    let words = text.trim().split(/\s+/);

    if (text.trim() === "") {
        wordCount.innerText = 0;
    } else {
        wordCount.innerText = words.length;
    }
})