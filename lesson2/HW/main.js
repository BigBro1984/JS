// - 1) Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time;
time = prompt("Enter minute");
if ( time >= 0 && time <= 15 ) {
    console.log("Перша")
}
else if ( time > 15 && time <= 30 ){
    console.log("Друга")
}
else if ( time > 30 && time <= 45 ) {

    console.log('Третя')

}

else if ( time > 45 && time <= 59 )
{
    console.log('Четверта')
}
else {
    console.log("error")
}

//  -  2) У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day;
day = prompt("Enter day [1-31]")

if ( day >= 1 && day <= 10)
{
    alert("Перша")
}

else if ( day > 10 && day <= 20 )
{
    alert("Друга")
}

else if ( day > 20 && day <=31 )
{
    alert ("Третя")
}

else {
    alert("error")
}

// - 3) У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = true;
if (test === true) {
     console.log("Неправильно");
 }
else {
    console.log("Вірнo")
 }

// - 4) Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let num;
num = promt("Enter number");

if ( num !== 0 ){
    console.log("Вірно")
}

else{
    console.log("Не вірно")
}

//- 5) Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let dayw;
dayw = promt("Enter day ")
switch (dayw){
    case 1 :
        prompt("Піти на зустрічь ");
        break;

    case 2 :
        prompt("Піти в кіно ");
        break;

    case 3 :
        prompt("Випити пиво ");
        break;

    case 4 :
        prompt("Поїхати до батьків ");
        break;

    case 5 :
        prompt("Помити кота ");
        break;

    case 6 :
        prompt("Піти до лікаря ");
        break;

    case 7 :
        prompt("Піти  до церкви");
        break;
    default:
    console.log ("Не правильно введений день ")
}

//  6) Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year1;
year1 = prompt("Enter year")
if ( year1 % 4  === 0 )
{
    console.log("Високосний ")

}
else {
    console.log("Не високосний")
}

//- 6) Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let name;
 name = prompt("Яка «офіційна» назва JavaScript?")
 if (name === "ECMAScript") {
  console.log("Правильно!");
}
else {
   console.log("Не правильно !");
 }
