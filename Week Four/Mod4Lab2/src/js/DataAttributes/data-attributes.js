let myElement = document.querySelector('.dataPracticeOne');

console.log(myElement.dataset.id);

let myElementTwo = document.querySelectorAll('.dataPracticeTwo');

console.log(myElementTwo);

for(let i = 0; i < myElement.clientHeight; i++)
{

   console.log(myElementTwo[i].dataset.divPosition);
    
}