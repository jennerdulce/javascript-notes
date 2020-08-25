// let log = console.log;

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

var DEFAULT_RATE = 0.1;
let rate = 0.05;

function getRate() {
    // because of hoisting `var rate = ` will not work
    if (!rate) {
        let rate = DEFAULT_RATE;
    }
    return rate;
}
console.log('Your rate is: ', getRate())