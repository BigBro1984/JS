// - 1) Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Ведіть перше число');
let num2 = +prompt('Ведіть друге число ');
if (num1 > num2) {
    alert(`Число  ${num1}  більше `);
} else if (num1 === num2) {
    alert(`Числа ${num1} і ${num2} рівні `);
} else {
    alert(`Число  ${num2}  більше `)
}


//- 2) У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90. Користувач вводить номер квартири просто в змінні або через prompt('') .
//  Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let flat = +prompt("Введіть номер квартири:")
if (flat >= 1 && flat <= 20) {
    console.log("Перший  під'їзд ")
} else if (flat > 20 && flat <= 48) {
    console.log("Другий  під'їзд")
} else if (flat > 48 && flat <= 90) {
    console.log(" Третій під'їзд");
} else {
    console.log("Ви ввели неправильний номер кварири")
}

// - 3)Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = prompt("Enter number");
if (number === 0) {
    console.log("Вірно")
} else {
    console.log("Не вірно")
}

// - 4) Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else


let a = prompt("Enter Data");

if (typeof a === "number") {
    console.log(1);
}
else if (typeof a === "string") {
    console.log(2);
}
else if (typeof a === "boolean") {
    console.log(3);
}
else if (typeof a === "object") {
    console.log(4);
}
else {
    console.log("another")
}

// 5) - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//      Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

 let temp = +prompt("Введіть температуру: ")
 if (tem >= 10 && temperature <= 22) {
     console.log("Ми йдемо ВЧИТИСЯ");
 } else {
    console.log("Cидимо вдома і вчимося ОНЛАЙН")
 }

// 6)- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//  числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ...

let number1 = +prompt("Введіть число: ")

 switch (number1) {
    case 1:
       console.log("Ти виграв авто !!")
         break;
    case 2:
       console.log("Ти виграв телефон !!");
        break;
     case 3:

        console.log("Ти виграв PS5 ");

        break;

    case 4:

        console.log("Ти виграв кота");

        break;

    case 5:

        console.log("Ти виграв 1000грн ")

        break;

    default:

        console.log("Не правильне число")
 }