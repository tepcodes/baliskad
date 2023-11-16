let lastReverseResults = [];
let lastMirrorResults = [];
let lastReflectResults = [];
let resultAdded = false;

function reverse() {
    let inputText = document.getElementById('userInput').value;
    if (/^[a-zA-Z\s]+$/.test(inputText.trim())) {
        addToReverseResults(reversedText(inputText));
        resultAdded = true;
        clearTextArea();
    } else {
        alert('Use only alphabet letters.')
    }
}

function mirror() {
    let inputText = document.getElementById('userInput').value;
    if (/^[a-zA-Z\s]+$/.test(inputText.trim())) {
        addToMirrorResults(mirroredText(inputText));
        resultAdded = true;
        clearTextArea();
    } else {
        alert('Use only alphabet letters.')
    };
    
}

function reflect() {
    let inputText = document.getElementById('userInput').value;
    if (/^[a-zA-Z\s]+$/.test(inputText.trim())) {
        addToReflectResults(reflectedText(inputText));
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

function mirroredText(input) {
    let textArray = input.split('');
    let mirroredArray = textArray.reverse();
    let mirroredText = mirroredArray.join('');
    return mirroredText;
}

function reflectedText(input) {
    let textArray = input.split(/\s+/);
    let reflectedArray = textArray.reverse();
    let reflectedText = reflectedArray.join(' ');
    return reflectedText;
}

function addToReverseResults(result) {
    lastReverseResults.unshift(result);
    lastReverseResults.splice(5);
    displayReverseOutput('reverseOutput', lastReverseResults);
}

function addToMirrorResults(result) {
    lastMirrorResults.unshift(result);
    lastMirrorResults.splice(5);
    displayMirrorOutput('mirrorOutput', lastMirrorResults);
}

function addToReflectResults(result) {
    lastReflectResults.unshift(result);
    lastReflectResults.splice(5);
    displayReflectOutput('reflectOutput', lastReflectResults);
}

function displayReverseOutput(output) {
    document.getElementById('reverseOutput').innerHTML = lastReverseResults.join('<br>');
}

function displayMirrorOutput(output) {
    document.getElementById('mirrorOutput').innerHTML = lastMirrorResults.join('<br>');
}

function displayReflectOutput(output) {
    document.getElementById('reflectOutput').innerHTML = lastReflectResults.join('<br>');
}

function clearTextArea () {
    if (resultAdded) {
        document.getElementById('userInput').value = '';
        resultAdded = false;
    }
}