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
