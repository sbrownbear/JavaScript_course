const existedUserLogin = 'the_best_user'
const existedUserPassword = 12345678

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}`)
} else {
    alert('Пароль (или) логин введены неверно!')
}

