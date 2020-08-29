// let log = console.log;
// let colors = ['blue', 'red', 'green']
// let colorString = colors.toString();
// let str = 'hello there';
// let num = 13;
// let bool = true;
// let obj = {fruit: 'apple'};
// let arr = ['blue', 'green', 'yellow'];
// let today = new Date();
// let dt = Date();
// let f = function() {

// };

// log('\nstr\t\t', typeof str)
// log('\nnum\t\t', typeof num)
// log('\nbool\t\t', typeof bool)
// log('\nobj\t\t', typeof obj)
// log('\narr\t\t', typeof arr)
// log('\ntoday\t\t', typeof today)
// log('\ndt\t\t', typeof dt)
// log('\nNaN\t\t', typeof NaN)
// log('\nundefined\t', typeof undefined)
// log('\nnull\t\t', typeof null)
// log('\nf\t\t', typeof f)


//=============================

// array to string

// let colors = ['blue', 'red', 'green']
// let colorString = colors.toString();

// log('\ncolorString: ', colorString)
// log('arrayString: ', typeof colorString)
// log('length of arrayString: ', colorString.length)
// log('\ncolors: ', colors)
// log('colors: ', typeof colors)
// log('length of colors array: ', colors.length)

// var DEFAULT_RATE = 0.1;
// let rate = 0.05;

// function getRate() {
//     // because of hoisting `var rate = ` will not work
//     if (!rate) {
//         let rate = DEFAULT_RATE;
//     }
//     return rate;
// }
// console.log('Your rate is: ', getRate())


// ===================================

// string to array

let log = console.log;
let colors = 'i like the color blue';
let colorArray = colors.split(' ');

log('\ncolorArray: ', colorArray)
log('typeof colorArray: ', typeof colorArray)
log('length of colorArray: ', colorArray.length)
log('\ncolors: ', colors)
log('colors: ', typeof colors)
log('length of colors array: ', colors.length)