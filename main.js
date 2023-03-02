"use strict"


// let otherHTML = '<p class="` + thing.id + '">' + 4+6 + '</p>';

//changing from table rows to divs
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class"' + coffee.id + '"></div>';
    html += '<div>' + coffee.name + '</div>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(html);
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

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
var roastSelection = document.querySelector('#roast-selection');
console.log(tbody);
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


function nameScan(x){
    for(var i = coffees.length - 1; i >= 0; i--){
       while(document.getElementById('name-selection').addEventListener() )
    }
}



// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#name-selection');


// submitButton.addEventListener('click', updateCoffees);

// function for scanning through roast selection and displaying it on left hand side of screen
// function roastSelection(x) {
//     for(var i = 0; i < coffees.roast[1]; i++) {
//         if( i == 'l') {
//             // var col3 = document.querySelector('.col-3');
//             // col3.innerHTML="Light City";
//         }
//         else if(i == 'm') {
//             // insert dom event
//         }
//         else if(i == 'd') {
//             // insert dom event
//         }
//         else(i == undefined);{
//             // insert dom event
//         }
//     }
// }


//code to pull coffee by id

// var light = document.getElementsByTagName('id');
//
// for(var i=0; i< light.length; i++){
//     console.log(light[4])
// }
