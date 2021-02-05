/* Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и
выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

let arr = [21, 2, 0, null, undefined, 246, 8, 1, 0];
let arr1 = [21, 2, 0, null, undefined, 246, 8, 1, 0];
let arr2 = [0, 2, NaN, null, undefined, 246, 8, 1, 0];
let arr3 = [21, 2, 0, null, undefined, 245, 8, 1, null];

function getArraysOddAndEvenCount(arr) {
    let zerocount = 0;
    let numbercount = 0;
    let evencount = 0;
    let oddcount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            numbercount += 1;
            if (arr[i] === 0) {
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    }
    console.log(`В массиве ${numbercount} цифр, из них ${zerocount} нулей, ${evencount} чётных и ${oddcount} нечётных!`);
}

getArraysOddAndEvenCount(arr);
getArraysOddAndEvenCount(arr1);
getArraysOddAndEvenCount(arr2);
getArraysOddAndEvenCount(arr3);


// Ещё есть вариант для имени - getArrayNumberCount
