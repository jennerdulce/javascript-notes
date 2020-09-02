// looping through a list

var colors = ['blue', 'red', 'green', 'yellow', 'orange', 'black', 'white', 'magenta'];
var text = '';

function loopColors(x) {
    var i;
    for (i = 0; i < x.length; i ++) {
        text += x[i] + '<br>';
    }
    return text.toUpperCase()
}

document.getElementById('demo1').innerHTML = 
loopColors(colors)


// ========================================

// basic if comparison

var statement;

function evaluateTest(score) {
    if (score > 70) {
        statement = 'nice you passed smarty pants!';
    } else if (score > 50) {
        statement = 'you passed, but barely';
    } else {
        statement = 'you failed, try again'
    }
    return statement;
    
}

document.getElementById('demo2').innerHTML = 
'Basic comparison function/test: <br>' +
'score = 90: ' + evaluateTest(90) + '<br>' + 
'score = 65: ' + evaluateTest(65) + '<br>' + 
'score = 20: ' + evaluateTest(20) + '<br>' ;

// ========================================

// function in if statement


function congradulate() {
    return 'Congradulations!'
}

function evaluateScore(score) {
    var message =''

    if (score > 50) {
        message += congradulate()
        message += 'You have passed!';
    } else {
        message += 'Sorry you have to retake the test'
    }
    return message;
}

document.getElementById('demo3').innerHTML =
evaluateScore(70) + '<br>' +
evaluateScore(30);