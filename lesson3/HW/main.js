// 1) --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let num = [5, 3, 4, 10, 13];
let str = ["home", "Машина", "Okten", "робота", "Java"];
let arr = ['школа', 1944, true, false, 'hi'];
console.log(num);
console.log(str);
console.log(arr);

//2) -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr1 = [];
arr[0] = 7;
arr[1] = 1994;
arr[2] = "Листопад";
console.log(arr1);

// 3)- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello Mentor</div>`)
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello Mentor! - ${i}</div>`)
}

let a = 0;
while (a < 20) {
    document.write(`<div><h1>Hello Mentor!</h1></div>`)
}

let b = 0;
while (b < 20) {
    document.write(`<div>Hello Mentor! - ${b}</div>`)

}


// 4)- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.-
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.-
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}


let stringarr = ["two", "console", "PS5", "work", "Robot", "anonimus", "10", "5", "423", "1431"];

for (i = 0; i < stringarr.length; i++) {
    console.log(stringarr[i])
}

let arr4 = [942, 8, 'hello', 2, 10, true, 'Okten', 55, 33, false];
for (let i = 0; i < arr3.length; i++) {
    if (typeof (arr4[i]) === "boolean") {
        console.log(arr4[i]);
    }
}

let arr5 = [942, 8, 'hello', 2, 10, true, 'Okten', 55, 33, false];
for (let i = 0; i < arr3.length; i++) {
    if (typeof (arr5[i]) === "number") {
        console.log(arr5[i]);
    }
}

let arr6 = [942, 8, 'hello', 2, 10, true, 'Okten', 55, 33, false];
for (let i = 0; i < arr6.length; i++) {
    if (typeof (arr6[i]) === "string") {
        console.log(arr6[i]);
    }
}

// 5) - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let arr8 = [];
arr8[0] = 'Hello';
arr8[1] = 3421;
arr8[2] = "World";
arr8[3] = "New";
arr8[4] = true;
arr8[5] = false;
arr8[6] = 82134;
arr8[7] = "Name";
arr8[8] = "Okten";
arr8[9] = 3281;

for (let i = 0; i < arr8.length; i++) {
    console.log(arr8[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log('Крок циклу ' + i + ' ');
    document.write('Крок циклу : ' + i + ' ');
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('Крок циклу ' + i + ' ');
    document.write('Крок циклу : ' + i + ' ');
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log('Крок циклу ' + i + ' ');
    document.write('Крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {

    if (i % 2 === 0) {
        console.log('Крок циклу ' + i + ' ');
        document.write('Крок циклу ' + i + ' ');
    }

    // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    for (let i = 0; i < 100; i++) {

        if (i % 2 !== 0) {
            console.log('Крок циклу ' + i + ' ');
            document.write('Крок циклу ' + i + ' ');
        }

    }
    }
