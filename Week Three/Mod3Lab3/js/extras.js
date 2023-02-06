let mouseOver = document.getElementById('onMouseOver');



function alertToUser(){
    alert('mouse over event');
}

mouseOver.addEventListener('mouseover', alertToUser);

$("#onMouseOverJQuery").mouseenter(function(){

    alert('mouse over event')

});