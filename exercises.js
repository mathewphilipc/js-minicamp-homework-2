//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x > y) {
    return x;
  }
  return y;
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  return (num === 5 || num === 10);
  //return true if num is 10 or 5
  //otherwise return false
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  return (num < 50 && num > 20);
}

function isInteger(num) {
  return (num===Math.floor(num));
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  var outputString = '';
  if (num % 3 === 0) {
    outputString += 'fizz';
  }
  if (num % 5 === 0) {
    outputString += 'buzz';
  }
  if (outputString.length > 0) {
    return outputString;
  } else {
    return num;
  }
}

function isPrime(num) {
  if (num===1 || num===0) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    var isPrime = true;
    for (var factor = 2; factor*factor <= num; factor++) {
      if (num % factor === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  }
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
  //return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  //return the length of the array
}

function incrementByOne(arr) {
  for (var pos = 0; pos < arr.length; pos++) {
    arr[pos]++;
  }
  return arr;
  //arr is an array of integers  
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
}

function wordsToSentence(words) {
  var output = words[0];
  if (words.length > 1) {
    for (var i = 1; i < words.length; i++) {
      output = output + ' ' + words[i];
    }
  }
  return output;
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  var output = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]===item) {
      output = true;
    }
  }
  return output;
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
}

function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  //numbers is an array of integers.
  //add all of the integers and return the value
}

function averageTestScore(testScores) {
  var sum = 0;
  for (var i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  return sum / testScores.length;
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
  //numbers is an array of integers
  //return the largest integer
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
