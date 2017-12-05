//This is where we ill write all of our functions


function randomGreetings() {
    var greetings = ['Hola', 'Здравствуйте', 'Hallo', 'Zdravo', 'Bonjour', 'नमस्ते'];
    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return randomGreeting;
}

function dateMessage() {
    var today = new Date();
    var day = today.getDay();
    var daynumber = today.getDate();
    var month = today.getMonth();
    var dayname = "";
    if (day == 0) {
        dayname = "Sunday";
    } else if (day == 1) {
        dayname = "Monday";
    } else if (day == 2) {
        dayname = "Tuesday";
    } else if (day == 3) {
        dayname = "Wednesday";
    } else if (day == 4) {
        dayname = "Thursday";
    } else if (day == 5) {
        dayname = "Friday";
    } else if (day == 6) {
        dayname = "Saturday";
    }
    var end = "";
    if (daynumber == 1 & 21 & 31) {
        end = "st";
    } else if (daynumber == 2 & 22) {
        end = "nd";
    } else if (daynumber == 3 & 23) {
        end = "rd";
    } else {
        end = "th";
    }
    var monthname = "";
    if (month == 0) {
        monthname = "January";
    } else if (month == 1) {
        monthname = "February";
    } else if (month == 2) {
        monthname = "March";
    } else if (month == 3) {
        monthname = "April";
    } else if (month == 4) {
        monthname = "May";
    } else if (month == 5) {
        monthname = "June";
    } else if (month == 6) {
        monthname = "July";
    } else if (month == 7) {
        monthname = "August";
    } else if (month == 8) {
        monthname = "September";
    } else if (month == 9) {
        monthname = "October";
    } else if (month == 10) {
        monthname = "November";
    } else if (month = 11) {
        monthname = "December";
    }
    return ("Today is " + dayname + ", " + monthname + " " + daynumber + end + ".");
}

function birthdayCountDown(date) {
    var today = new Date();
    var birthday = new Date(date);
    var nextBday = new Date(date);

    nextBday.setFullYear((today.getFullYear() - birthday.getFullYear()) + 2000);
    var timeUntilBday = today - nextBday;


    if (timeUntilBday > 0) {
        nextBday.setFullYear((today.getFullYear() - birthday.getFullYear()) + 2001);
    } else {

    }

    var bDays = (today.getTime() - nextBday.getTime()) / -86400000;
    var bHours = (bDays - Math.floor(bDays)) * 24;
    var bMinutes = (bHours - Math.floor(bHours)) * 60;

    return ("There are " + Math.floor(bDays) + " days, " + Math.floor(bHours) + " hours, and " + Math.floor(bMinutes) + " minutes until my next birthday!");
}
