var x = '21321'
document.getElementById('demo1').innerHTML =
'<b>Some examples of Number():</b> <br>' +
Number(true) + '<br>' +
Number(' 111999') + '<br>' +
Number('John') + '<br>' + // returns NaN
Number('10,33') + '<br>' + // returns NaN
Number(x)

document.getElementById('demo2').innerHTML = 
'<b>Some examples of parseInt():</b> <br>' +
parseInt('10 20 30') + '<br>' + // returns 10 
parseInt('10.33') + '<br>' + // returns 10
parseInt('10 years') + '<br>' + // returns 10
parseInt('years 10') + '<br>' // returns NaN