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

document.getElementById('demo').innerHTML =
'make: ' + car.make + '<br>' +
'year: ' + car.year + '<br>' +
'color: ' + car.color + '<br>'

var el = document.getElementById('demo2')
el.innerHTML = 
'name: ' + person.fullName() + '<br>' +
'age: ' + person['age'] + '<br>' +
'id: ' + person['id'] + '<br>'