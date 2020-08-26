// function helloThere() {
//     document.getElementById('blank').innerHTML = 'Yo hey whats up:),'
// }

// function goodbyeThere() {
//     document.getElementById('blank').innerHTML = 'Oh goodbye, it was nice meeting you. call me sometime baby,'
// }

// function alertUser() {
//     window.alert("ALERT!! YOU AREN'T SUPPOSED TO PRESS THIS BUTTON")

// }

// function hateYou() {
//     document.getElementById('word').innerHTML =
//     'I hate you so much.'
// }

// function resetButton() {
//     document.getElementById('blank').innerHTML =
//     '_____ ,'
//     document.getElementById('word').innerHTML =
//     '_____'
// }

// var age = 27;
// var person = 'Jenner Dulce'
// var hobby = 'surfing'

// document.getElementById('demo').innerHTML =
// 'hi my name is ' +  name + ' i am ' + age + ' years old. my favorite hobby is ' + hobby;

var listA = ['there', 'hello', 'lucky', 'star', 'lucky', 'tree', 'blue', 'red', 'lucky']
var counter = []
var x = listA.indexOf('lucky')
console.log(x)


for (var i = 0; i < listA; i++) {
    if (i == 'lucky') {
        console.log(i)
    }
}