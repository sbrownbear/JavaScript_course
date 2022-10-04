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

console.log(Number(favoriteDrink), Boolean(favoriteDrink), String(favoriteDrink));
console.log(Number(numberOfCups), Boolean(numberOfCups), String(numberOfCups));
console.log(Number(isColdDrink), Boolean(isColdDrink), String(isColdDrink));
console.log(Number(studentsFavoriteDrink), Boolean(studentsFavoriteDrink), String(studentsFavoriteDrink));
console.log(Number(carOwner), Boolean(carOwner), String(carOwner));
console.log(Number(itCompany), Boolean(itCompany), String(itCompany));
console.log(Number(id), Boolean(id), String(id));
console.log(Number(bigIntNumber2), Boolean(bigIntNumber2), String(bigIntNumber2));

// Task #2

console.log(Number('50'), typeof Number('50'),);

console.log(Number('100'), typeof Number('100')); // явное

// console.log('' + 1); неявное
console.log(String(1), typeof String(1));

console.log(String(1), typeof String(1)); // явное
console.log(Boolean(0), typeof Boolean(0)); // явное

// console.log(+'001'); неявное
console.log(Number('001'), typeof Number('001'));

// console.log(1 + ''); неявное
console.log(String(1), typeof String(1));

console.log(Boolean(1), typeof Boolean(1)); // явное
console.log(String(001), typeof String(001)); // явное
console.log(Number('Hello World'), typeof Number('Hello World')); // явное
