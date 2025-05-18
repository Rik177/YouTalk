export function getPercents(percent, number) {
    if (percent < 0 || number < 0) { return "Введены числа меньше 0"; }
    if (typeof (percent) != "number" || typeof (number) != "number") { return "Вы ввели не числа"; }
    if (isNaN(percent) || isNaN(number)) { return "Введено недопустимое значение" }

    return percent * number / 100;
}