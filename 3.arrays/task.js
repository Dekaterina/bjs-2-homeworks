"use strict";

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}


console.log(compareArrays([8,9], [6])); 
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); 
console.log(compareArrays([8, 1, 2], [8, 1, 2]));




"use strict";

function getUsersNamesInAgeRange(users, gender) {
  if (!users.length) {
    return 0;
  }

  const filteredUsers = users
    .filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, array) => {
      acc += age;
      if (index === array.length - 1) {
        return acc / array.length;
      }
      return acc;
    }, 0);

  return filteredUsers || 0;
}


