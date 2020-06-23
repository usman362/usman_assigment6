// Task # 1
// var rightNow = new Date();
// var dateString = rightNow.toString();
// alert(dateString)

//Task # 2

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// alert('Current Month: ' + n)

//Task # 3
// var day = new Array();
// day[0] = "Sun";
// day[1] = "Mon";
// day[2] = "Tue";
// day[3] = "Wed";
// day[4] = "Thu";
// day[5] = "Fri";
// day[6] = "Sat";



// var d = new Date();
// var n = day[d.getDay()];

// alert('Today is ' + n)

//Task # 4

// var day = new Array();
// day[0] = "Sun";
// day[1] = "Mon";
// day[2] = "Tue";
// day[3] = "Wed";
// day[4] = "Thu";
// day[5] = "Fri";
// day[6] = "Sat";

// var d = new Date();
// var n = day[d.getDay()];
// if (n == day[0] || n == day[6]) {
//     alert('Today is Funday')
// } else {
//     alert('Today is not Funday')
// }


//Task # 5

// var date = new Array();
// date[0]
// date[1]
// date[2]
// date[3]
// date[4]
// date[5]
// date[6]
// date[7]
// date[8]
// date[9]
// date[10]
// date[11]
// date[12]
// date[13]
// date[14]
// date[15]
// date[16]
// date[17]
// date[18]
// date[19]
// date[20]
// date[21]
// date[22]
// date[23]
// date[24]
// date[25]
// date[26]
// date[27]
// date[28]
// date[29]

// var d = new Date();
// var n = date[d.getDay()];
// if (n < d[15]) {
//     alert('First Fifteen Number of the Month')
// } else {
//     alert('Last Fifteen Number of the Month')
// }

// Task # 6

// var rightnow = new Date();
// var currentdate = rightnow.toString();
// document.write('Current Date: ' + currentdate + '<br>');

// var d = new Date();
// var millisec = d.getTime();
// document.write('Eplased Milliseconds since January 1,1970: ' + millisec + '<br>')

// var f = new Date();
// var millisec = f.getTime();
// var min = Math.floor((millisec / 1000 / 60) << 0)
// document.write('Eplased Minutes since January 1,1970: ' + min)


// Task # 7
// var d = new Date();
// var time = d.getHours();
// if (time < 12) {
//     alert('Its AM')
// } else {
//     alert('Its PM')
// }

// Task # 8
// var date = new Date();
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 7, 0);
// document.write("<br>" + 'Later Due: ' + lastDay);

//Task # 9 

// var date1 = new Date("06/18/2015");
// var date2 = new Date();

// var Difference_In_Time = date2.getTime() - date1.getTime();       

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


// document.write(date1 + "<br>  <br>" +
//     date2 + " <br> <br> " +
//     Difference_In_Days.toFixed(0) + " days have passed Since 1st Ramzan, 2015")



//Task # 10
var date1 = new Date();
var date2 = new Date("06/23/2020 19:12:00");

var Difference_In_Time = date1.getSeconds() - date2.getSeconds();

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


document.write(date1 + "<br>  <br>" +
    date2 + " <br> <br> " +
    Difference_In_Days + " days have passed Since 1st Ramzan, 2015")