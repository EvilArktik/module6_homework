/*Задание 5.

Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/


const getNumSqure = (x, n) => Math.pow(x, n);


console.log(getNumSqure(2,4));

// И вариант с использованием цикла

const getSqure = (x, n) => {
    let result = x;
    for (let i = 1; i < n; ++i){
        result *= x;
    }
    return result;
};

console.log(getSqure(2,5))