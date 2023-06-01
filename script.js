// // Chapter 21 (Changing Case)

// // Q 1. Type the characters that are missing from this code.var allLower = userInput.toLowerCase; Note: Correct this statement by yourself.

// var allLower = userInput.toLowerCase();

// // Q 2. Convert the string represented by x to lower-case and assign the result to the same variable.

// var x = "Hello, World!"
// x = x.toLowerCase()
// alert(x)

// // Q 3. Convert the string represented by y to upper-case and assign the result to the same variable.

// var y = "hunain afzal"
// y = y.toUpperCase()
// alert(y)

// // Q 4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
// var upper = "HUNAIN AFZAL ARAIN"
// var lower = upper.toLowerCase()
// alert(lower);

// // Q 5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.


// var array = ['APPLE', 'BANANA', 'ORANGE'];

// var arrayElement = array[1];

// var lowerCaseString = arrayElement.toLowerCase();

// var newVariable = lowerCaseString;

// console.log(newVariable);

// // Q 6. Display in an alert the upper-case version of the string represented by a variable.

// var lower = "upper-case"
// var upper = lower.toUpperCase();
// alert(upper);

// // Q 7. var cityName = “kaRacHi”;Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.

// var cityName = "kaRacHi";
// var Capitalisation = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()
// alert(Capitalisation);

// // Chapter 22 - 25 (Strings)

// // Q 1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

// var sameWords = "captain";
// var sameWordsAfterSlice = sameWords.slice(0 , 1)+sameWords.slice(3)
// alert(sameWordsAfterSlice);

// // Q 2.  The number of characters in the string will be assigned to the variable.

// var myString = "Hello, world!";

// var characterCount = myString.length;

// alert(characterCount);

// // Q 3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.

// var animal = "elephant"
// var seg = animal.slice(2 , 5)
// alert(seg)

// // Q 4. Find the number of characters in the string represented by a variable and assign the number to a second variable.

// var name = "huanin afzal"
// var count = name.length
// alert(count)

// // Q 5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.

// var myString = "hunain afzal arain";

// var characterCount = myString.length;

// var slicedString = myString.slice(1, -3);

// document.write(characterCount + "<br>");
// document.write(slicedString); 

// // Q 6. var text = "To be or not to be.";var indx = text.indexOf("be");What is the value of indx?

// var text = "To be or not to be";
// var indx = text.indexOf("be");
// alert(indx + " is the index no of 'be'");

// // Q 7. var text = "To be or not to be.";var indx = text.lastIndexOf("be");What is the value of indx?

var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); 
console.log(indx);

// Q 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.



var text = "This is a go test. Let's go and enjoy the good weather. Go for it!";
var lastIndex = text.lastIndexOf("go");
var indx = lastIndex;
console.log(indx);

// Q 9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.

// if (text[indexNum] !== undefined) {
    
//   } else {

//   }

// Q 10. In this string "abcde", what character is at index 2? (Use charAt)

var string = "abcde"
var indx = string.charAt(2)
console.log(indx);

// Q 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declaredbeforehand.

var string = "this is an example text"
var cha = string.charAt(9)
console.log(cha)

// Q 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.


var sam = "this is an example text"
var x = sam.length -1
console.log(x)
console.log(sam.charAt(22))

// Q 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

var input = prompt("enter a word")
var cha = input.charAt(4)
console.log("5th character in this word is " + cha)

// Q 14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.

if(string.charAt(2) == "x"){

}
// Q 15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.

var  str = "Hello, World!";
var charArray = [];

for (let i = 0; i < str.length; i++) {
  charArray.push(str.charAt(i));
}

console.log(charArray);

// Q 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.



// Chapter 26 (Rounding Numbers)

// Q 1. Form a statement that rounds a number to the nearest integer.

var numberToRound = 7.89;
var roundedNumber = Math.round(numberToRound);
console.log("The rounded number is: " + roundedNumber);

// Q 2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

