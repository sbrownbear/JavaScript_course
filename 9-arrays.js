// task #1

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = () => {
    const clientName = peopleWaiting.shift()
    alert(`${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}

const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop()
    alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`)
}

giveParcel()
giveParcel()
giveParcel()


for (let i = peopleWaiting.length; i > 0; i--) {
    leaveQueueWithoutParcel()
}

// task #2

const getSumOfSequence = (number) => {
    const finalArray = [];
    for (let i = 1; i <= number; i++) {
        finalArray.push(i);
    }

    return finalArray[0] + finalArray[finalArray.length - 1];
};

const result = getSumOfSequence(10);
console.log('result', result);

// task #3

const coffees = ['Latte', 'Cappuccino', 'Americano'];

let favoriteCoffeeName = prompt('Поиск кофе по названию:');
favoriteCoffeeName = favoriteCoffeeName.trim().toLocaleLowerCase();

const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLocaleLowerCase() === favoriteCoffeeName);
const favoriteCoffee = coffees[favoriteCoffeeIndex];

if (favoriteCoffee) {
    alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}

// task #4

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);

coffees.forEach((coffeeName, index) => {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро.`);
});

// task #5

const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const clientEstimationString = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    const clientEstimation = Number(clientEstimationString.trim());
    if (clientEstimation >= 1 && clientEstimation <= 10) {
        clientsEstimations.push(clientEstimation);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5);
const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5);

console.log(goodEstimations, notGoodEstimations)

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);

// task #6

const numbers = [10, 4, 100, -5, 54, 2];

// 1. for

let sum1 = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum1 += numbers[i] ** 3;
}
console.log('sum1', sum1);

// 2. for of

let sum2 = 0;
for (const number of numbers) {
    sum2 += number ** 3;
}
console.log('sum2', sum2);

// 3. forEach

let sum3 = 0;
numbers.forEach((number) => {
    sum3 += number ** 3;
});
console.log('sum3', sum3);

// 4. reduce

const sum4 = numbers.reduce((acc, number) => {
    return acc + number ** 3;
}, 0);
console.log('sum4', sum4);

// task #7



// task #8



// task #9

const matrix = [];

for (let i = 0; i < 3; i += 1) {
    const row = [];
    for (let j = 0; j < 5; j += 1) {
        row.push(j + 1);
    }
    matrix.push(row);
}

console.log(matrix);

// task #10

const matrix2 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
];

const flatArray = matrix2.reduce((acc, array) => {
    return [...acc, ...array];
}, []);

console.log('flatArray', flatArray);