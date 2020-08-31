var car = {
    make: 'honda',
    year: '2009',
    color: 'silver'
}

var person = {
    firstName: 'Jenner',
    lastName: 'Dulce', 
    age: '27',
    id: '0684504',
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}


function demoOne() {
    document.getElementById('demo1').innerHTML =
    'make: ' + car.make + '<br>' +
    'year: ' + car.year + '<br>' +
    'color: ' + car.color + '<br>';
}

demoOne()

function demoTwo() {
    var el = document.getElementById('demo2')
    el.innerHTML = 
    'name: ' + person.fullName() + '<br>' +
    'age: ' + person['age'] + '<br>' +
    'id: ' + person['id'] + '<br>';    
}

demoTwo()


// ====================================

// constructor notation

function Vehicle(make, color, year) {
    this.make = make;
    this.color = color;
    this.year = year;
}

const icysCar = new Vehicle('tesla', 'white', 2020);


function demoThree() {
    const myCar = new Vehicle('honda', 'grey', 2009);
    document.getElementById('demo3').innerHTML =
    'Make: ' + myCar.make + '<br>' +
    'Color: ' + myCar.color + '<br>' +
    'Year: ' + myCar.year + '<br>';
}
demoThree()



document.getElementById('demo4').innerHTML =
'Make: ' + icysCar.make + '<br>' +
'Color: ' + icysCar.color + '<br>' +
'Year: ' + icysCar.year + '<br>';

// ====================================

// array INSIDE object

var clothes = {
    colors: ['red', 'green', 'blue'],
    sizes: ['small', 'medium', 'large'],
    material: ['leather', 'cotton', 'mix']
}

document.getElementById('demo5').innerHTML = 
'<b>array INSIDE object</b>' + '<br>' +
clothes.colors + '<br>' +
clothes.colors[1] + '<br>' +
clothes.sizes + '<br>' +
clothes.sizes[2] + '<br>' +
clothes.material + '<br>' +
clothes.material[0] + '<br>';


// ====================================

// object inside array

var costs = [
    {accom: 420, food: 50, phone: 101},
    {accom: 380, food: 100, phone: 80},
    {accom: 360, food: 75, phone: 120},
]

document.getElementById('demo6').innerHTML = 
'<b>OBJECT inside ARRAY</b>' + '<br>' +
'costs[0].food: '+ costs[0].food + '<br>' + 
'costs[1].phone: '+ costs[1].phone + '<br>' + 
'costs[2].accom: '+ costs[2].accom + '<br>' ;



