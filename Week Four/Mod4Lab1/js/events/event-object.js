
let buttonsOne = document.getElementById('btnContainer');

buttonsOne.addEventListener('click', buttonsClick);

function buttonsClick(e) {

    console.log(e.target);
}


let buttonsTwo = document.getElementById('btnContainerTwo');

buttonsTwo.addEventListener('click', function(e){ buttonsClickTwo(e, 'my Message')});


function buttonsClickTwo(e, message) {

    console.log(e.target);
    console.log(message);
}

