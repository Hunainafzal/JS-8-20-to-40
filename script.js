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













  
