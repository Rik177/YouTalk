// 7.7.1
/*
function printInfo() { 
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "John",
    age: 28
}

printInfo.call(person);

*/

// 7.7.2
/*
function calculate(a, b, operator) { 
    switch (operator) { 
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            console.log("Недопустимое значение оператора!")
    }
}

const obj = {
    a: 10,
    b: 5,
    operator: "+"
}

let result = calculate.apply(obj, [2, 3, "+"]);

console.log(result);

*/

// 7.7.3
/*
const usersArray = [
    { name: "John", age: 18 },
    { name: "Olivia", age: 82 },
    { name: "Alice", age: 17 },
    { name: "Alexander", age: 32 },
    { name: "Sam", age: 16 }
]

const adultUsersArray = usersArray.filter((obj) => obj.age > 17);

const userNamesArray = usersArray.map((obj) => { 
    return obj.name;
})

console.log(adultUsersArray);
console.log(userNamesArray);

*/

// 7.7.4
/*
function setFullName(name) { 
    this.fullName = name;
}

const person = {
    fullName: ""
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person);

*/

//7.7.5
/*
function sortedNums(arr) { 
    const uniqueSet = new Set(arr);
    const uniqueArr = Array.from(uniqueSet);
    uniqueArr.sort((a, b) => a - b);
    return uniqueArr;
}

const numArr = [2, 4, 3, 2, 5, 29, 13, 5, 23, 13, 4, 6, 3];

console.log(sortedNums(numArr))

*/