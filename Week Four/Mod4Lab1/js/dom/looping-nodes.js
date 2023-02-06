
let elementsList = document.getElementsByClassName('loopMePracticeOne');



for(let i = 0; i < elementsList.length; i++){

   console.log(elementsList[i]); 

}

let elementsListTwo = document.querySelectorAll('.loopMePracticeTwo');

for(let i = 0; i < elementsListTwo.length; i++){

    elementsListTwo[i].className += 'deactivate';

}