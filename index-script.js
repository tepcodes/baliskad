function mirror() {
    let inputText = document.getElementById('userInput').value;
    if (/^[a-zA-Z\s]+$/.test(inputText.trim())) {
        addToResults(mirroredText(inputText));
    } else {
        alert('Use only alphabet letters.')
    }
}

function mirroredText(input) {
    let textArray = input.split('');
    let mirroredArray = textArray.reverse();
    let mirroredText = mirroredArray.join('');
    return mirroredText;
}

function reverse() {
    let inputText = document.getElementById('userInput').value;
    if (/^[a-zA-Z\s]+$/.test(inputText.trim())) {
        addToResults(reversedText(inputText));
    } else {
        alert('Use only alphabet letters.')
    }
}

function reversedText(input) {
    let textArray = input.split(/\s+/);
    let reversedArray = textArray.reverse();
    let reversedText = reversedArray.join(' ');
    return reversedText;
}

let lastResults = [];

function addToResults(result) {
    lastResults.unshift(result);
    lastResults.splice(5);
    displayOutput();
}

function displayOutput(output) {
    document.getElementById('output').innerHTML = lastResults.join('<br>');
}