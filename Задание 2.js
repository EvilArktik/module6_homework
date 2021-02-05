/* Задание 2.
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
 */

function checkPrimeNumber(num) {
    let result = `${num} - простое число`;
    if (num < 2 || num >= 1000) {
        return "Число должно быть больше 1 и меньше 1000";
    } else if (num == 2) {
        return result;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = `${num} - не простое число`;
                break;
            }
        }
    }
    return result;
}


console.log(checkPrimeNumber(prompt("Введите число от 2 до 1000")));


// И ещё один вариант решения:

function checkPrimeNumber(num) {
    let flag = true;
    if (num < 2 || num >= 1000) {
        return "Число должно быть больше 1 и меньше 1000";
    } else if (num !== 2) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag === true) {
        return `${num} - простое число`;
    } else {
        return `${num} - не простое число`;
    }
}


console.log(checkPrimeNumber(prompt("Введите число от 2 до 1000")));

