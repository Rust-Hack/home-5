//1 task
const deleteObj = {
    name: 'Gleb',
    age: 21
}

for(let key in deleteObj) {
    delete deleteObj[key];
}

console.log(deleteObj);

//2 task
const objTwoKeys = {
    name: 'Vasya',
    age: 51
}

const key = function (a, b){
    for(let key in a) {
        if(a[key] === b) {
            return true;
        }
    }
    return false;
}

console.log(key(objTwoKeys, 'Vasya'));
console.log(key(objTwoKeys, 52));

//3 task
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

const allKeysAndМalues = function (obj) {
    for(let key in obj) {
        console.log(key);
    }
    for(let key in obj) {
        console.log(obj[key]);
    }
}

allKeysAndМalues(student);

// 4 task
const colors = {
  'ru pum pu ru rum': {
     red: 'красный',
     green: 'зеленый',
     blue: 'синий'
   },
}

console.log(colors["ru pum pu ru rum"].red);

// 5 task
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

const middleSalary = function (a) {
    let salary = 0;
    for(let key in salaries) {
        salary += salaries[key];
    }
    salary = salary / Object.keys(a).length
    return salary;
}

console.log(middleSalary(salaries));

// 6 task
const user = {};

user.login = prompt('Введите логин пользователя');
user.password = prompt('Введите пароль');

let login = prompt('Подтвердите логин');
let password = prompt('Подтвердите пароль');

const examination = function (user, login, password) {
    if(user.login === login && user.password === password) {
        return alert('Добро пожаловать');
    }
}

examination(user, login, password);

// const data = confirm('Логин: ' + user.login + ' Пароль:' + user.password + ' данные введены верно?' );

// if(data) {
//     alert('Добро пожаловать');
// }

// 7 task

const footballCheck = function(check) {
    let firstNumber = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let secondNumber = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    switch(check[0]) {
        case '0': firstNumber = firstNumber[0]; break;
        case '1': firstNumber = firstNumber[1]; break;
        case '2': firstNumber = firstNumber[2]; break;
        case '3': firstNumber = firstNumber[3]; break;
        case '4': firstNumber = firstNumber[4]; break;
        case '5': firstNumber = firstNumber[5]; break;
        case '6': firstNumber = firstNumber[6]; break;
        case '7': firstNumber = firstNumber[7]; break;
        case '8': firstNumber = firstNumber[8]; break;        
        default: firstNumber = firstNumber[9];
    }
    switch(check[2]) {
        case '0': secondNumber = secondNumber[0]; break;
        case '1': secondNumber = secondNumber[1]; break;
        case '2': secondNumber = secondNumber[2]; break;
        case '3': secondNumber = secondNumber[3]; break;
        case '4': secondNumber = secondNumber[4]; break;
        case '5': secondNumber = secondNumber[5]; break;
        case '6': secondNumber = secondNumber[6]; break;
        case '7': secondNumber = secondNumber[7]; break;
        case '8': secondNumber = secondNumber[8]; break;        
        default: secondNumber = secondNumber[9]; ;
    }
    return firstNumber + ' : ' + secondNumber;
}

console.log(footballCheck('2:6'));
