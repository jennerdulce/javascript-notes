var cars = ['honda', 'toyota', 'BMW', 'ford']

function basicList(number) {
    document.getElementById('demo1').innerHTML =
    '<b>Accessing arrays: </b>' + '<br>' +
    cars[number]
}
basicList(2)


function changeList(variable) {
    cars[0] = variable
    document.getElementById('demo2').innerHTML = 
    '<b>changing arrays: </b>' + '<br>' +
    cars[0]
}

changeList('LAMBO')


document.getElementById('demo3').innerHTML = 
'<b>display whole array: </b>' + '<br>' + cars


// ===========================================

// looping through an array

var colors, text, colorLength, i;
colors = ['blue', 'red', 'green', 'grey', 'white', 'black', 'teal'];
colorLength = colors.length;
text = '<ul style="list-style-type: none;">';

for (i = 0; i < colorLength; i++) {
    text += '<li>' + colors[i] + '</li>';
}
text += '</ul>'
document.getElementById('demo4').innerHTML =
'<b>Looping through an array: </b><br>' + text;


// ===========================================

// forEach()
var fruits, txt;

fruits = ['apple', 'orange', 'berry', 'mango', 'pineapple']
txt = '<ul>';
fruits.forEach(displayList);
txt += '</ul>';

document.getElementById('demo5').innerHTML = 
'<b>forEach through a list: </b><br>' + txt;

function displayList(value) {
    txt += '<li>' + value + '</li>'
}

// ===========================================

// adding array elements using push()

var animals = ['cat', 'dog', 'monkey', 'tiger', 'bear', 'fish'];
animals.push("turtle"); // adds to the end of the list

document.getElementById('demo6').innerHTML = 
'<b>adding elements to an array: </b><br>' + 
// animals[animals.length - 1] + '<br>' +
animals;

function addingArray() {
    animals.push('giraffe'); // adds giraffe
    animals[animals.length] = 'zebra'; // adds zebra
    document.getElementById('demo6').innerHTML = 
    '<b>adding elements to an array: </b><br>' + animals;
    
}


// ===========================================

// converting arrays to strings

let newColors = ['blue', 'purple', 'red', 'green', 'orange', 'yellow'];

function makeString() {
    let colorToString = newColors.toString();

    document.getElementById('demo7').innerHTML =
    '<b>====Array To String====</b><br>' +
    '<b>array newColors: </b>' + newColors + '<br>' +
    '<b>typeof newColors: </b>' + typeof newColors + '<br>' +
    '<b>length of newColors array: </b>' + newColors.length + '<br>' +
    '<b>==== Executed colors.toString()======</b>' + '<br>' +
    '<b>colorToString: : </b>' + colorToString + '<br>' +
    '<b>typeof colorToString: </b>' + typeof colorToString + '<br>' +
    '<b>length of colorToString: </b>' + colorToString.length + '<br>' ;
}
makeString()

function executeJoinArray() {
    let joinArray = newColors.join(' ');
    document.getElementById('demo8').innerHTML =
    '<b> using .join(): </b>' + joinArray + '<br>' +
    '<b>typeof joinArray: </b>' + typeof joinArray + '<br>' +
    '<b>length of joinArray array: </b>' + joinArray.length ;
}

executeJoinArray()

document.getElementById('demo9').innerHTML =
'<b>Original list: </b>' + newColors;

function spliceArray(num1, num2) {
    var removedElements = newColors.splice(num1, num2);
    document.getElementById('demo10').innerHTML =
    '<b>New list: </b>' + newColors + '<br>' +
    '<b>Removed items: <b>' + removedElements;
}

spliceArray(2, 1) // removes red
spliceArray(3, 2) // removes orange and yellow