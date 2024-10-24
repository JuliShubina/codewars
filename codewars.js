// function evenOrOdd(number) {
//   if (number % 2 == 0) return console.log("Even");
//   else {
//     return console.log("Odd");
//   }
// }

// evenOrOdd(4);

// function sum(numbers) {
//   "use strict";
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   return sum;
// }

// console.log(sum([-2.3]));

// function doubleChar(str) {
//   let rez = [];
//   for (let i = 0; i < str.length; i++) {
//     let outstr = str[i] + str[i];
//     rez.push(outstr);
//   }
//   return rez.join("");
// }
// let st = "hello";
// console.log(doubleChar("hello"));
// console.log(st.split(""));

// function doubleChar(str) {
//   return str.replace(/(.)/g, "$1$1");
// }

// function doubleChar(str) {
//   rez = [...str].map((ch) => ch + ch);

//   return rez.join("");
// }
// console.log(doubleChar("hello"));

// let st = "hello";

// console.log([...st]);
// console.log(Array.from(st));

// function makeNegative(num) {
//   return num > 0 ? -num : num;
// }

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// console.log(
//   makeNegative(1), // return -1
//   makeNegative(-5), // return -5
//   makeNegative(0), // return 0
//   makeNegative(0.12)
// ); // return -0.12)

// function cockroachSpeed(s) {
//   return (res = Math.floor((s * 100000) / 3600));
// }
// console.log(cockroachSpeed(1.09));

// function removeChar(str) {
//   return [...str].splice(1, [...str].length - 2).join("");
// }

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// console.log(removeChar("Hello"));

// function correct(string) {
//   arr = string.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//       arr[i] = "S";
//     } else {
//       if (arr[i] == 0) {
//         arr[i] = "O";
//       } else {
//         if (arr[i] == 1) {
//           arr[i] = "I";
//         }
//       }
//     }
//   }

//   return arr.join("");
// }

// console.log(correct("DUBL1N"));
// console.log(correct("51NGAP0RE"));
// console.log(correct("PAR15"));

// function maps(x) {
//   return x.map((item) => item * 2);
// }

// console.log(maps([4, 1, 1, 1, 4]));

// function between(a, b) {
//   let res = [];
//   let i = a;
//   do {
//     res.push(i);
//     i++;
//   } while (i <= b);
//   return res;
// }
// console.log(between(-2, 2));

// function positiveSum(arr) {
//   return arr.reduce((accumulator, currentValue) => {
//     if (currentValue > 0) {
//       accumulator += currentValue;
//     }
//     return accumulator;
//   }, 0);
// }

// console.log(positiveSum([1, -2, 3, 4, 5]));

// function stringToArray(string) {
//   return string.split(" ");
// }
// console.log(stringToArray("Robin Singh"));

// function reverseWords(str) {
//   const arr = str.split(" ");
//   const reversedArr = arr.map((element) => {
//     return element.split("").reverse().join("");
//   });
//   return reversedArr.join(" ");
// }

// console.log(reverseWords("double  spaces"));

// function areYouPlayingBanjo(name) {
//   let firstChar = name.substring(0, 1);
//   if (firstChar == "r" || firstChar == "R") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }
// console.log(areYouPlayingBanjo("adam"));

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet("Julia"));

// function nbYear(p0, percent, aug, p) {
//   let year = 0;
//   let inhabitants = p0;
//   do {
//     let inhabitants = Math.floor(
//       inhabitants + inhabitants * percent * 0.01 + aug
//     );
//     year = year + 1;
//   } while (inhabitants < p);
//   return year;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// function findShort(s) {
//   let word = s.split(" ");
//   let res = word[0].length;
//   for (let i = 0; i <= word.length - 1; i++) {
//     if (word[i].length < res) {
//       res = word[i].length;
//     }
//   }
//   return res;
// }
// // console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(Math.min(..."bitcoin take over the world maybe who knows perhaps".split(" ").map((s) => s.length)));

// function squareDigits(num) {
//   let arr = num.toString().split("").map(Number);
//   let res = arr.map((item) => item ** 2).join("");
//   return Number(res);
// }
// console.log(squareDigits(3212));
// console.log(typeof squareDigits(3212));

// var isSquare = function (n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return true;
//   }
//   return false;
// };
// console.log(isSquare(-25));

// function accum(s) {
//   let arr = s.split("");
//   let res = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     res.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
//   }
//   return res.join("-");
// }
// console.log(accum("abcd"));

// // accum("abcd") -> "A-Bb-Ccc-Dddd"

// function otherAngle(a, b) {
//   return 180 - (a + b);
// }

// console.log(otherAngle(30, 20));

// const areaOrPerimeter = function (l, w) {
//   if (l != w) {
//     let perimeter = (l + w) * 2;
//     return perimeter;
//   } else {
//     let area = l * w;
//     return area;
//   }
// };
// console.log(areaOrPerimeter(3, 3));

// function getAge(inputString) {
//   return +inputString.charAt(0);
// }

// console.log(getAge("1 year old"));

// function removeSmallest(numbers) {
//   index = numbers.indexOf(Math.min(...numbers));
//   let newArr = [...numbers];
//   newArr.splice(index, 1);
//   return newArr;
// }

// console.log(removeSmallest([5, 3, 2, 1, 4]));

function calculate(string) {
  let numbers = string.match(/\d+/g);
  console.log(numbers);
  if (string.includes("loses")) {
    let res = numbers[0] - numbers[1];
    return res;
  } else if (string.includes("gains")) {
    let res = Number(numbers[0]) + Number(numbers[1]);
    return res;
  }
}
console.log(calculate("Jerry has 34 apples and gains 6"));
