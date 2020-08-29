// slice()
var slicing = function(num1, num2) {
    var alter = str.slice(num1, num2);
    document.getElementById('demo1').innerHTML = 
    '<b>slicing example:</b> ' + alter;
}
var str = "red, blue, green, red, orange, yellow, red";
slicing(5)
// slicing(5, 9)
// slicing(-5)

// ====================================================

// replace()

var str2 = "red, blue, green, red, orange, yellow, red";

function replacing() {
    // var x = str2.replace('red', 'WHITE') // replaces only first match

    // var x = str2.replace(/RED/i, 'WHITE'); // makes insensitive

    // var x = str2.replace(/red/g, 'wWHITE'); // replaces all matches

    var x = str2.replace(/red/gi, 'WHITE'); // replaces all matches AND insensitive
    
    document.getElementById('demo2').innerHTML =
    '<b>replacing string contents:</b> ' + x;
}

replacing()



// ====================================================

// toUpperCase() & toLowerCase()


function makeUpper(sentence) {
    text1 = sentence.toUpperCase();
    document.getElementById('demo3').innerHTML =
    '<b>make upper case:</b> ' + text1;
}
makeUpper('make this sentence upper case!')

function makeLower(sentence) {
    text1 = sentence.toLowerCase();
    document.getElementById('demo4').innerHTML =
    '<b> make lower case: </b>' + text1;
}
makeLower('THIS SENTENCE IS ORIGINALLY IN ALL CAPS')


// ====================================================

//convert string to array

let colors = 'i like the color blue';

function splitString() {
    let colorArray = colors.split(' ');

    document.getElementById('demo5').innerHTML =
    '<b>====String to Array====</b><br>' +
    '<b>string colors: </b>' + colors + '<br>' +
    '<b>typeof colors: </b>' + typeof colors + '<br>' +
    '<b>length of colors array: </b>' + colors.length + '<br>' +
    '<b>==== Executed colors.split(" ")=====</b>' + '<br>' +
    '<b>colorArray: : </b>' + colorArray + '<br>' +
    '<b>typeof colorArray: </b>' + typeof colorArray + '<br>' +
    '<b>length of colorArray: </b>' + colorArray.length + '<br>' ;
    

}
splitString()

