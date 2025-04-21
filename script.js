// 5.10.1
/* 
let userNum = prompt("Введите число:");
userNum = +userNum;

if (isNaN(userNum) || userNum === 0) {
    alert("Нужно ввести число");
} else { 
    alert(userNum);
    alert(userNum ** 2);
    alert(userNum ** 3);
}

*/

// 5.10.2
/*
let promoCode = prompt("Введите промокод: ");

if (promoCode.toLowerCase() === "скидка") {
    alert("Промокод применён");
} else { 
    alert("Промокод не работает");
}
*/

// 5.10.3
/*
let userName = prompt("Введите ваше имя: ");
let userYear = prompt("Введите год вашего рождения: ");
let userAge;

if (isNaN(userYear) || userYear === 0) {
    alert("Год должен быть числом!");
} else { 
    userAge = 2025 - userYear;
    alert(`${userName}: ${userAge}`);
}

*/

// 5.10.4
/* 
let userName = prompt("Введите ваше имя: ");
let userYear = prompt("Введите год вашего рождения: ");
let userAge;

if (isNaN(userYear) || userYear === 0) {
    alert("Год должен быть числом!");
} else { 
    userAge = 2025 - userYear;
    if (userAge % 10 === 1) {
        alert(`${userName}: ${userAge} год`);
    }
    else if (userAge % 10 === (2 || 3 || 4)) {
        alert(`${userName}: ${userAge} года`);
    }
    else { 
        alert(`${userName}: ${userAge} лет`);
    }
}

*/

//5.10.5
/* 
let userAge = prompt("Введите ваш возраст: ");
let maxCreditAmount;
let userCreditAmount;

if (isNaN(userAge) || userAge === "") {
    alert("Нужно ввести число");
} else { 
    if (userAge < 18 || userAge > 65) {
        alert("Мы не можем выдать вам кредит");
    }
    
    if (userAge >= 18 && userAge <= 21) {
        maxCreditAmount = 50000;
    }
    
    if (userAge >= 22 && userAge <= 35) {
        maxCreditAmount = 400000;
    }
    
    if (userAge >= 36 && userAge <= 65) {
        maxCreditAmount = 1000000;
    }
}

if (maxCreditAmount != undefined) { 
    userCreditAmount = prompt(`Мы можем выдать вам максимум ${maxCreditAmount}.\nВведите сумму кратную 1000.`);
}

if (userCreditAmount != undefined) { 
    if (userCreditAmount % 1000 === 0 && userCreditAmount <= maxCreditAmount) {
        alert(`Кредит на сумму ${userCreditAmount} выдан.`);
    } else if (userCreditAmount % 1000 != 0 && userCreditAmount <= maxCreditAmount) {
        alert(`Вы ввели значение не кратное 1000. Мы можем выдать максимум ${userCreditAmount - userCreditAmount % 1000}`)
    } else { 
        alert(`Ошибка! Вы ввели сумму выше допустимой. Мы можем выдать максимум ${maxCreditAmount}`)
    }
}

*/

// 6.6.1
/*
let word = prompt("Введите слово для проверки: ")

let wordReversed = "";

if (isNaN(+word)) {
    for (let i = -1; i >= -word.length; i--) {
        wordReversed += [word.at(i)];
    }

    if (word.toLowerCase() === wordReversed.toLowerCase()) {
        console.log(`Слово ${word} является палиндромом`)
    } else { 
        console.log(`Слово ${word} не является палиндромом`)
    }
} else { 
    alert("Нужно ввести слово!");
}

*/

//6.6.2
/*
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 

const uniqueSet = new Set(arr);

const uniqueArr = Array.from(uniqueSet);

console.log(uniqueArr);

*/

//6.6.3
/*
let userNum = +prompt("Введите число: ");

const numArr = [];

if (isNaN(userNum) || userNum === 0) {
    alert("Вы не ввели число");
} else { 
    for (let i = 0; i <= userNum; i++) { 
        numArr.push(i);
    }
    console.log(numArr);
}

*/

//6.6.4
/*
let symbol;
let lineArr = [];
let symbolCount = 0;

for (let i = 0; i < 3; i++) {
    lineArr[i] = [];
    for (let j = 0; j < 3; j++) { 
        if (symbolCount % 2 === 0) {
            symbol = 'X';
        } else { 
            symbol = 'O'
        }
        symbolCount++;
        lineArr[i][j] = symbol;
    }
    
}

let game = '';
for (let i = 0; i < lineArr.length; i++) { 
    for (let j = 0; j < lineArr[i].length; j++) { 
        game += `${lineArr[i][j]} `
    }
    game += '\n'
}

console.log(game);

*/

//6.6.5
/*
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (key in obj) { 
    let objValue = obj[key];
    if (Array.isArray(objValue)) { 
        for (value of objValue) { 
            arrValues.push(value);
        }
        continue;
    }

    arrValues.push(objValue);
}

console.log(arrValues);

*/