var origNum = 18.11
var roundNum = Math.ceil(origNum)
document.write(roundNum)

// Q 3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

var origNum = 18.11
var roundNum = Math.floor(origNum)
document.write(roundNum)

// Q 4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.

var origNum = 18.11
var roundNum = Math.round(origNum) 
document.write(roundNum)

// Q 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

var origNum = 0.5
var roundNum = Math.floor(origNum)
document.write(roundNum)

// Q Chapter 27 (Random Numbers)

// Q 1. Convert a random number generated by JavaScript to a number in the range 1 to 50.

var randomNum = Math.random();
var Convert = Math.floor(randomNum * 50)
document.write(Convert)

// Q 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.

var randomNum = math.random()
document.write(randomNum)

// Q 3. You have to create a dice in JavaScript with the use of pseudorandom number.

var random = Math.random()
var dice = (random * 6 )
document.write(dice)

// 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.

var randomNumber = Math.random();

var tossResult = (randomNumber < 0.5) ? "Heads" : "Tails";

console.log(tossResult);

// Chapter 28, 29 (Converting Strings)

//Q 1. How do you convert a string to an integer in JavaScript?

var number = "12345"
var conv = Num(number) 
document.write(conv)
document.write(typeof(conv))

// Q 2. Write a JavaScript function to convert the string "123" to an integer.

function convertStringToInteger(str) {
  var integer = parseInt(str, 10);
  return integer;
}
var strNumber = "123";
var intNumber = convertStringToInteger(strNumber);
console.log(intNumber);

// Q 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
 
var strNumber = "3.14";
var floatNumber = parseFloat(strNumber);
console.log(floatNumber);

// Q 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

// marked

var strNumber = "3.14";
var floatNumber = parseFloat(strNumber);
console.log(typeof(floatNumber));
console.log(floatNumber);

// Q 5. How can you convert a number to a string in JavaScript?

var Num = 1234
var string = Num.toString()
console.log(string)

// 6. Write a JavaScript function to convert the number 42 to a string.

function numbertostring(){
  return number.toString()
}

var number = 42;
var string = numbertostring()
console.log(string)

// Q 7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

var deciString = 18.11;
var integer = parseInt(deciString)
console.log(integer);
console.log(typeof(integer))

// Chapter 30 (Controlling the length of  decimals)

// Q1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
 
var integ = 3.98467352422
var conv = integ.toFixed(4).toString()
console.log(conv);

// Q 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
 
var integ = 3.98467352422
var numb = +integ.toFixed(2).toString()
console.log(numb)
console.log(typeof(numb))

// Q 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.


if (num.toFixed(2).toString().length > 4) {
  console.log("The rounded number has more than 4 characters.");

} else {
  console.log("The rounded number has 4 or fewer characters.");

}

// Q 4. Assign a number with many decimal places to a variable.Code an alert that displays the number rounded to 2 decimal places and converted to a string.

var deciNum = 4.5462781484223
alert(deciNum.toFixed(2).toString())

// Chapter 31 - 34 (Date & Time)

// Q1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand

var dobj = new Date();
document.write(dobj);

// Q 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.

var date = new Date().toString();
var dstr = date;
console.log(dstr)

// Q 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.

var d = new Date
var day = d.getDay()
console.log(day);

// Q 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[0]);

// Q 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.

var date = new Date()

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth();
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();

console.log(year)
console.log(month)
console.log(day)
console.log(hours)
console.log(minutes)
console.log(seconds)
console.log(milliseconds)

// Q 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.

var letter = new Date(2020 , 11 , 31 )
console.log(letter)

// Q 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.

var date = new Date(1992 , 1 , 2)
console.log(date)

// Q 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.

var date = Date.now() - new Date(1980 , 0 , 1).getTime
console.log(date)

// Q 9. How do you change the year of a date in JavaScript?

var date = new Date()
date.setYear(2004)
console.log(date)

