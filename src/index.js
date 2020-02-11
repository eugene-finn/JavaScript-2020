/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = fn(array[i], i, array);

        newArray.push(element);
    }
    
    return newArray;

}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let accumulator = initial || array[0];

    for (let i = initial ? 0 : 1; i < array.length; i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }
    
    return accumulator;

}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = Object.keys(obj);
    let arr2 = [];

    for (let i in arr) {
        if (arr.length != 0) {
            arr2.push(arr[i].toUpperCase());
        }
    }

    return arr2;
    
}

/*
 Задание 5 *:
 
 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

// let arrTest = [0, 1, 2, 3, 4, 5, 6];

function slice(array, from, to) {
    
    let end = to || array.length;
    let i = from || 0;
    let newArray = [];

    for (i; i <= end; i++) {
        newArray.push(array[i]);
    }
    
    return newArray
    
    // console.log(newArray);

}

// console.log(arrTest.slice(1, 4));
// slice(arrTest, 1, 4);
/*
 Задание 6 *:
 
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

function createProxy(obj) {
    return Proxy(obj);
}

/*
 Задание 7:
 Удалите пробелы между словами
  var a = " /var/www/site/Brand new   document.docx ";
 */

let a = ' /var/www/site/Brand new   document.docx ';
let b = ' /var/www/site/Brand new   document.docx ';

console.log(a.split(' ').join('')); // самый медленный
console.log(b.replace(/ /g, '')); // самый быстрый

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
