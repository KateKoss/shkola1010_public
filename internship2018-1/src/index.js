import {confirmAge} from './user.service.js';
import {filterArray, isEmpty, showIsEmptyResult, objKeys} from './arrayFilters.js';
//-----------------------------------
//confirmAge();
//-----------------------------------
console.log("Homework on Friday");
var numbers = [26,31,55,18,54,43,77,39,23];
var minNumber = 25;
var maxNumber = 50;
console.log(numbers);
console.log(filterArray(numbers, minNumber, maxNumber));

var person = {
    firstName: "Kate",
    lastName: "Kos",
    age: 21
};
var someObj = new Object();
showIsEmptyResult(isEmpty(person));
showIsEmptyResult(isEmpty(someObj));
console.log(objKeys(person));
console.log(objKeys(someObj));