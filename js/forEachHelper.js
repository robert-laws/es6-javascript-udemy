// Array Helper Method - forEach

const names = ['Hal', 'Bob', 'Ned', 'Kal', 'Mel', 'Bill', 'Sal', 'Dave', 'Milton'];
const values = [3, 7, 2, 8, 1, 8, 4, 8, 9, 2, 7, 3, 2, 8, 5, 4, 4, 5, 7];
let sum = 0;

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

names.forEach(function(name) {
  // console.log(name);
});

function addValues(number) {
  sum += number;
}

// values.forEach(function(value) {
//   sum += value;
// })

// doesn't require an anonymous function, can use a declared function
values.forEach(addValues)

console.log(sum);

function getTotal(array) {
  let sum = 0;
  array.forEach(function(value) {
    sum += value;
  });
  return sum;
}

console.log(getTotal(values));