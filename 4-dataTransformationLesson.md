# Lesson 4. Преобразование типов.

JavaScript имеет динамическую типизацию

Преобразовать можно к строке, к числу и к boolean

## 1. К строке

Явное преобразование (лучше использовать, меньше багов в коде в будушем)

    const age = 20
    console.log(typeof age)
    console.log(typeof String(age))

Ответ:

    number
    string

Неявное преобразование (лучше не использовать)

    const Age2 = '1' + 20
    console.log(typeof age2)

Ответ:

    string

## 2. К числу

Явное преобразование (лучше использовать, меньше багов в коде в будушем)

    const experience = '5'
    console.log(typeof experience)
    console.log(typeof Number(experience))

Неявное преобразование (лучше не использовать)

    console.log(typeof +experience)

Ответ:

    string
    number
    number

NaN - not a number

    consol.log(Number('Hello World'))

Ответ:

    NaN

## 3. К Boolean

    consol.log(Boolean('Hello World'))
    consol.log(Boolean(5))

Ответ:

    true
    true

null, undefined, NaN, 0, ''

Ответ:

    false