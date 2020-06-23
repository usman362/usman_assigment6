// task #1

var firstname = prompt('');
var lastname = prompt('');
var fullname = (firstname + lastname);
alert(fullname);

// task #2

var mobile = prompt('');
alert(mobile.length);

// task #3

var a = prompt('');
var b = a.indexOf('n');
alert(b)

// task #4

var a = prompt('Enter Input');
var b = a.lastIndexOf('l');
alert(b);

// task #5

var a = prompt('');
var b = a.charAt(3);
alert(b)
    // task #6

var firstname = prompt('');
var lastname = prompt();
var fullname = (firstname + lastname);
alert(fullname);

// task #7

var city = 'Hyderabad';
var rec = city.replace('Hyder', 'Islam');
document.writeln('City :' + city + '<br>' + '<br>');

document.writeln('Replace:' + rec)
    // task #8

var message = 'Ali and Sami are best friends. They play cricket and football together';
var rec = message.replace(/and/g, '&');
document.writeln('Message :' + message + '<br>' + '<br>');

document.writeln('Replace:' + rec)

// task #9

var str = '472';
var int = parseInt(str);
document.writeln('Value: ' + str + '<br>');
document.writeln('Type: String' + '<br>')
document.writeln('Value: ' + int + '<br>');
document.writeln('Type: Integar')



// task #10

var user = prompt('');

var upper = user.toUpperCase('');

document.write('User Input: ' + user + '<br>');
document.write('UpperCase: ' + upper)

// task #11


var user = prompt('');

var upper = user.charAt(0).toUpperCase('') + user.substr(1).toLowerCase('');

document.write('User Input: ' + user + '<br>');
document.write('UpperCase: ' + upper)

// task #12   -- -- -- -- -- -- -- -- -- -- -- -- - pending
var user = prompt();

var str = "" + user;

document.write('Number: ' + user + '<br>');
document.write('Result: ' + str)


// task #13

var user = prompt('');


if (user === '!', '@', ',', '.') {
    alert('Invalid User Input');

} else {
    alert('Welcome')
}


// task #14   -- -- -- -- -- -- -- -- -- -- -- -- - pending
var input = prompt('')
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];


for (i = 0; i < arr.length; ++i) {
    if (arr[i] == input) {
        document.write(input + 'is available at index ' + arr.indexOf(input) + ' in our bakery');
        break;

    } else {
        document.write('value not found');
        break;
    }
}

// task #15   -- -- -- -- -- -- -- -- -- -- -- -- - pending
var user = prompt('Enter User Name');
var pass = prompt('Enter Password');
if (pass[0] == 1) {
    alert('Password not begin with number');

} else if (pass[1].substr(1) === Number) {

    alert('Welcom');
} else {
    alert('Not Welcome');
}




// task #16  -- -- -- -- -- -- -- -- -- -- -- -- - pending
var str = 'It iS a 5r&e@@t Day.'
var array = str.split(0 > str.length);
document.write(array + '<br>');


// task #17
var str = prompt('Enter Input');
var res = str.charAt(str.length - 1);
document.write(res)


// task #18
var str = "That the quick brown fox jumps over the lazy dog";

var obj = str.match(/the/g).length;
document.writeln('Text : ' + str + '<br>');
document.write('There are ' + obj + ' Occurence of the word "the"')