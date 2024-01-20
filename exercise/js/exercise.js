/* 

Consider an array of objects representing different products in a shopping cart, like the one shown below:

let cart = [
  { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
  { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
  { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
  { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
  { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 }
];

Write a JavaScript function that calculates the total cost of all 'Fruit' items in the cart. Please ensure your function adheres to functional programming principles and avoids changing the original 'cart' array.
 {
  "links": {
    "self": "http://example.com/articles",
    "next": "http://example.com/articles?page[offset]=2",
    "last": "http://example.com/articles?page[offset]=10"
  },
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!"
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/articles/1/relationships/author",
          "related": "http://example.com/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      },
      "comments": {
        "links": {
          "self": "http://example.com/articles/1/relationships/comments",
          "related": "http://example.com/articles/1/comments"
        },
        "data": [
          { "type": "comments", "id": "5" },
          { "type": "comments", "id": "12" }
        ]
      }
    },
    "links": {
      "self": "http://example.com/articles/1"
    }
  }],
  "included": [{
    "type": "people",
    "id": "9",
    "attributes": {
      "firstName": "Dan",
      "lastName": "Gebhardt",
      "twitter": "dgeb"
    },
    "links": {
      "self": "http://example.com/people/9"
    }
  }, {
    "type": "comments",
    "id": "5",
    "attributes": {
      "body": "First!"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "2" }
      }
    },
    "links": {
      "self": "http://example.com/comments/5"
    }
  }, {
    "type": "comments",
    "id": "12",
    "attributes": {
      "body": "I like XML better"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    },
    "links": {
      "self": "http://example.com/comments/12"
    }
  }]
}
['people', 'comments', 'comments']
const array = [
  {
    id: 1,
    name: 'John',
    age: 25,
    hobbies: ['reading', 'painting', 'hiking'],
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  },
  {
    id: 2,
    name: 'Sarah',
    age: 30,
    hobbies: ['cooking', 'gardening'],
    address: {
      street: '456 Elm St',
      city: 'Los Angeles',
      country: 'USA'
    }
  },
  {
    id: 3,
    name: 'Michael',
    age: 20,
    hobbies: ['photography', 'playing guitar'],
    address: {
      street: '789 Oak St',
      city: 'London',
      country: 'UK'
    }
  }
];


var arr1 = [1, 2, 3];
var arr2 = [];
for(var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
*/
/* 
 1. Write a function to calculate the sum of all numbers in an array using the reduce method.
 2. Write a function that uses reduce to find the maximum number in an array of numbers.
3. Write a function that uses reduce to find the product of all numbers in an array.

4.  Write a function that uses reduce to count the occurrences of each element in an array.

5. Write a function that uses reduce to flatten an array of arrays.
6. Using the reduce method, write a function that transforms an array into an object where each element in the array becomes a property in the object.
7. Write a function that uses reduce to filter out unique elements from an array.
8. Write a function that uses reduce to return the average of an array of numbers.
9. Write a function that uses reduce to create a sentence from an array of words.
10. Write a function that uses reduce to return the length of the longest string in an array.
11. Write a function that uses reduce to implement a simple version of map.
12. Write a function that uses reduce to implement a simple version of filter.

*/

