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
'<b>Looping through a list: </b><br>' + text;


// ===========================================

// forEach()
var fruits = ['apple', 'orange', 'berry', 'mango', 'pineapple']
txt = '<ul>';
fruits.forEach(displayList);
txt += '</ul>';

document.getElementById('demo5').innerHTML = 
'<b>forEach through a list: </b><br>' + txt;

function displayList(value) {
    txt += '<li>' + value + '</li>'
}
