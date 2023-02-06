//oddEven

function oddEven(){
    let oddEvenValue = document.getElementById('oddEven').value;

        if((oddEvenValue % 2) == 0)
    {

        document.getElementById('oddEven').style.backgroundColor = 'green';

    }
         else
    {

        document.getElementById('oddEven').style.backgroundColor = 'red';

    }

}

//comfirm

function confirmation(){

    if(confirm('Confirm?')){

        document.getElementById('confirmResualt').textContent = 'confirmed';


    }else{

        document.getElementById('confirmResualt').textContent = 'unconfirmed';

    }

}


// AM or PM widget

function AMPM(element)
{

    let currentTime = new Date();

    if((currentTime.getHours() ) >= 12){

        element.textContent = 'Currently PM'

        console.log('Currently PM')

    }else{

        element.textContent = 'Currently AM'

        console.log('Currently AM')

    }


}


//check logical add

function checkLogicalAnd()
{

    let outputElement = document.getElementById('logicalAndResults');

    let valueOne = document.getElementById('LogicalAndValueOneTrue').checked;

    let valueTwo = document.getElementById('LogicalAndValueTwoTrue').checked;

    if(valueOne && valueTwo){

        outputElement.textContent = valueOne + ' and ' + valueTwo + ' is True';
    }else{

        outputElement.textContent = valueOne + ' and ' + valueTwo + ' is False';

    }


}


// check logical or
function checkLogicalOr()
{

    let outputElement = document.getElementById('logicalTwoResults');

    let valueOne = document.getElementById('LogicalOrValueOneTrue').checked;

    let valueTwo = document.getElementById('LogicalOrValueTwoTrue').checked;

    if(valueOne || valueTwo){

        outputElement.textContent = valueOne + ' and ' + valueTwo + ' is True';
    }else{

        outputElement.textContent = valueOne + ' and ' + valueTwo + ' is False';

    }


}

// truthy false letter

function textTuthyandFalsy()
{
    let testTruthy = document.getElementById('textTruthyFalsy').value;

    if(testTruthy){

        document.getElementById('textTruthyFalsy').style.backgroundColor = 'green';

    }else{

        document.getElementById('textTruthyFalsy').style.backgroundColor = 'red';


    }


}


function numbTuthyandFalsy()
{
    let numbTruthy = Boolean(document.getElementById('numbTruthyFalsy').value);

    if(numbTruthy){

        document.getElementById('numbTruthyFalsy').style.backgroundColor = 'green';

    }else{

        document.getElementById('numbTruthyFalsy').style.backgroundColor = 'red';


    }


}

//select statment

function selectStatment() {

    let selectStatmentValue = document.getElementById('selectStatmentvalue').value;
    let selectStatmentOutPut = document.getElementById('selectStatment').value;

    switch(selectStatmentOutPut){
        case 'alert':
            alert(selectStatmentValue);
        break;
        case 'log':
            console.log(selectStatmentValue);
        break;
        case 'textContent':
            document.getElementById('selectStatmentOutPut').textContent = selectStatmentValue;
        break;
    }

}
