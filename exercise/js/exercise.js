/* 
Q: Consider an array of objects representing different products in a shopping cart, like the one shown below:

let cart = [
  { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
  { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
  { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
  { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
  { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 }
];
Write a JavaScript function that calculates the total cost of all 'Fruit' items in the cart. Please ensure your function adheres to functional programming principles and avoids changing the original 'cart' array.


*/

let cart = [
  { name: "Apple", category: "Fruit", quantity: 10, price: 0.5 },
  { name: "Orange", category: "Fruit", quantity: 5, price: 0.8 },
  { name: "Broccoli", category: "Vegetable", quantity: 2, price: 1.5 },
  { name: "Carrot", category: "Vegetable", quantity: 8, price: 0.2 },
  { name: "Chicken", category: "Meat", quantity: 1, price: 10 },
];

function totalCost(cart) {
  let total = 0;
  for (let item of cart) {
    if (item.category === "Fruit") {
      total += item.price;
    }
  }
  return total + "$";
}
totalCost(cart);

const data = {
  links: {
    self: "http://example.com/articles",
    next: "http://example.com/articles?page[offset]=2",
    last: "http://example.com/articles?page[offset]=10",
  },
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
      },
      relationships: {
        author: {
          links: {
            self: "http://example.com/articles/1/relationships/author",
            related: "http://example.com/articles/1/author",
          },
          data: { type: "people", id: "9" },
        },
        comments: {
          links: {
            self: "http://example.com/articles/1/relationships/comments",
            related: "http://example.com/articles/1/comments",
          },
          data: [
            { type: "comments", id: "5" },
            { type: "comments", id: "12" },
          ],
        },
      },
      links: {
        self: "http://example.com/articles/1",
      },
    },
  ],
  included: [
    {
      type: "people",
      id: "9",
      attributes: {
        firstName: "Dan",
        lastName: "Gebhardt",
        twitter: "dgeb",
      },
      links: {
        self: "http://example.com/people/9",
      },
    },
    {
      type: "comments",
      id: "5",
      attributes: {
        body: "First!",
      },
      relationships: {
        author: {
          data: { type: "people", id: "2" },
        },
      },
      links: {
        self: "http://example.com/comments/5",
      },
    },
    {
      type: "comments",
      id: "12",
      attributes: {
        body: "I like XML better",
      },
      relationships: {
        author: {
          data: { type: "people", id: "9" },
        },
      },
      links: {
        self: "http://example.com/comments/12",
      },
    },
  ],
};
const array = [
  {
    id: 1,
    name: "John",
    age: 25,
    hobbies: ["reading", "painting", "hiking"],
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Sarah",
    age: 30,
    hobbies: ["cooking", "gardening"],
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA",
    },
  },
  {
    id: 3,
    name: "Michael",
    age: 20,
    hobbies: ["photography", "playing guitar"],
    address: {
      street: "789 Oak St",
      city: "London",
      country: "UK",
    },
  },
];
var arr1 = [1, 2, 3];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}


// create array with
function createArr(data) {
  let arr = [];
  if (typeof data === "number") {
    for (let i = 1; i <= data; i++) {
      // let randomNumber = Math.floor(Math.random() * data);
      // arr.push(randomNumber);
      arr.push(i);
    }
    return arr;
  } else if (typeof data === "string") {
    let splitstr = data.split(" ");

    return splitstr;
  }

  return [];
}
const numArr = createArr(10);
const strArr = createArr(
  "In your love I am lost my heart never stopsWhere your smile resides there my world begins"
);
// console.log(numArr);
// console.log(strArr);

// 1. Write a function to calculate the sum of all numbers in an array using the reduce method.

function customReduce(arr, callback, initialValue, index = 0) {
  // base case: if index reaches the length of the arr then return the intialvalue.
  if (index === arr.length) {
    return initialValue;
  }

  // call the callback function wiith curr and acc

  const accumulator = callback(initialValue, arr[index], index, arr);

  // recusive case: call with updated index and accumulator

  return customReduce(arr, callback, accumulator, index + 1);
}

function sumOfArr (arr){
  return customReduce(arr, (acc, curr) => acc + curr, 0);
} 
const sum = sumOfArr(numArr)

// logs:----------

// console.log(sumOfArr);

// 2. Write a function that uses reduce to find the maximum number in an array of numbers.

function maxNumber (arr){
 return  customReduce(
    arr,
    (acc, max) => (acc < max ? max : acc),
    0
  );
} 

// console.log(maxNumber(numArr));

// 3. Write a function that uses reduce to find the product of all numbers in an array.

function productOfNum (arr){
  
  return customReduce(arr, (acc, curr) => acc * curr, 1);
}

// console.log(productOfNum(numArr));
// 4.  Write a function that uses reduce to count the occurrences of each element in an array.
function occurrencesCount (arr){
  return customReduce(
  arr,
  (acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },
  {}
);
}
// console.log(occurrencesCount(numArr));

// 5. Write a function that uses reduce to flatten an array of arrays.


const nestedArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
function flatArr (arr){
  return customReduce(nestedArrays,(acc,curr)=>{
  return acc.concat(curr)
},[]);
}

// console.log(flatArr(numArr));


// 6. Using the reduce method, write a function that transforms an array into an object where each element in the array becomes a property in the object.

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function arrayIntoObj(arr){
  return customReduce(arr,(acc,curr)=>{
    acc[curr] = true;
    
    return acc
  },{})
}
const resultObj = arrayIntoObj(weekDays);

console.log(resultObj);

// 7. Write a function that uses reduce to filter out unique elements from an array.

function filterelement(arr){
  return customReduce(arr,(acc,curr)=>{
    if(!acc.includes(curr)){
       acc.push(curr)
    }
    return acc
  },[])
}
const inputArray = [1, 2, 3, 2, 4, 1, 5, 2];
const resultArr = filterelement(inputArray);

console.log(resultArr);


// 8. Write a function that uses reduce to return the average of an array of numbers.

function calcAvarage(arr){
  const sum = customReduce(arr,(acc,curr)=>acc+curr,0);

  const average = sum /arr.length;

  return average
}
const numbersArray = [1, 2, 3, 4, 5,6,8,12,34,65,32];

const averageResult = calcAvarage(numbersArray);
console.log(averageResult);

// 9. Write a function that uses reduce to create a sentence from an array of words.

function createSentence(arr){
   return customReduce(arr,(acc,curr)=>{
    return ` ${acc} ${curr} `},'');

}
const sentence = createSentence(strArr);
console.log(sentence);

// 10. Write a function that uses reduce to return the length of the longest string in an array.

function lengthOfStr(arr){
  const maxLength = customReduce(arr,(max,currStr)=>{
    // console.log(currStr,currStr.length);
    return (max < currStr.length)? currStr.length:max;
  },0);
  return maxLength
}

const resultLength = lengthOfStr(strArr);
console.log(resultLength);

// 11. Write a function that uses reduce to implement a simple version of map.
function simpleMap(arr,callback){
  const mapedArr = customReduce(arr,(acc,curr)=>{
    acc.push(callback(curr))
    return acc
  },[])
  return mapedArr
}

const squareNums = simpleMap(numbersArray,(num)=> num*num);
console.log(squareNums); 

// 12. Write a function that uses reduce to implement a simple version of filter.

function simplefilter(arr,callback){
  const filterArr = customReduce(arr,(acc,curr)=>{
    if(callback(curr)){
      acc.push(curr)
    }
    return acc
  },[]);
  return filterArr
}


const evenNumbers = simplefilter(numbersArray,(num)=> num%2===0);

console.log(evenNumbers);