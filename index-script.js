let lastResults = [];
let resultAdded = false;

function mirror() {
    let inputText = document.getElementById('userInput').value;
    if (/^[a-zA-Z\s]+$/.test(inputText.trim())) {
        addToResults(mirroredText(inputText));
        resultAdded = true;
        clearTextArea();
    } else {
        alert('Use only alphabet letters.')
    };
    
}

function clearTextArea () {
    if (addToResults === true) {
        document.getElementById('userInput').value = '';
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
        resultAdded = true;
        clearTextArea();
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



function addToResults(result) {
    lastResults.unshift(result);
    lastResults.splice(5);
    displayOutput();
}

function displayOutput(output) {
    document.getElementById('output').innerHTML = lastResults.join('<br>');
}

function clearTextArea () {
    if (resultAdded) {
        document.getElementById('userInput').value = '';
        resultAdded = false;
    }
}