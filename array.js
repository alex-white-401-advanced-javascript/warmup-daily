'use strict';

let numberArray = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr) {
  for(let i in arr){
    console.log('For Loop', arr[i]);
  }
}

function whileLoop(arr) {
  let i = 0;
  while(arr[i]){
    console.log('While Loop', arr[i])
    i++
  }
}

function map(arr) {
  let newArray = [];
  for(let i in arr){
    newArray.push(arr[i] * 2)
  }
  console.log(newArray);
}

function filter(arr) {
  let newArray = [];
  for(let i in arr){
    if(arr[i] % 2 === 0){
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}

function reduce(arr) {
  let sum = 0;
  for(let i in arr){
    sum += arr[i]
  }
  console.log(sum);
}

forLoop(numberArray);
whileLoop(numberArray);
map(numberArray);
filter(numberArray);
reduce(numberArray);
