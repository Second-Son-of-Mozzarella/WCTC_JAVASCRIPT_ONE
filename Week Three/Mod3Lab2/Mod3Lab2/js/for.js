//Test One
let text1 = '';
for(let forLoopOne = 0; forLoopOne < 10; forLoopOne++ ){
    
    text1 += forLoopOne + ' ';
    document.getElementById('forLoopResultOne').innerHTML = text1;

}



//Test Two

let text2 = '';
function testTwo() {

    document.getElementById('forLoopResultTwo').innerHTML = '';

    let amountListedOne = Number(document.getElementById('forLoopTwoInput').value);

    for(let forLoopTwo = 0; forLoopTwo < amountListedOne; forLoopTwo++ ){
        
    text2 += forLoopTwo + ' ';
    document.getElementById('forLoopResultTwo').innerHTML = text2;

    }
    

}


//Test Three 

let text3 = '';
function testThree() {

    
    document.getElementById('forLoopResultThree').innerHTML = '';

    let amountListedTwo = Number(document.getElementById('forLoopThreeTopInput').value);
    let StartingNumbOne = Number(document.getElementById('forLoopThreeBaseInput').value);

    for(let forLoopThree = StartingNumbOne; forLoopThree < amountListedTwo; forLoopThree++ ){
        
    text3 += forLoopThree + ' ';
    document.getElementById('forLoopResultThree').innerHTML = text3;

    }
    


}

//Test Four 
let text4 = '';
function testFour() {
    document.getElementById('forLoopResultFour').innerHTML = ' ';

    let amountListedThree = Number(document.getElementById('forLoopFourTopInput').value);
    let StartingNumbTwo = Number(document.getElementById('forLoopFourBaseInput').value);
    let IncramentNumbOne = Number(document.getElementById('forLoopFourIncrementerInput').value);

    for(let forLoopFour = StartingNumbTwo; forLoopFour < amountListedThree; forLoopFour += IncramentNumbOne ){
        
        text4 += forLoopFour + ' ';
        document.getElementById('forLoopResultFour').innerHTML = text4;

        console.log(text4);
        
    
        }

}


//Objects and Array used for testing:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let people = [
    new Person('Cindy', 14),
    new Person('John', 24),
    new Person('Shandy', 34),
    new Person('Raul', 44),
    new Person('Hannes', 54),
    new Person('Sonam', 64)
]


//the length property can be used to get the number of items in an array
console.log(people.length);


//Test Five
//you can clear out an element by doing: element.innerHTML = '';
function testFive()
{

    text5 = '';
    for(i = 0; i <= people.length; i++){
    
    text5 += 'person ' + (i + 1) + ': ' + people[i].name + ' ' + people[i].age + '<br>';
    document.getElementById('forLoopResultFive').innerHTML = text5;
    
    
    
    }
}


//Test Six 
//you can clear out an element by doing: element.innerHTML = '';
let text6 = ''
function testSix()
{
    let ageborder = Number(document.getElementById('forLoopSixAge').value)    

    for(i = 0; i <= people.length; i++){
    
    
    
    if(people[i].age > ageborder){
    
        text6 += 'person ' + (i + 1) + ': ' + people[i].name + ' ' + people[i].age + '<br>';
    
        document.getElementById('forLoopResultSix').innerHTML = text6;
    
    }
    else{
        document.getElementById('forLoopResultSix').innerHTML = ' ';

        
    }
    
    }
}