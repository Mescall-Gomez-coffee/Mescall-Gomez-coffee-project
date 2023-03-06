"use strict"

//changing from table rows to divs
// this function builds the INDIVIDUAL coffees
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<span class"' + coffee.id + '"></span>';
    html += '<text class="coffeeName text-#9b4c38">' + coffee.name + " " + '</text>';
    html += '<text class="coffeeFlavor text-black">' + coffee.roast + '</text>';
    html += '</div>';

    return html;
}

// this function loops through to build the ARRAY LIST of coffees
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// *************************************************************************************

// this function updates the coffee by roast selection and is tied to the top-dropdown menu
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
            filteredCoffees.push(coffee);
        }
        else if(selectedRoast.toLowerCase() === 'all') {
            console.log("else if working");
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffees);
// *************************************************************************************

// These guys belong to the displayCoffee function
const searchInput = document.querySelector('#name-selection');
const coffeeList = document.querySelector('#coffees');

// This function allows us to search for coffees by name in the search bar
function displayCoffees() {
    // Clear the coffee list
    coffeeList.innerHTML = '';

    // Get the user's search input
    const searchValue = searchInput.value.toLowerCase();

    // Filter the coffees based on the search input
    let filteredCoffees = coffees.filter(coffee => {
        return coffee.name.toLowerCase().includes(searchValue);
    });

    // Display the filtered coffees
    filteredCoffees.forEach(coffee => {
        //creating elements within tag
        const coffeeSearch = document.createElement('p');
        coffeeSearch.textContent = coffee.name + " " + coffee.roast;
        coffeeList.append(coffeeSearch);
    });
}

// Listen for input events on the search field
searchInput.addEventListener('input', displayCoffees);

// function buttonControl1() {
//     var butPush1 = document.querySelector('#button-1')
//     butPush1.addEventListener('click', displayCoffees);
// }
// *************************************************************************************

// this function allows us to add a new coffee while also adding in the roast
function newCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var addCoffee = coffeeAdded.value; //connect to input
    var addRoast = roastAdded.value;
    var newCoffeeArr = coffees;
    coffees.every(function(coffee) {
        if (addCoffee.toLowerCase() !== coffee.name.toLowerCase()) {
            var addCoffeeObj = {id: coffees.length+1, name: addCoffee, roast: addRoast};
            newCoffeeArr.push(addCoffeeObj);

        }
    });
    tbody.innerHTML = renderCoffees(newCoffeeArr);
}
// these guys listen to new coffee input and activate the buttonControl function
var coffeeAdded = document.querySelector('#new-coffee')
coffeeAdded.addEventListener('input', buttonControl2);

// these guys listen to roast options for adding coffee
var roastAdded = document.querySelector('#butDrop')
roastAdded.addEventListener('click', buttonControl2);

// this function controls the newCoffees function by the click of a button
function buttonControl2() {
    var butPush2 = document.querySelector('#button-2')
    butPush2.addEventListener('click', newCoffees);
}
// *************************************************************************************




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Vietnamese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);







