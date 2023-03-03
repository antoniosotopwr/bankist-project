'use strict';

let copyArr1 = [];
let correctArr1 = [];


let checkDogAge = function (arr) {
  arr.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is it ${age} `);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy `);
    }
  });
};

let checkDogs = function (arr1, arr2) {
  copyArr1 = [...arr1];

  copyArr1.pop();
  copyArr1.pop();
  copyArr1.shift();

  //do it with jonas version using splice

  correctArr1 = [...copyArr1];
  let dogs = correctArr1.concat(arr2);
  checkDogAge(dogs);

  return dogs;
};

checkDogs([3, 5, 2, 12, 7], [9, 16, 6, 8, 3]);

