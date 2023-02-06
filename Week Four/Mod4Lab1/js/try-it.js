


let paint = document.getElementById('tryItGrid');



paint.addEventListener('mouseover', painter);

let resetBtn = document.getElementById('gridReset');

resetBtn.addEventListener('click', tryItReset)


function painter(e){

    e.target.classList.add('active');
}

function tryItReset(){

    let colouredSquares = document.getElementsByClassName('active');

    while(colouredSquares.length > 0){

        colouredSquares[0].classList.remove('active');
    }
}