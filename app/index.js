const arrayOfObjects = [
  {
    name: "Sean",
    age: "28"
  },
  {
    name: "Adrian",
    age: "33"
  },
  {
    name: "Alex",
    age: "19"
  }
];

const numArray = [12, 14, 65];


function multiplyArray(arr) {
  return arr.reduce((acc, num) => acc *= num, 1);
}

let multipliedArray = multiplyArray(numArray);
