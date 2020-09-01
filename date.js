var today = new Date()
var year = today.getFullYear();
var est = new Date('Apr 16, 1996');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);
document.getElementById('demo1').innerHTML =
Math.floor(difference) + ' years of online travel advice'

document.getElementById('demo2').textContent = 
'&copy; ' + year

var hotel = {
    name: 'Dulce Sweets Hotel',
    price: 240,
    discount: 15,

    offerPrice: function() {
        var offerRate = this.price * ((100 - this.discount) / 100);
        return offerRate;
    }
}

// var hotelName, hotelPrice, hotelDiscount;

document.getElementById('demo3').innerHTML = 
hotel.name

document.getElementById('demo4').innerHTML = 
'hotel price: $<del>' + hotel.price + '</del>'

document.getElementById('demo5').innerHTML = 
'$' + hotel.offerPrice()


var expirtyMsg;
var today;

function offerExpires(today) {
    // declare variables
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    var dayValue, monthValue
    
    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayValue = weekFromToday.getDay()
    monthValue = weekFromToday.getMonth()
    // create array for days and months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    monthNames = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // collect parts of date to show on the page
    day = dayNames[weekFromToday.getDay()];
    month = monthNames[weekFromToday.getMonth()];
    date = weekFromToday.getDate();
    year = weekFromToday.getFullYear();
    // create message
    document.getElementById('demo6').innerHTML = 
    'expiry date: ' + day + '<br>' +
    date + month + year + '<br>' +
    dayValue + '<br>' + 
    monthValue + date + year + '<br>' + weekFromToday;

}

today = new Date()
offerExpires(today)