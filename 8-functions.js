// Task #1

const getName1 = function(name) {
    return `Имя равно ${name}`;
}

function getName2(name) {
    return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log('getName1', getName1('getName1'));
console.log('getName2', getName2('getName2'));
console.log('getName3', getName3('getName3'));

// Task #2

const getSumOfNumbers = (number, type = 'odd') => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        const isEven = i % 2 === 0
        const isOdd = !isEven
        if (!type) {
            sum += i
        } else if (isEven && type === 'even') {
            sum += i
        }
    }
    return sum
}

const result = getSumOfNumbers(10, 'even');
console.log('result', result);

// Task #3

function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 0) {
        alert('number должен быть целым числом и больше нуля!')
    } else {
        let counter = 0
        for (let i = number; i > 0; i -= 1) {
            const isDivisor = number % i === 0
            if (isDivisor) {
                counter += 1
            }
        }

        return counter
    }
}

const result2 = getDivisors(10)
console.log('result', result2)

// Task #4

const massives = ['Sergey', 'Ivan', 'Maksim']
for (let i = 0; i < massives.length; i++) {
    console.log('i', i)
}