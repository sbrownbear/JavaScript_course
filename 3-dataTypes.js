// Task #1

const favoriteDrink = 'coffee';
const numberOfCups = 5;
const isColdDrink = true;
const studentsFavoriteDrink = null;
const carOwner = undefined;
const itCompany = {
  name: 'The Best IT Company',
  numberOfDevelopers: 500,
  isProductCompany: true,
};
const id = Symbol('id');
const bigIntNumber2 = 20n;

console.log('favoriteDrink', favoriteDrink, typeof favoriteDrink);
console.log('numberOfCups', numberOfCups, typeof numberOfCups);
console.log('isColdDrink', isColdDrink, typeof isColdDrink);
console.log('studentsFavoriteDrink', studentsFavoriteDrink, typeof studentsFavoriteDrink);
console.log('carOwner', carOwner, typeof carOwner);
console.log('itCompany', itCompany, typeof itCompany);
console.log('id', id, typeof id);
console.log('bigIntNumber2', bigIntNumber2, typeof bigIntNumber2);

// Task #2

let age = 20;
let amount = '100';
let isJavaScriptDev = false;

age = '20';
amount = 100;
isJavaScriptDev = null;

alert(age);
alert(amount);
alert(isJavaScriptDev);
