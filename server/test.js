const input = 3612;

// function timeConversion(input) {
//   const unit = ["hour", "minute", "second"];
//   if (input == 0) {
//     return "";
//   }

//   let hour = 0,
//     minute = 0,
//     second = 0;
//   hour = Math.floor(input / 3600);
//   minute = Math.floor((input - hour * 3600) / 60);
//   second = input - hour * 3600 - minute * 60;
//   console.log(hour, minute, second);

//   const time = [hour, minute, second];
//   let result = "";
//   for (let i = 0; i < time.length; i++) {
//     if (time[i] == 1) {
//       result += `${time[i]} ${unit[i]} `;
//     } else if (time[i] > 1) {
//       result += `${time[i]} ${unit[i]}s `;
//     }
//   }

//   return result;
// }

// console.log(timeConversion(input));

// function minimumNumber(n, password) {
//   // Return the minimum number of characters to make the password strong
//   const charatcters = [
//     "!",
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//     "&",
//     "*",
//     "(",
//     ")",
//     "-",
//     "+",
//   ];
//   const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//   const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
//   console.log(upperCase);
//   let upper = 0;
//   let lower = 0;
//   let char = 0;
//   let num = 0;

//   const length = 6 - n;
//   let needed = 4;

//   const passwordArr = password.split("");

//   for (let el of passwordArr) {
//     if (charatcters.includes(el) && char == 0) {
//       char++;
//       needed--;
//     } else if (numbers.includes(el) && num == 0) {
//       num++;
//       needed--;
//     } else if (upperCase.includes(el) && upper == 0) {
//       upper++;
//       needed--;
//     } else if (lowerCase.includes(el) && lower == 0) {
//       lower++;
//       needed--;
//     }

//     if (needed === 0) break;

//     console.log(needed);
//   }
//   console.log(length, needed);
//   if (length > needed) {
//     return length;
//   } else {
//     return needed;
//   }
// }
// n = 11;
// pass = "4700";
// console.log(minimumNumber(n, pass));

function gradingStudents(grades) {
  if (grades < 38) return grades;
  const unit = grades % 10;

  let compare = unit <= 5 ? 5 - unit : 10 - unit;


  if (compare < 3) {
    return grades + compare;
  }

  return grades;
  // Write your code here
}

const arr = [73,67,38,33];
for (let el of arr){
  console.log(gradingStudents(el));

}