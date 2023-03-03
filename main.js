"use strict"


// let otherHTML = '<p class="` + thing.id + '">' + 4+6 + '</p>';

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

// this function loops through to build the LIST of coffees
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// *************************TESTING-TESTING-TESTING*********************************

// adding a new coffee

function newCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log("preventDefault working");
    var addCoffee = coffeeAdded.value; //connect to input
    console.log("addCoffee working");
    var newCoffeeArr = [];
    console.log("newCoffeeArr" + newCoffeeArr);
    coffees.forEach(function(coffee) {
            if (coffee.name.toLowerCase() !== addCoffee.toLowerCase()) {
                console.log("else if working");
                newCoffeeArr.push(addCoffee);
            }
    });
    tbody.innerHTML = renderCoffees(newCoffeeArr);
}
var coffeeAdded = document.querySelector('#new-coffee')
coffeeAdded.addEventListener('input', newCoffees);



// *************************TESTING-TESTING-TESTING*********************************

// this function updates the coffee by roast selection and is tied to the top-dropdown menu
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffees);

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
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);

// filtering coffee name selections and creating output on menu
const searchInput = document.querySelector('#name-selection');
const coffeeList = document.querySelector('#coffees');

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
        const li = document.createElement('p');
        li.textContent = coffee.name;
        coffeeList.appendChild(li);
    });
}

// Listen for input events on the search field
searchInput.addEventListener('input', displayCoffees);
