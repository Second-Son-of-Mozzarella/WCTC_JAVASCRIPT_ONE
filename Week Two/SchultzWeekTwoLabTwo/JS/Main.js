

let pets = [];

function Pet(name, birthday)
{

    this.name = name,
    this.birthday = birthday,
    this.alertDeleted = function(){
        alert("Pet " + this.name + ' has been deleted')
    }

}


function addPet()
{
     //Get the values from the input

    let petName = document.getElementById('petName').value;
    let petBirthday = document.getElementById('petbirthday').valueAsDate;

    //Create a pet object and add it to the pet history

    let myPet = new Pet(petName, petBirthday);

    pets.push(myPet);

    //Create new elements in JavaScript

    let petElement = document.createElement('div');

    let petNameElement = document.createElement('p');

    let petBirthdayElement = document.createElement('p');

    //add and onclick event
    petElement.onclick = function()
    {

        this.remove();
        myPet.alertDeleted();

    }

    //add classes to our elements

    petElement.classList.add('pet');

    petNameElement.classList.add('pet-name');

    petBirthdayElement.classList.add('pet-birthday');

    //add content to my element

    petNameElement.textContent = myPet.name;

    petBirthdayElement.textContent = myPet.birthday.toDateString();

    //name and b-day elements are in petElement

    petElement.appendChild(petNameElement);
    petElement.appendChild(petBirthdayElement);

    document.getElementById('pets').appendChild(petElement);

    console.log(petElement);

    
    document.getElementById('petForm').reset();
}