"use strict"


// let otherHTML = '<p class="` + thing.id + '">' + 4+6 + '</p>';

//changing from table rows to divs
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<span class"' + coffee.id + '"></span>';
    html += '<text class="text-#9b4c38">' + coffee.name + " " + '</text>';
    html += '<text class="text-black">' + coffee.roast + '</text>';
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
// //sort coffee in ascending order
// let sortedCoffee = coffees.sort();
//
// //reference
// let input= document.getElementById('input');
//
// //function on key up
// input.addEventListener("keyup", (e) =>{
//     //loop through above array
//     for(let i of sortedCoffee)
//         //convert input to lowercase and compate with each string
//         if(
//             i.toLowerCase().startsWith(input.value.toLowerCase())&&
//             input.value != ""
//         ){
//             //li elements
//             let listItem= document.createElement("li");
//             listItem.classList.add("coffees");
//             listItem.style.cursor = "pointer";
//             listItem.setAttribute("onclick", "displayNames('"+ i +"')");
//             //display matched part in bold
//             let word= "<b>" + i.substr(0, input.value.length) + "</b>";
//             word += i.substr(input.value.length);
//             //display value in array
//             listItem.innerHTML= word;
//             document.querySelector(".list").appendChild(listItem);
//         }
// });
// function displayCoffees(value){
//     input.value=value
// }
// function removeElemens(){
//     //clear item
//     let items= document.querySelectorAll(".coffees");
//     items.forEach((item)=> {
//         item.remove();
//     });
// }

// //testing-testing-testing-testing-testing-testing-testing-testing-
// var search_terms = coffees
//
// function autocompleteMatch(input) {
//     if (input == '') {
//         return [];
//     }
//     var reg = new RegExp(input)
//     return search_terms.filter(function(term) {
//         if (term.match(reg)) {
//             return term;
//         }
//     });
// }
//
// function showResults(val) {
//     res = document.getElementById("result");
//     res.innerHTML = '';
//     let list = '';
//     let terms = autocompleteMatch(val);
//     for (i=0; i<terms.length; i++) {
//         list += '<li>' + terms[i] + '</li>';
//     }
//     res.innerHTML = '<ul>' + list + '</ul>';
// }



var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
console.log(tbody);
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);


// function that is being used in part with listener event
// function nameScan(coffees){
//     //event to connect input field to function that listens for changes in text
//     var popCoffee = document.getElementById('name-selection').addEventListener('input',)
//     // array to store keystroke events
//     var coffeeArr = [];
//     // loop for storing each key stroke
//     for(var i = coffees.length - 1; i >= 0; i--){
//        while(popCoffee !== null) {
//             coffeeArr +=
//             // conditionals for comparing stored keystrokes with coffees present
//                 coffees.name[i];
//        }
//     }
//     return coffeeArr;
// }


const searchInput = document.querySelector('#name-selection');
const coffeeList = document.querySelector('#coffees');

function displayCoffees() {
    // Clear the coffee list
    coffeeList.innerHTML = '';

    // Get the user's search input
    const searchValue = searchInput.value.toLowerCase();

    // Filter the coffees based on the search input
    const filteredCoffees = coffees.filter(coffee => {
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




// ***currently working on function nameScan ability to pull coffee names when coffee name is typed into input field


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
