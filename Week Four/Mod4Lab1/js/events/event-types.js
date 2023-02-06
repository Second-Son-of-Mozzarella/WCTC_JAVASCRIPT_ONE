//window.addEventListener('load', function(){alert('Page Loaded')});

let input =document.getElementById('inputFocus')

input.addEventListener('focus', function(){ this.classList.add('active'); });
input.addEventListener('blur', function(){ this.classList.remove('active'); });


let mousePositionElement = document.getElementById('mousePosition');

document.addEventListener('mousemove', moveEvent);

function moveEvent(e) {

    let mousePosition = mousePositionElement.value = '(' + e.pageX + ', ' + e.pageY + ')';
    console.log(mousePosition);

}