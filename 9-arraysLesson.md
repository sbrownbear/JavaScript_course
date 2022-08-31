# Массивы

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

Добавление элемента в начало

    salariesOfDevelopers.push(5000)

Добавление элемента в конец

    salariesOfDevelopers.unshift(4000)

Удаление элемента в начале

    salariesOfDevelopers.shift(4000)

Удаление элемента в конце

    salariesOfDevelopers.pop(4000)

Изменение элемента

    salariesOfDevelopers[6] = 10000

# Перебор массива

    const developerNames = ['Sergey', 'Ivan', 'Maksim', 'Igor', 'Irina']

### Цикл for

    for (let i = 0; i < developerNames.length; i++) {
        console.log(developerNames[i])
    }

### Цикл for of

    for (const name of developerNames) {
        console.log(name)
    }

### Цикл forEach (этот метод в приоритете)

    developerNames.forEach((name, index, array) => {
        console.log(name)
    })
_________
## Метод map

Возвращает новый массив, текущй оставляет без изменений.

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
        return salary * 2
    })
    console.log(updatedSalaries)

Ответ:

    [800, 1000, 1200, 4000, 700]

## Метод filter

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    const filterSalaries = salariesOfDevelopers.filter((salary, index, array) => {
        return salary > 600
    })
    console.log(filterSalaries)

Ответ:

    [2000]

## Метод find

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    const serchedSalaries = salariesOfDevelopers.find((salary) => {
        return salary === 400
    })
    console.log(serchedSalaries)

Ответ:

    [400]

## Метод findIndex

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    const serchedIndex = salariesOfDevelopers.findIndex((salary) => {
        return salary === 400
    })
    console.log(serchedIndex)

Ответ:

    0

## Метод some, every

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    const elementExists = salariesOfDevelopers.some((salary) => {
        return salary > 400
    })
    console.log(elementExists)

Ответ:

    true

## Метод reduce

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
        return acc + salary
    }, 0)

    console.log(sum)

Ответ: выводит сумму

    3850

## Метод sort

Не возвращает новый массив в отличие от остальных методов, а изменяет текущий

### Сортировка по возрастанию

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    salariesOfDevelopers.sort((a, b) => {
        return a - b
    })

    console.log(salariesOfDevelopers)


Ответ:

    [350, 400, 500, 600, 2000]

### Сортировка по убыванию

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    salariesOfDevelopers.sort((a, b) => {
        return b - a
    })

    console.log(salariesOfDevelopers)

Ответ:

    [2000, 600, 500, 400, 350]

### Без колбэка

    const salariesOfDevelopers = [400, 500, 600, 2000, 350]

    salariesOfDevelopers.sort()
    console.log(salariesOfDevelopers)

Ответ:

    [2000, 350, 400, 500, 600]

### Сортировка строк по возрастанию 

    const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

    developerNames.sort()

    console.log(developerNames)

Ответ:

    ['Igor', 'Irina', 'Maxim', 'Nastya']

### Сортировка строк по убыванию

    const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

    developerNames.sort((a, b) => {
        if (a < b) {
            return 1
        }
        if (a > b) {
            return -1
        }

        return 0
    })

    console.log(developerNames)

Ответ:

    ['Nastya', 'Maxim', 'Irina', 'Igor']
_______
## Метод splice

Этот метод изменяет текущий массив

    const cars = ['BMW', 'Mercedes', 'Lada']

    cars.splice(0, 1)
    console.log(cars)

Ответ:

    ['Mercedes', 'Lada']

Второй вариант:

    const cars = ['BMW', 'Mercedes', 'Lada']

    cars.splice(0, 2, 'Audi', 'Bugatti')
    console.log(cars)

Ответ:

    ['Audi', 'Bugatti', 'Lada']

## Метод slice 
 
Этот метод не изменяет текущий массив, а возвращает новый. Принимает только два параметра: начало и конец обрезки массива.

    const agesOfDevelopers = [25, 18, 45, 30]

    const sliceAgesOfDeveloper = agesOfDevelopers.slice(0, 2))
    console.log(sliceAgesOfDeveloper)

Ответ:

    [25, 18]

## Метод indexOf (возращает индекс элемента)

    const favoriteFood = ['Мороженое', 'Торт', 'Кофе']

    const indexOfFood = favoriteFood.indexOf('Торт')
    console.log(indexOfFood)

Ответ:

    1

## Метод includes (существует ли элемент в массиве; возвращает true или false)

    const technologies = ['JavaScript', 'HTML', 'CSS']
    const isTechnologyExists = technologies.incluse('HTML')
    console.log(isTechnologyExists)

Ответ:

    true

## Методы split (из строчки в массив) + join (из массива в строчку)

    const listOfOrders = 'Майка, шорты, кроссовки, рюкзак'
    const listOfOrdersArray = listOfOrders.split()
    console.log(listOfOrdersArray)

Ответ: массив с одним элементом

    ['Майка, шорты, кроссовки, рюкзак']

Второй вариант

    const listOfOrders = 'Майка, шорты, кроссовки, рюкзак'
    const listOfOrdersArray = listOfOrders.split(', ')
    console.log(listOfOrdersArray)

Ответ: массив в четыре элемента 

    ['Майка', 'шорты', 'кроссовки', 'рюкзак']

## Метод join

    const ordersString = listOfOrdersArray.join(',')
    console.log(ordersString)

Ответ: одна строка

    Майка,шорты,кроссовки,рюкзак

## Метод reverse (переворачивает массив)

reverse изменяет текущий массив

    const technologies = ['JavaScript', 'HTML', 'CSS']

    technologies.reverse()
    console.log(technologies)

Ответ:

    ['CSS', 'HTML', 'JavaScript']

## Метод concat (объединение массивов)

    const currntDeveloper = ['Maxim', 'Oleg']
    const newDeveloper = ['Anton', 'Gleb']

    const allDevelopers = currntDeveloper.concat(newDeveloper)
    console.log(allDevelopers)

Ответ:

    ['Maxim', 'Oleg', 'Anton', 'Gleb']

Второй вариант:

    const currntDeveloper = ['Maxim', 'Oleg']
    const newDeveloper = ['Anton', 'Gleb']

    const allDevelopers = currntDeveloper.concat(newDeveloper, currntDeveloper)
    console.log(allDevelopers)

Ответ:

    ['Maxim', 'Oleg', 'Anton', 'Gleb', 'Maxim', 'Oleg']

## Spread-оператор (объединение массивов)

Уберает массив и выводит элементы через запятую

    const currntDeveloper = ['Maxim', 'Oleg']
    const newDeveloper = ['Anton', 'Gleb']

    const allDevelopers = [
        ...currntDeveloper,
        ...newDeveloper,
    ]

    console.log(allDevelopers)

Ответ:

    'Maxim', 'Oleg', 'Anton', 'Gleb'