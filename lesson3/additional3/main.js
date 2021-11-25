// 1. Створити пустий масив та :  a. заповнити його 50 парними числами за допомоги циклу.
 let arr = [];
 let number = 0;
 for (let i = 0; i < 50; i++) {
    number += 2;
     arr[i] = number;
 }
 console.log(arr);

        // b. заповнити його 50 непарними числами за допомоги циклу.
 let arr = [];
 let number = 1;
 for (let i = 0; i < 50; i++) {
     number += 2;
     arr[i] = number;

 }
 console.log(arr);

        // c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
 let arr = [];
 for (let i = 0; i < 20; i++) {
     arr[i] = (Math.round(Math.random() * 100));
 }

 console.log(arr);

        // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
 let arr = [];
 for (let i = 0; i < 20; i++) {
     arr[i] = (Math.round(Math.random() * 724)+8);
 }

 console.log(arr);

 // 2. Вивести за допомогою console.log кожен третій елемен
 let arr = [];
 for (let i = 0; i < 20; i++) {
     arr[i] = (Math.round(Math.random() * 724)+8);
 }
 console.log(arr);

 for (let i = 2; i < arr.length; i+=3) {
     let arrEl = arr[i];
     console.log(arrEl);
 }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
 let arr = [];
 for (let i = 0; i < 20; i++) {
     arr[i] = (Math.round(Math.random() * 724)+8);
 }
 console.log(arr);

for (let i = 2; i < arr.length; i+=3) {
     if (arr[i] % 2 === 0) {
         let arrEl = arr[i];
         console.log(arrEl);
     }
 }

 // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
 let arr = [];
 for (let i = 0; i < 20; i++) {
     arr[i] = (Math.round(Math.random() * 724)+8);
 }
 console.log(arr);

 let arr2 = [];
 index = 0;
 for (let i = 2; i < arr.length; i+=3) {
     if (arr[i] % 2 === 0) {
         let arrEl = arr[i];
         console.log(arrEl);
         arr2[index] = arrEl;
         index++;
     }
 }
 console.log(arr2);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//    EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
 let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
 for (let i = 0; i < arr.length; i++) {
     if (arr[i + 1] % 2 === 0) {
         console.log(arr[i]);
     }
 }

// 6. Є масив з числами [10,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
 let sum = 0;
 let arr = [100, 250, 50, 168, 120, 345, 188];

 for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
 }
 sum = Math.round(sum / arr.length);
 console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
 let arr = [];
 let arr2 = [];
 let index = 0;

 for (let i = 0; i < 20; i++) {
     arr[i] = (Math.round(Math.random() * 20)) * 5;
     arr2[index] = arr[i];/     index++;
 }

 console.log(arr2);
//
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
 let arr = ['okten', 1993, true, false, 'hi', 42, 456, 'css', 'html', 228];
 let arr2 = [];
 let index = 0;

 for (let i = 0; i < arr.length; i++) {
     if (typeof (arr[i]) === "number") {
         arr2[index] = arr[i];
         index++;
     }
 }

 console.log(arr2)