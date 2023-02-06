


let btnParent = document.getElementById('btnParent');

let btnChild = document.getElementById('btnChild');

let btnPreviousSibling = document.getElementById('btnPreviousSibling');

let btnNextSibling = document.getElementById('btnNextSibling');

btnParent.addEventListener('click', activateParent);
btnChild.addEventListener('click', activateChild);
btnPreviousSibling.addEventListener('click', activatePSibling);
btnNextSibling.addEventListener('click', activateNSibling);

function activateParent(){

    let activeElement = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');
    activeElement.parentNode.classList.add('activeElement');

}

function activateChild(){

    let activeElement = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');
    activeElement.firstElementChild.classList.add('activeElement');
    
}

function activatePSibling(){

    let activeElement = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');
    activeElement.previousElementSibling.classList.add('activeElement');
    
}

function activateNSibling(){

    let activeElement = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');
    activeElement.nextElementSibling.classList.add('activeElement');

    
}