// Q 10. Write a JavaScript function to change the month of a given date to January.

function changeMonthToJanuary(date){
  date.setMonth(0); 
    return date;
}

const myDate = new Date();
console.log(changeMonthToJanuary(myDate));

// Q 11. What is the method to change the day of the week for a specific date in JavaScript?

function getDateForDayOfWeek(desiredDayOfWeek) {
  var currentDate = new Date();
  var currentDayOfWeek = currentDate.getDay();

  var diff = desiredDayOfWeek - currentDayOfWeek;
  var targetDate = new Date(currentDate.getTime() + diff * 24 * 60 * 60 * 1000);

  return targetDate;
}

var desiredDayOfWeek = 3;
var targetDate = getDateForDayOfWeek(desiredDayOfWeek);
console.log(targetDate); 

// Q 12. Write a JavaScript function to change the minutes of a given  time to a specific value. (Value by prompt)
function changeMinutes() {
  var time = prompt("Enter a time (hh:mm)");
  var minutes = prompt("Enter the new value for minutes");

  var parts = time.split(":");
  var hours = parseInt(parts[0]);
  var currentMinutes = parseInt(parts[1]);

  var newTime = new Date();
  newTime.setHours(hours);
  newTime.setMinutes(minutes);

  var formattedTime = newTime.getHours().toString().padStart(2, "0") + ":" +
    newTime.getMinutes().toString().padStart(2, "0");

  console.log("Original Time:", time);
  console.log("Modified Time:", formattedTime);
}

// 13. Write a JavaScript function to add a specific number of hours to a given time.

function addHoursToTime() {
  var time = prompt("Enter a time (hh:mm)");
  var hoursToAdd = parseInt(prompt("Enter the number of hours to add"));

  var parts = time.split(":");
  var hours = parseInt(parts[0]);
  var minutes = parseInt(parts[1]);

  var newHours = hours + hoursToAdd;

  var newTime = new Date();
  newTime.setHours(newHours);
  newTime.setMinutes(minutes);

  var formattedTime = newTime.getHours().toString().padStart(2, "0") + ":" +
    newTime.getMinutes().toString().padStart(2, "0");

  console.log("Original Time:", time);
  console.log("Modified Time:", formattedTime);
}




// Q 14. You have to create a age calculator in JavaScript.

function calculateAge() {
  var birthdate = prompt("Enter your birthdate (YYYY-MM-DD)");

  var parts = birthdate.split("-");
  var birthYear = parseInt(parts[0]);
  var birthMonth = parseInt(parts[1]) - 1; 
  var birthDay = parseInt(parts[2]);

  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthYear;

  if (
    currentDate.getMonth() < birthMonth ||
    (currentDate.getMonth() === birthMonth && currentDate.getDate() < birthDay)
  ) {
    age--;
  }

  console.log("Your age is:", age);
}



// Chapter 35 - 37 (Functions)

// Q 1. Code the first line of a function displayAlert.

function alert () {
  alert("hello world")

}

// Q2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.

function askName (){
 var userName = prompt("enter name")
 alert("Hello"+ userName + "!")
}

// Q 3. Code a function that calls 2 other functions.

function setHours(){
  alert( " this is function one")
}

function setMinutes(){
  alert( " this is function two")
}

function callsTwoFunction () {
  setHours()
   setMinutes()
}

callsTwoFunction()
// Q 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

function Name (){
  var name = prompt("enter name ")
  alert("Hello mr/miss "+ name + "!")
}
Name()

// Q 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.

function concat(a, b, c) {
}

var variable = "Hello";
var str = "World";
var num = 42;

concat(variable, str, num); 

// Q 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.

function concatenatedString(string1 , string2){
  var concatenatedString = string1 + string2
  return concatenatedStrings;
}

var result = concatenatedString("hello" , " world")
console.log(result)

// Q 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.

function webAndAppdevelopmentcourse(girls , boys , perStudentPay){
  var accountent = girls * boys * perStudentPay
  return accountent;
}

