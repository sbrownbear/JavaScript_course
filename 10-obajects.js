// Task 1

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, {
        username: 'Lucy', 
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob', 
        status: 'online',
        lastActivity: 104
    }
]

const usersOnline = users.filter((person) => person.status === 'online');
const usersOnlineNames = usersOnline.map((person) => person.username).join(', ');
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


// Task 2

const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: 'Максим' },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, orders) => {
    const objectWithIndexes = patients.reduce((acc, curPerson) => {
        acc[curPerson.id] = curPerson;
        return acc;
    }, {});
    return orders.map((order) => objectWithIndexes[order]);
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Возвращает массив
[
    { id: 4, name: 'Виталий' },
    { id: 2, name: 'Николай' },
    { id: 1, name: 'Максим' },
    { id: 3, name: 'Ангелина' }
]
*/