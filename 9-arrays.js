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



// task #7



// task #8



// task #9



// task #10