var totalFee = webAndAppdevelopmentcourse(250 , 150 , 5000)
console.log(totalFee);

// Q 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers

function calculateAverage(number){
  if(number.length === 0){
    return 0;
  }
  var sum = number.reduce(function (acc , num){
    return acc + num
  },0)

  var average = sum / number.length
  return average
}

var number = [2 , 5 , 8 , 4]
var ave = calculateAverage(number)
console.log(ave)

// Q 9. Write a JavaScript function that takes two parameters and returns their sum.

function sumOfTwo(num1 , num2){
  var sum = num1 + num2 
  return sum;
}
 
console.log(sumOfTwo(2 , 5)) 

// Q 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.


function calculateAverage(number){
  if(number.length === 0){
    return 0;
  }
  var sum = number.reduce(function (acc , num){
    return acc + num
  },0)

  var average = sum / number.length
  return average
}

var number = [2 , 5 , 8 , 4]
var ave = calculateAverage(number)
console.log(ave)

// Q 11. You have to capture the returned value from a function and store it in a variable?

function Multiplication(numOne , numTwo){
  var Multiply = numOne * numTwo
  return Multiply 
}

var result = console.log(Multiplication(12 , 20))


//   Q 12. Write a function which tells letter counts of (word).

function countNumr (word){
  var count = word.length
  return count
}

var word = "hunain"
console.log(countNumr(word))

// Q 13. Write a function to set (year) in date object.

function setYear(date , year){
  date.setFullYear(year)
}

var mydate = new Date();
console.log("before updating year"+ myDate)

setYear(myDate , 1980)
console.log("after updating year"+ myDate)

// Q 14. Write a function which tells the age of a person who Born on (dateOfBirth)

function calculateAge(dateOfBirth) {
  var currentDate = new Date();
  var birthDate = new Date(dateOfBirth);

  var age = currentDate.getFullYear() - birthDate.getFullYear();

  var hasNotHadBirthday = currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate());

  if (hasNotHadBirthday) {
    age--;
  }

  return age;
}

var dateOfBirth = "1990-05-15";
var age = calculateAge(dateOfBirth);
console.log(age); 

// Q 15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']result should be in true or false

function checkPresence(word , array){
  return array.includes(word)
}
var wordToSearch = "Hassan"
var wordsArray = ['Zaid', 'Harris', 'Raze', 'Abubakar', 'Hassan', 'Hussain', 'Fatima'];

var isPresent = checkPresence(wordToSearch , wordsArray);
console.log(isPresent)

// Q 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)

function repeatation(letter , times){
  return letter.repeat(times)
}

var result = repeatation("hunain",10)

// Q 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()

function reverse(array){
  return array.reverse()
}

var arrayforreverse = ['a','b','c','d','e'] 
console.log(reverse(arrayforreverse))

// Chapter 38 (Local vs. Global Variables)

// Q 1. Write a JavaScript function that demonstrates the usage of a local variable.


function greet(name){
   var greeting ="hello "
   console.log(greeting + name)
}

greet("hunain")

// Q 2. How can you access a global variable inside a function in JavaScript

var globalVariable = "Hello sir Hunain"

function accessGlobalVariable(){
  console.log(globalVariable)
}

accessGlobalVariable()

// Chapter 39, 40 (Switch Statements)

// Q 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You selected an apple.");
    break;
  case "banana":
    console.log("You selected a banana.");
    break;
  case "orange":
    console.log("You selected an orange.");
    break;
  default:
    console.log("You selected a fruit that is not on the list.");
}


// Q 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.

var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "London":
    alert("You entered London. Welcome to London!");
    break;
  case "Paris":
    alert("You entered Paris. Welcome to Paris!");
    break;
  case "New York":
    alert("You entered New York. Welcome to New York!");
    break;
  default:
    alert("The city you entered is not on the list. Please try again.");
}












  
