let bubbleButton = document.getElementById('bubbleButton');
let bubbleDiv = document.getElementById('bubbleDiv');
let captureButton = document.getElementById('captureButton');
let captureDiv = document.getElementById('captureDiv');

function bubbleButtonClick() {
    alert("Bubble Button");
}

function bubbleDivClick() {
    alert("Bubble Div");
}

function captureButtonClick() {
    alert("Capture Button");
}

function captureDivClick() {
    alert("Capture Div");
}


//Insert Event Listeners here:

bubbleButton.addEventListener('click', bubbleButtonClick);
bubbleDiv.addEventListener('click', bubbleDivClick);

captureButton.addEventListener('click', captureButtonClick, true);

captureDiv.addEventListener('click', captureDivClick, true);