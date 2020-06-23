// Task #1

function time() {
    var time = new Date();
    document.write(time);
}
time();


// Task # 2

function greet() {
    var fname = prompt('Enter First Name');
    var lname = prompt('Enter Last Name');
    var fullname = fname + lname;
    document.write('<br>' + 'Full Name: ' + fullname)
}
greet();

//Task # 3

function sum() {
    var sum1 = prompt('Enter Value 1');
    var sum2 = prompt('Enter Value 2');
    var total = parseInt(sum1) + parseInt(sum2);
    document.write(total)
}
sum();

// Task # 4

function calculator() {
    var val1 = prompt('Enter Value 1');
    var val2 = prompt('Enter Value 2');
    var opt = prompt('Select Operator')

    if (opt === '+') {
        document.write(parseInt(val1) + parseInt(val2));
    } else if (opt === '-') {
        document.write(parseInt(val1) - parseInt(val2));
    } else if (opt === '*') {
        document.write(parseInt(val1) * parseInt(val2));
    } else if (opt === '/') {
        document.write(parseInt(val1) / parseInt(val2));
    } else {
        alert('Enter Valid Value or Operator')
    }
}

calculator();


// Task # 5

function square() {
    var val1 = prompt('Enter Value');
    document.write(parseInt(val1) * parseInt(val1));
}
square();


// Task # 6
var val1 = prompt('Enter Value');

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
document.write(factorial(parseInt(val1)));
factorial(x);


// Task # 7
function start() {
    var val1 = prompt('Enter Start Number');
    var val2 = prompt('Enter End Number');
    for (var i = val1; i <= val2; i++) {
        document.write(i + "<br>");
    }


}
start();


// Task # 9
var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");

function area(length, width) {
    return length * width;
}

function perimeter(length, width) {
    return 2 * (length + width);
}

document.writeln('The area of your rectangle is ' + area(length, width));
document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


// Task # 10

var val = prompt('Enter Name');

function check_Palindrome(str_entry) {


    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;

    if (cstr === "") {
        document.write("Nothing found!");
        return false;
    }

    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {

        if (cstr.length === 1) {
            document.write("Entry is a palindrome.");
            return true;
        } else {

            ccount = (cstr.length - 1) / 2;
        }
    }

    for (var x = 0; x < ccount; x++) {

        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            document.write("Entry is not a palindrome.");
            return false;
        }
    }
    document.write("The entry is a palindrome.");
    return true;
}
check_Palindrome(val);

// Task # 11

var val1 = prompt('Enter Any Word or Sentence');

function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
document.write(uppercase(val1));


/// Task # 12

var val1 = prompt('Enter Sentence')

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
document.write(find_longest_word(val1));


///// Task # 13

var val1 = prompt('Enter String');
var val2 = prompt('Enter Letter');

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

document.write(char_count(val1, val2));