# Lesson 10. Objects.

    const developer = {
        name: 'Maxim',
        job: 'Front-End разработчик',
        experience: 24,
        jobAllInfo: {
            type: 'Front-End',
            framework: 'ReactJS'
        }
    }

## Получаем объекты по его ключу:

Первый способ: в приоритете

    console.log(developer.name)
    console.log(developer.jobAllInfo)
    console.log(developer.jobAllInfo.type)

Ответ:

    Maxim
    type: 'Front-End',
    framework: 'ReactJS'
    Front-End

Второй способ:

    console.log(developer['name'])
    console.log(developer[jobAllInfo][type])
    const key = 'name'
    console.log(developer[key])

Ответ:

    Maxim
    Front-End
    Maxim

# Добавление, изменение, удаление элемента

    const student = {
        id: 1,
        programmingLanguage: 'JavaScript',
        hasExperienceInReact: false,
    }

## Добавление

    student.experience = 6
    console.log(student)

Ответ:

    experience = 6,
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false

## Удаление

    delete student.hasExperienceInReact

## Изменение

    student.experience = 12
    console.log(student.experience)

Ответ:

    12

# Lesson 10.2. Ссылочный тип данных.

7 - примтивы (не ссылочный тип)

1 - не примитив - объект (ссылочный тип)

    const setName = (entity, value) => {
        if (typeif entity === 'object') {
            entity.name = value
        } else {
            entity = value
        }
    }

    const developer = {
        name: 'Maxim'
    }
    let developerName = 'Maxim'

    setName(developer, 'Max')
    setName(developerName, 'Max')

    console.log(developer)
    console.log(developerName)

Ответ:

    Max
    Maxim

# Lesson 10.3. Перебор объектов. Создание массивов из объектов. Как итерировать объекты.

    const goodInfo = {
        id: 1,
        price: 80,
        currency: '$',
        name: 'shoes',
    }

## Цикл for in (перебор объектов) - устаревший способ. for of (перебор массивов).

    for (const key in goodInfo) {
        console.log(key)
        const value = goodInfo[key]
    }

Ответ:

    id
    1
    price
    80
    currency
    $
    name
    shoes

## Метод Object.keys (создает массив из ключей)

    const keys = Object.keys(goodInfo)
    console.log(keys)

Ответ:

    ['id', 'price', 'currency', 'name']

## Метод Object.values (создает массив из значений)

    const values = Object.values(goodInfo)
    console.log(values)

Ответ:

    ['1', '80', '$', 'shoes']

## Метод Object.entried(выводит ключи и значения)

    const entries = Object.entries(goodInfo)
    console.log(entries)

# Lesson 10.4. Работа с ключами объекта.

Ключ может быть String | Symbol

    const user = {
        name: 'Maxim',
        10: '1234',
        undefined: undefined,
        [false]: false,
    }

    console.log(user)

Ответ: все строковые

    Maxim
    1234
    undefined
    false

Привер №2

    const user = {
        name: 'Maxim',
        name: 'Sergey',
        name: 'Oleg',
    }

    console.log(user)

Ответ: ключ примениться только к последнему знаению

    Maxim
    1234
    undefined
    false

## in

    console.log('name' in user)
    console.log('language' in user)

Ответ:

    true
    false

# Lesson 10.5. Объединение нескольких объектов в один.

    const developerInfo = {
        age: 25,
        experience: 3,
    }

    const developerExtraInfo = {
        name: 'Sergey'
        height: 180,
        isJunior: false,
    }

Способ №1 (в приоритете)

    const developer = {
        ...developerInfo,
        ...developerExtraInfo,
        name: 'Olga'
    }

    console.log(developer)

Ответ:

    age: 25
    experience: 3
    name: 'Olga'
    height: 180
    isJunior: false

Способ №2. Object.assign (устаревший вариант)

    const developer2 = Object.assign(developerInfo, developerExtraInfo)

# Lesson 10.6. Опциональная цепочка. (?.)

    const developer = {
        name: 'Maxim',
        job: 'Front-End разработчик',
        experience: 24,
        jobAllInfo: {
            type: 'Front-End',
            framework: 'ReactJS',
        }
    }

### Опциональная цепочка

Вариант №1

    console.log(developer && developer.jobAllInfo && developer.jobAllInfo.framework)

    if (developer.jobAllInfo.framework) {
        console.log('Разработчик уже знает фреймворк')
    } else {
        console.log('Разработчик ещё не знает фреймворк')
    }

Вариант №2 (Опциональная цепочка)

    console.log(developer?.jobAllInfo?.framework?.name)

    if (developer.jobAllInfo.framework) {
        console.log('Разработчик уже знает фреймворк')
    } else {
        console.log('Разработчик ещё не знает фреймворк')
    }

