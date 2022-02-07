"use strict";
// alert("Я и есть JavaScript!");


// // Переменные
// let admin,
//     name = "Джон",
//     planetName = "Земля",
//     currentUserName = "Это я";
// alert(admin = name);
// console.log(planetName);


// name = "Ilya";

// alert( `hello ${1}` ); // Выведет hello 1

// alert( `hello ${"name"}` ); // Выведет hello name

// alert( `hello ${name}` ); // Выведет hello Ilya



// let inquiryName = prompt("Как вас зовут?");
// alert(`Вас зовут ${inquiryName}`);



// let a = 1, b = 1;

// let c = ++a; // c = 2
// console.log("c = " + c)
// let d = b++; // ? d = 1
// console.log("d = " + d)

// let a = 2;

// let x = 1 + (a *= 2); // x = 5

// "" + 1 + 0 // " 10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3"  // 6
// 4 + 5 + "px" / "9px"
// "$" + 4 + 5 // '$45'
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 Infinity
// "  -9  " + 5  "  -9  5" 
// "  -9  " - 5  NaN (Ошибочка -14)
// null + 1 // 1 
// undefined + 1 // 1 (Ошибочка NaN)
// " \t \n" - 2 // -2


// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 3



// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false


// let inquiryLangName = prompt("Какое «официальное» название JavaScript?", '')
// if (inquiryLangName === "ECMAScript"){
//     alert("Верно!")
// } else {
//     alert("Не знаете? ECMAScript!");
// }

// let inquiryValue = prompt("Введите число", '')
// if (inquiryValue > 0){
//     alert("значение больше нуля!")
// } else if (inquiryValue < 0) {
//     alert("значение меньше нуля");
// } else{
//     alert("Значение равно нулю")
// }



// let result,
//     a = 4,
//     b = 5;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// a + b < 4 ?   result = 'Мало' :  result = 'Много';
// alert(result)


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


// let login;
// (login == 'Сотрудник') ?   message = 'Привет' : (login == 'Директор') ?  message = 'Здравствуйте' : (login == '')  ? message = 'Нет логина'  :  message = '';
// alert(message)