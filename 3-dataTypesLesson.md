# Lesson 3. Типы данных.

1. Примитивы (простые типы) - 7 (string, number, boolean, null, undefined, symbol, bigint)

2. Не Примитивы (сложные типы) - 1 (object)

## 1. string (строка) не может быть больше (2^53 - 1) или меньше -(2^53 - 1)

    const drink = 'Coffee'
    console.log(drink)

Ответ:

    Coffee

## 2. number (число)

    const age = 26
    console.log(age)

Ответ:

    26

## 3. boolean (true или false)


    const coldDrink = true
    console.log(coldDrink)

Ответ:

    true

## 4. null (пусто, значение не известно) 

    const animals = null
    console.log(animals)

Ответ:

    null

## 5. undefined (значение не было присвоено)

    const people = 
    console.log(people)

Ответ:

    undefined

## 6. object (объект) - сложный тип данных

    const iceDrink = {
        drink = 'Coffee',
        age = 26,
        coldDrink = true,
    }

## 7. symbol (символ)

    const id = Symbol('id')
    console.log(id)

Ответ:

    Symbol(id)

## 8. bigint (большое число)

    const bigInNumber = BigInt(10)
    console.log(bigInNumber)

Ответ:

    10n

# Как опредилить тип данных: typeof

    console.log(typeof 'Sergey')
    console.log(typeof 26)
    console.log(typeof false)
    console.log(typeof Symbol('id'))
    console.log(typeof undefined)
    console.log(typeof 10n)
    console.log(typeof console)

Ответ:

    string
    number
    boolean
    symbol
    undefined
    bigint
    object

## Исплючения

    console.log(typeof null)
    console.log(typeof console.log)

ответ:

    object
    function




