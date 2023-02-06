let myElements = document.getElementsByClassName('updateMe');

for(let i = 0; i < myElements.length; i++){
   
    myElements[i].innerHTML = '<p> <em> Im </em> gonna put stuff in here <p>'

}

let activeElements = document.getElementsByClassName('active');

while(activeElements.length > 0){

    activeElements[0].remove();
}