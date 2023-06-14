"use strict";
// test alert("Я и есть JavaScript!");


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


// alert( null || 2 || undefined );  2


// alert( alert(1) || 2 || alert(3) ); 



// let i = 3;

// while (i) {
//   alert( i-- );
// }

// Выведет последним 1



// let i = 0;
// while (++i < 5) alert( i ); выведет от 1 до 4

// let i = 0;
// while (i++ < 5) alert( i ); выведет от 1 до 5


// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; --i) alert( i ); выведет одинакого

// вывод четных чисел от 2 до 10

// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while(i < 3){
//     alert( `number ${i}!` );
//     i++
// }


// let promptValue;
// do {
//     promptValue = prompt("Введите число больше 100", '')
// } while (promptValue <=100 && promptValue)


// Вывод простых чисел от 2 до n

// let n = prompt("Введите число, до которого вывести простые числа");

// custom_metka: for (let i = 2; i <= n; i++){
//      for (let j = 2; j < i; j++){
//          if(i % j == 0){
//              continue custom_metka;
//          }
//          console.log(i)
//      }
// }


// ЗАДАТЬ ЗДЕСЬ ВОПРОС
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log( i ); // простое число
// }


// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// if (browser == "Edge"){
//     alert( "You've got the Edge!" );
// }  else if (browser == "Chrome" || browser == "Firefox"  || browser == "Safari" || browser == "Opera" ){
//     alert( 'Okay we support these browsers too' );
// } else{
//     alert( 'We hope that this page looks ok!' );
// }

// и наоборот
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// switch(number){
//     case(0):
//     alert('Вы ввели число 0');
//     break;
//     case(1):
//     alert('Вы ввели число 1');
//     break;
//     case(2):
//     case(3):
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// Обязателен ли "else"?

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }


//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }

// работать будут одинакого


// Перепишите функцию, используя оператор '?' или '||'


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }


//   function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }

//   function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
//   alert( pow(x, n) );






// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );