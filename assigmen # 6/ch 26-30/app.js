//// Task # 1
var val = prompt('Enter Number');



document.write("Number  : " + val + '<br>');

var round = Math.round(val);
document.write("Round off value : " + round + '<br>');

var floor = Math.floor(val);
document.write("Floor Value : " + floor + '<br>');

var ceil = Math.ceil(val);
document.write("Ceil Value : " + ceil + '<br>');


///// Task # 2

var val = prompt('Enter Number');



document.write("Number  : " + -val + '<br>');

var round = Math.round(-val);
document.write("Round off value : " + round + '<br>');

var floor = Math.floor(-val);
document.write("Floor Value : " + floor + '<br>');

var ceil = Math.ceil(-val);
document.write("Ceil Value : " + ceil + '<br>');


/// Task # 3

var val = prompt('Enter Value');
var abs = Math.abs(val);
document.write('The absolute Value of ' + val + ' is ' + abs)


/// Task # 4

var diceRoll = Math.floor(Math.random() * 6) + 1;
var diceRoll1 = Math.floor(Math.random() * 6) + 1;

document.write('Random dice Value: ' + diceRoll + '<br>')
document.write('Random dice Value: ' + diceRoll1)


//// Task # 5
var heads = 0;
var tails = 0;

function click() {
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        flip("heads");
    } else {
        flip("tails");
    }
};

function flip(coin) {
    document.write('You got : ' + coin);
};

click();


///// Task # 6

var num = Math.floor((Math.random() * 100) + 1);
document.write('Random Number Between 1 and 100 :' + num);


//// Task # 8

var num = Math.ceil(Math.random() * 10);
document.write(num);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    document.write('Matched');
else
    document.write('Not matched, the number was ' + gnum);