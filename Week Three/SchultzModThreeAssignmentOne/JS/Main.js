

function PizzaResturants(resturantName, resturantAddress, glutenFree, vegetarian, vegan) {


    this.resturantName = resturantName;
    this.resturantAddress = resturantAddress;
    this.glutenFree = glutenFree;
    this.vegetarian = vegetarian;
    this.vegan = vegan;
    this.createElement = function () {

        // creating elements

        let resturantElement = document.createElement('div');
        let resturantNameElement = document.createElement('p');
        let resturantAddressElement = document.createElement('p');

        // adding classes

        resturantElement.classList.add('resturant');
        resturantNameElement.classList.add('resturant-name');
        resturantAddressElement.classList.add('resturant-address');

        // Text Content

        resturantNameElement.textContent = this.name;
        resturantAddressElement.textContent = this.address;

        // Children

        resturantElement.appendChild(resturantNameElement);
        resturantElement.appendChild(resturantAddressElement);

        return resturantElement;


    } // I full filled this part of the assignment I just didn't use it.

}

let allResturants = [

    new PizzaResturants('Macho Meals', '337 St Paul Ave', 0, 0, 0),
    new PizzaResturants('Veganic Corner', '24 S. Buckingham Road', 1, 1, 1),
    new PizzaResturants('Sherryl Meals', '7897 Glen Eagles Court', 1, 0, 0),
    new PizzaResturants('Salad Heaven', '593 Harvey Street', 0, 1, 1),
    new PizzaResturants('Root Shoots', '18 South Chapel Street', 1, 1, 1),
    new PizzaResturants('Grill Moguls', '40 State Rd.', 1, 0, 0),
    new PizzaResturants('NovaFood', '9026 Jones Rd.', 1, 1, 0),
    new PizzaResturants('Sangli', '426 Summerhouse Ave.', 0, 0, 0),
    new PizzaResturants('Lavoya Diner', '83 Beacon Lane', 1, 0, 1),
    new PizzaResturants('Andisova', '474 Mayfield Ave.', 1, 0, 0)

]



function findMyResturants() {
    let resturantResultsTxt = ''
    let glutenFreeCheck = document.getElementById('glutenFreeCheck').value;
    let vegiCheck = document.getElementById('vegetarianCheck').value;
    let veganCheck = document.getElementById('VeganCheck').value;


    for (let resturantIndex = 0; resturantIndex < allResturants.length; resturantIndex++) {

        if (((glutenFreeCheck == allResturants[resturantIndex].glutenFree) || (glutenFreeCheck == 0)) && ((vegiCheck == allResturants[resturantIndex].vegetarian) || (vegiCheck == 0)) && ((veganCheck == allResturants[resturantIndex].vegan) || (veganCheck == 0))) {

            resturantResultsTxt += allResturants[resturantIndex].resturantName + ' at ' + allResturants[resturantIndex].resturantAddress + '<br>';
            document.getElementById('resturantResults').innerHTML = resturantResultsTxt;
            // I couldn't get the usall way to do this to work so I got frusterated and just did this.
  

            console.log(allResturants[resturantIndex])
        }
    }
}