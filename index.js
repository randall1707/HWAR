// 1. Дан непустой массив чисел. Написать алгоритм (не исползьуя встроенные методы), который изменит исходный массив так, чтобы числа в нём шли в обратном порядке


// const myArray=[1,2,3,4,5];


// for (let i=myArray.length-1;i>=0; i-=1) {
//     console.log(myArray[i]);
    
// }

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. Дан массив и переменная с неким значением. Реализовать алгоритм встроенного метода unshift, не используя встроенные методы

// const myArray = [1, 2, 3];
// const newElement = 'begin';


// for (let i = myArray.length - 1; i >= 0; i -= 1) {
//     myArray[i + 1] = myArray[i];
// }

// myArray[0] = newElement;

// console.log(myArray);


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 3. Дан некий объект и 10 попыток для пользователя, чтобы ввести названия полей этого объекта. Написать алгоритм, который по окончании выведет в консоль 2 массива:
// 	+ Поля, которые были в объекте
// 	+ Поля, которые не были в объекте


// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     hobby: 'Gardening',
// };

// const fieldsInObject = [];
// const fieldsNotInObject = [];

// let attempts = 10;

// for (let i = 0; i < attempts; i++) {
//     const userInput = prompt('Введите название поля: ');

//     if (myObject.hasOwnProperty(userInput)) {
//         fieldsInObject.push(userInput);
//     } else {
//         fieldsNotInObject.push(userInput);
//     }
// }

// console.log('Поля, найденные в объекте:', fieldsInObject);
// console.log('Поля, не найденные в объекте:', fieldsNotInObject);
