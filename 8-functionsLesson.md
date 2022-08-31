# Функции
Декларируемую функцию можно вызывать до её определения, в отличие от остальных функций

## Function declaration

    function feedAnimal(animalName = 'Собака'){
        console.log(`Животное ${animalName} было покормлено`)
    }

    feedAnimal('Кот')

## Function expression

    const feedAnimal = function(animalName = 'Собака'){
        console.log(`Животное ${animalName} было покормлено`)
    }

    feedAnimal('Кот')

## Стрелочная функция

    const feedAnimal = (animalName = 'Собака') => {
        console.log(`Животное ${animalName} было покормлено`)
    }

    feedAnimal('Кот')

## Возращение значения из функции

    const multiplyByFive = (number) => {
        return number * 5
    }

    const result = multiplyByFive(100)
    console.log(result)

Второй вариант

    const multiplyByFive = (number) => number * 5

    const result = multiplyByFive(100)
    console.log(result)

## Название функций

Обновляет контент для слайдера

    function updateSliderContent() {}

Возращает пользователя на предыдущую страницу

    function goBackToPreviousPage() {}

Воспроизводит голос птицы

    function makeSoundOfBird() {}