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
//sort coffee in ascending order
let sortedCoffee = coffees.sort();

//reference
let input= document.getElementById('input');

//function on key up
input.addEventListener("keyup", (e) =>{
    //loop through above array
    for(let i of sortedCoffee)
        //convert input to lowercase and compate with each string
        if(
            i.toLowerCase().startsWith(input.value.toLowerCase())&&
            input.value != ""
        ){
            //li elements
            let listItem= document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('"+ i +"')");
            //display matched part in bold
            let word= "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //display value in array
            listItem.innerHTML= word;
            document.querySelector(".list").appendChild(listItem);
        }
});
function displayCoffees(value){
    input.value=value
}
function removeElemens(){
    //clear item
    let items= document.querySelectorAll(".list-items");
    items.forEach((item)=> {
        item.remove();
    });
}



var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
console.log(tbody);
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//event to connect input field to function that listens for changes in text
var popCoffee = document.getElementById('name-selection')
//function that is being used in part with listener event
function nameScan(coffees){
    for(var i = coffees.length - 1; i >= 0; i--){
       while(popCoffee) {
            var x = "is this working";
       }
    }
    return x;
}
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
