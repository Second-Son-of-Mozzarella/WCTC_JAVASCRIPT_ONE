//Test One



function whileTestOne() {

    let text1 = '';
    let i = 0;
 
   
    while(confirm('do you want to continue')){

        i++;    

        text1 = i;


        document.getElementById('whileLoopResultOne').innerHTML = text1;  
    
    }

    

}

//Test Two
function whileTestTwo() {
    let text1 = '';
    let i = 0;

    let whileParTwo = Number(document.getElementById('whileLoopTwoCount').value)

    while(i < whileParTwo){

        i++;
        text1 += ' ' + i;
        document.getElementById('whileLoopResultTwo').innerHTML = text1;  

    }

}

