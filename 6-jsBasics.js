// Task #1

const existedUserLogin = 'the_best_user'
const existedUserPassword = 12345678

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}`)
} else {
    alert('Пароль (или) логин введены неверно!')
}

// Task #2

const question1 = 'Сколько будет 2 + 2?'
const question2 = 'Сколько будет 2 * 2?'
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще конфет. Сколько в итоге конфет осталось у Маши?'
const question5 = 'Сколько будет 2 + 2 * 2?'

const answer1 = 4
const answer2 = 4
const answer3 = 1
const answer4 = 12
const answer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

const userAnswer1 = prompt(question1)
if (Number(userAnswer1) === answer1) {
    alert('Ответ верный')
    correctAnswers += 1
} else {
    alert('Ответ неверный')
    incorrectAnswers +=1
}

const userAnswer2 = prompt(question2)
if (Number(userAnswer2) === answer2) {
    alert('Ответ верный')
    correctAnswers += 1
} else {
    alert('Ответ неверный')
    incorrectAnswers += 1
}

const userAnswer3 = prompt(question3)
if (Number(userAnswer3) === answer3) {
    alert('Ответ верный')
    correctAnswers += 1
} else {
    alert('Ответ неверный')
    incorrectAnswers += 1
}

const userAnswer4 = prompt(question4)
if (Number(userAnswer4) === answer4) {
    alert('Ответ верный')
    correctAnswers += 1
} else {
    alert('Ответ неверный')
    incorrectAnswers += 1
}

const userAnswer5 = prompt(question5)
if (Number(userAnswer5) === answer5) {
    alert('Ответ верный')
    correctAnswers += 1
} else {
    alert('Ответ неверный')
    incorrectAnswers += 1
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)

// Task #3

if(confirm('JavaScript появился в 1995 году?') == true) {
    alert('Верно')
} else {
    alert('Неверно! JavaScript появился в 1995 году')
}

if (confirm('Спецификация JavaScript называется ECMAScript?') == true) {
    alert('Верно')
} else {
    alert('Неверно! Спецификация JavaScript называется ECMAScript')
}

if (confirm('JavaScript был создан за 1 месяц?') == true) {
    alert('Неверно! JavaScript был создан за 10 дней')
} else {
    alert('Верно! JavaScript был создан за 10 дней')
}

// Task #4

for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!')
    if (newStudent) {
        newStudent = newStudent.trim()
        alert(`Добро пожалоать, ${newStudent}!`)
    }
}

let i = 0
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!')
    if (newStudent) {
        newStudent = newStudent.trim()
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    i += 1
}

let j = 0
do {
    let newStudent = prompt('Введите имя нового студента!')
    if (newStudent) {
        newStudent = newStudent.trim()
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    j += 1
} while (j < 3)

// Task #5

let sum = 0
for (let i = 0; i <= 100; i += 1) {
    sum += i
}
alert(sum)

// Task #6

const clientName2 = 'Игорь'
let clientSpentForAllTime2 = 110
let clientSpentToday2 = 25

let discount2 = 0

if (clientSpentForAllTime2 >= 100 && clientSpentForAllTime2 < 300) {
    discont2 = 10
} else if (clientSpentForAllTime2 >= 300 && clientSpentForAllTime2 < 500) {
    discount2 = 25
} else if (clientSpentForAllTime2 >= 500) {
    discount2 = 30
}

alert(`Вам предоставляется скидка в ${discount2}%!`)

clientSpentToday2 = clientSpentToday2 - (clientSpentToday2 * discount2 / 100)
clientSpentForAllTime2 += clientSpentToday2

alert(`К оплате ${clientSpentToday2}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime2}.`)

// Task #7

const clientName = prompt('Введите имя клиента');
let clientSpentToday = prompt('Сколько клиент потратил сегодня?');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

if (!clientSpentToday || !clientSpentForAllTime) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
} else {
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    }
    
    alert(`Вам предоставляется скидка в ${discount}%!`);
    
    clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
    clientSpentForAllTime += clientSpentToday;
    
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
}

// Task #8

const password = prompt('Введите пароль');
const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

if (password.length < 3 || password.length > 30) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < password.length; i += 1) {
    const symbol = password[i];
    const isNumberSymbol = !isNaN(parseInt(symbol));
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}