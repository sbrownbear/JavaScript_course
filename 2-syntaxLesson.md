Точка с запятой не учитывается, пробелы не учитываются, JavaScript регистрозависимый.

    console.log('Hello World')
    console.log('Hello World');

Комментария 

    // console.log('Hello World')

 или

    /*
    console.log('Hello World')
    */

## Переменные

var (устаревший вариант), let и const. let и var можем переопределить (присвоить переменной новое значение), а const нет.

    var text = 'Hello World'
    let name = 'Sergey'
    console.log(text)
    console.log(name)

Ответ:

    Hello World
    Sergey

const 

    const language = 'English'
    language = 'Russian'
    console.log(language)

Ответ:

    Uncaught TypeError: index.js: 1
    Assignment to constant variable.
            at index.js: 1

