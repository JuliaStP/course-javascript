/* ДЗ 2 - работа с массивами и объектами */

// eslint-disable-next-line no-unused-vars
import { ProgressPlugin } from 'webpack';

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  // array = [5, 8, 10];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    fn(array[i], i, array);
  }
}
// forEach();

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  // array = [1, 2, 3];
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[i] = fn(array[i], i, array);
    // function fn() {
    //   return array[i] * 2;
    // }
  }
  // console.log(arr);
  return arr;
}
// map();

// function map(array, fn) {
//   array = ['lo', 'lab', 'luna'].map((item) => item.length);
//   console.log(array);
// }
// map();
// function map(array, fn) {
//   let i;
//   array = [5, 10, 20].map(i => i * 2);
//   console.log(array);
// }
// map();
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  const isInit = typeof initial !== 'undefined';
  let prev = isInit ? initial : array[0];

  for (let i = isInit ? 0 : 1; i < array.length; i++) {
    prev = fn(prev, array[i], i, array);
  }
  return prev;
}

// function reduce(array, fn, initial) {
//   array = [1, 2, 3, 4];

//   let sum = 0;
//   for (let n of array)
//     sum = sum + n;
//   console.log(sum);
// }
// reduce();

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  // obj = { name: 'Julia', lastName: 'Andreeva', birthMonth: 'January' };
  const arr = [];
  for (const key in obj) {
    arr.push(key.toUpperCase());
  }
  // console.log(arr);
  return arr;
}
// upperProps();

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(obj, key, value) {
      obj[key] = value ** 2;
      return true;
    },
  });
}

export { forEach, map, reduce, upperProps, createProxy };
