// Chalange 1: Reverse a string
// Return a string in revrse
// exercise. revrseString('hello) === 'olleh'

function revrseString(str) {
  // const strArr = str.split('');
  //  strArr.reverse();
  //  console.log(strArr);
  // return strArr.join('');
  ////////////////////////////////////////
  // return str
  //     .split('')
  //     .reverse()
  //     .join('');
  /////////////////////////////////////////
  // return str.split('').reverse().join('');
  ///////////////////////////////////////////
  // let revString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //     revString =revString +  str[i];
  // }
  // return revString;
  /////////////////////////////////
  // let revString = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString;
  // }
  // return revString;
  ///////////////////////////////////
  // let revString = '';
  // for (let char of str) {
  //     revString = char + revString;
  // }
  // return revString;
  //////////////////////////////////
  // let revString = '';
  // str.split('').forEach(function(char) {
  //     revString = char + revString;
  // });
  // return revString;
  /////////////////////////////////
  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;
  ///////////////////////////////////
  // return str.split('').reduce(function(revString, char){
  //     return char + revString;
  // }, '');
  /////////////////////////////////
  // return str.split('').reduce(function(revString, char){
  //     return char + revString;
  // });
  ///////////////////////////////////
  // return str.split('').reduce((revString, char) => char + revString);
  ////////////////////////////////////
}

//////////////////////////////////////////////////////////////////////////////

// CHALANGE 2: VALIDATE A PALINDROME
// Retrn true if palindrome and false if not
// ex. ispalindrome('racecar') === 'true' , isPalindrome('hello') === false

// function ispalindrome(str) {
//     const revString = str.split('').reverse().join('');

//     return revString === str;
// }

//////////////////////////////////////////////////////////////////////'''/////

// CHALANGE 3: REVERSE AN INTEGER
// Return an  integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//     const revString = int.toString().split('').reverse().join('');

//     return parseInt(revString) * Math.sign(int);
// }

////////////////////////////////////////////////////////////////////////////////

// CHALANGE 4: CAPITALIZE LETTERS
// RETRN A String with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');
  ////////////////////////////////////
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map(function (word) {
  //     return word[0].toUpperCase() + word.substr(1);
  //   })
  //   .join(" ");
  //////////////////////////////////
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map(word =>  word[0].toUpperCase() + word.substr(1))
  //   .join(" ");
  ///////////////////////////
  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase();
  // });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  // const charMap = {};
  // let maxNum = 0;
  // let maxChar = '';
  // str.split('').forEach(function(char) {
  //   if(charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // });
  // for(let char in charMap) {
  //   // debugger;
  //   if(charMap[char] > maxNum) {
  //     maxNum = charMap[char];
  //     maxChar = char;
  //   }
  // }
  // return maxChar;
  ////////////////////////////////////
  // put the string into an array and I sort it.
  // Then loop through the array keeping track of the count for each character.
  // keep track of the "current character" and the "max character" with objects.
  // const sortedStr = str.split('').sort();
  // const maxChar = {char: '', count: 0};
  // const currentChar = {char: '', count: 0};
  // sortedStr.forEach(char => {
  //   if(currentChar.char === char){
  //     currentChar.count++;
  //   } else {
  //     if(maxChar.count < currentChar.count){
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }
  //     currentChar.char = char;
  //     currentChar.count = 0;
  //   }
  // });
  // return maxChar.char;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // for(let i = 1; i <= 100; i++) {
  //   if(i % 15 === 0) {
  //     console.log('FizzBuzz');
  //   } else if(i % 3 === 0) {
  //     console.log('Fizz');
  //   } else if(i % 5 === 0) {
  //     console.log('Buzz');
  //   } else {
  //     console.log(i);
  //   }
  // }

  ////////////////////////

  // for(let i = 1; i <= 100; i++) {
  //   let printNum=true;
  //    if(i % 3 === 0)
  //      console.log('Fizz');
  //    if(i % 5 === 0)
  //      console.log('Buzz');
  //   // if divisable by 3 then i%3 is zero,
  //   // if divisable by 5 then i%5 is zero,
  //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
  //    printNum=((i%3*i%5)!==0);
  //   if(printNum) {
  //      console.log(i);
  //   }
  // }

  /////////////////////////////////

  for (var i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fizz";
    }
    if (i % 5 === 0) {
      output += "buzz";
    }
    console.log(output || i);
  }

  //////////////////////////////////////////////

  // for (let i = 1; i <= 100; i++) {
  //   let output = "";

  //   if (i % 3 === 0) {
  //     output += "Fizz";
  //   }

  //   if (i % 5 === 0) {
  //     output += "Buzz";
  //   }

  //   if (output === "") {
  //     output = i;
  //   }

  //   console.log(output);
  // }
}

// function calls

// const output = revrseString("Hello");

// console.log(output);

///////////////////////////////

// const output = ispalindrome("racecar");

// console.log(output);

///////////////////////

// const output = reverseInt(-234);

// console.log(output);

//////////////////////////////

// const output = capitalizeLetters("i love javaScript");

// console.log(output);

/////////////////////////////////////

// const output = maxCharacter("javaScript");

// console.log(output);

/////////////////////////////////////////////////

const output = fizzBuzz();

// console.log(output);

