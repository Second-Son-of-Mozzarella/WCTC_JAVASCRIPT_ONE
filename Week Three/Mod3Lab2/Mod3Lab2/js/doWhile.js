//Test One
function doWhileTestOne() {

    let text1 = '';
    let i = 0;
 
   
    do{

        i++;    

        text1 = i;
    
    
    }while((confirm('do you want to continue')))

    document.getElementById('doWhileLoopResultOne').innerHTML = text1;

    

}