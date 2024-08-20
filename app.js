// //!  20.08.24
//? Задание 21
// Создайте переменную lang и присвойте ей значение en или ru или de или kg используя тернарный
// оператор выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'

// let lang = "kg";
// if (lang === "en") {
//   console.log("This is english");
// } else if (lang === "ru") {
//   console.log("Это русский");
// } else if (lang === "de") {
//   console.log("Das ist Deutsch");
// } else if (lang === "kg") {
//   console.log("Бул кыргыз тили");
// }

// let lang1 = "kg";
// lang1 === "kg" ? console.log("Бул кыргыз тили") : console.log("error");

// let lang2 = "en";
// lang2 === "en" ? console.log("This is english") : console.log("error");

// let lang3 = "ru";
// lang3 === "ru" ? console.log("Это русский") : console.log("error");

// let lang4 = "de";
// lang4 === "de" ? console.log("Das ist Deutsch") : console.log("error");

//? Задание 22
// Создайте обьект user со значением { name: "Hello", age: 19, status: "student", class: "JS-44", school: "Motion" }
// Если возраст больше или равен 20 и статус равен student и школа равна Motion, то выведите в консоль сообщение
// "Привет, меня зовут {name} и я студент в {school} классе {class}"
// если нет то выведите в консоль
// "Привет, меня зовут {name} и мне {age} лет"

// let user = {
//   name: "john",
//   age: 19,
//   status: "student",
//   class: "JS-44",
//   school: "Motion",
// };

// if (user.age >= 20 && user.status == "student" && user.school == "Motion") {
//   console.log(
//     `Привет, меня зовут ${user.name} и я студент в ${user.school} классе ${user.class}`
//   );
// } else {
//   console.log(`Привет, меня зовут ${user.name} и мне ${user.age} лет`);
// }

//? Задание 23
// В переменной minute лежит число от 1 до 60. Определите в какую четверть часа попадает это
// число (в первую, вторую, третью или четвертую).Так же если число не находится
// в диапазоне от 1 до 60, то выведите
// "Число не верное"
// Например:
// minute = 10  -> 1minute = 25  -> 2
// minute = 30  -> 3

// let minute = 46;
// if (minute <= 15) {
//   console.log("в первую");
// } else if (minute >= 15 && minute <= 30) {
//   console.log("вторую");
// } else if (minute > 30 && minute <= 45) {
//   console.log("третью");
// } else if (minute > 45 && minute <= 60) {
//   console.log("четвертую");
// } else {
//   console.log("Число не верное");
// }

//? Задание 24
// Создайте переменную num с числом, состоящим из 6-ти цифр. Проверьте, что сумма первых трех цифр
// равняется сумме вторых трех цифр. Если это так - выведите true, в противном случае выведите false.

// let str = 245245;

// let num1 = str.toString();

// +num1[0] + +num1[1] + +num1[2] === +num1[3] + +num1[4] + +num1[5]
//   ? console.log("да")
//   : console.log("нет");

//? Задание 25
// В переменной month лежит какое-то число в диапазоне от 1 до 12. Определите в какую пору года попадает
// этот месяц (зима, лето, весна, осень).Так же если число не находится в диапазоне от 1 до 12, то выведите
// "Число не верное"

// let month = 1;
// if (month < 4) {
//   console.log("spring");
// } else if (month >= 4 && month <= 6) {
//   console.log("summer");
// } else if (month >= 6 && month <= 9) {
//   console.log("autumn");
// } else if (month >= 9 && month <= 12) {
//   console.log("winter");
// }

//? Задание 26
// Создайте два обьекта obj1 и obj2Если объекты равны, то выведите
// "Объекты равны"
// Если нет, то выведите
// "Объекты не равны, т.к объект - ссылочный тип данных"
// Если title первого объекта равен title второго, то выведите
// "названия одинаковые"
// если нет, то выведите
// "названия не одинаковые"

// let obj1 = { title: "Hello world" };
// let obj2 = { title: "Hello world" };
// if (obj1 === obj2) {
//   console.log("Объекты равны");
// } else {
//   console.log("Объекты не равны, т.к объект - ссылочный тип данных");
// }
// if (obj1.title === obj2.title) {
//   console.log("названия одинаковые");
// } else {
//   console.log("названия не одинаковые");
// }

//? Экстра таск 1
// Создайте переменную data, в которой хранится один из 8 типов данных.
// Напишите код, который выводит в консоль строку:
// It's number
// если в переменной data хранится число, или:
// It's boolean
// если в переменной булевый тип данных.
// Если же в data лежит какое-то другое значение, то выводите:
// It's not number and boolean

// let data = 55;
// if (typeof data === "number") {
//   console.log("It s number");
// } else if (typeof data === "boolean") {
//   console.log("It s boolean");
// } else {
//   console.log("It s not number and boolean");
// }

//? Экстра таск 2
// Создайте объект obj, с ключами firstNum и secondNum.
// Напишите код который проверяет firstNum и secondNum:
// в случае если firstNum и secondNum не равны нулю, перемножьте числа и выведите в консоль результат
// если же одно из чисел равно нулю, то выведите в консоль их сумму
// если же оба значения равные нулю, выведите в консоль булево: false
// если же значением secondNum является булево false, вывести сумму

// let obj = {
//   firstNum: 0,
//   secondNum: 0,
// };
// if (obj.firstNum === 0 && obj.secondNum === 0) {
//   console.log(false);
// } else if (obj.secondNum === false) {
//   console.log(obj.firstNum + obj.secondNum);
// } else if (obj.firstNum === 0 || obj.secondNum === 0) {
//   console.log(obj.firstNum + obj.secondNum);
// } else {
//   console.log(obj.firstNum * obj.secondNum);
// }

//? Экстра таск 3
// Создайте переменную data.
// Напишите код , который проверяет является ли data типом данных Number.
// Например, если значением data является число 5, вывдедите в консоль:
// 5 - это число
// если же это строка, например '5', то проверьте, лежит ли в этой строке число, если да, то выведите в консоль:
// 5 - это строка, в которой лежит число
// В противном случае выведите в консоль:
// Необработанный случай
// если в строке есть число, то оно обязательно будет стоять в самом начале строки.

// let data = "5";
// if (typeof data === "number") {
//   console.log(`${data} - это число`);
// } else if (typeof data === "string") {
//   let num = parseFloat(data);
//   if (!isNaN(num) && data.startsWith(num.toString())) {
//     console.log(`${data} - это строка, в которой лежит число`);
//   } else {
//     console.log("Необработанный случай");
//   }
// }
//! методдорду интернеттен карадым(акыркы задание)
