/* Задание 4.

Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число,
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
 */

i = 1;
const int = function(a, b) {
    if (i <= b) {
        console.log(i);
        i++
    }else {
        clearInterval(iterval1)
    }
};

const iterval1 = setInterval(int, 1000, 1, 5);

