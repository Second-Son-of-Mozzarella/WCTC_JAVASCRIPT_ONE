
function runAreaCalc(){
    let width = document.getElementById('width').value;
    let length = document.getElementById('length').value;

    document.getElementById('AreaFull').textContent = 'Area: ' + getArea(length, width);
    
}

function getArea(length, width){

    return width * length;
}

