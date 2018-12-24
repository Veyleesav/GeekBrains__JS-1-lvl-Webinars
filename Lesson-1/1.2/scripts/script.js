//Надеюсь, я правильно понял, и работа с переменными - это поменять местами значения двух переменных без доавления третьей.

let a = Math.floor(Math.random() * 50) + 1;
let b = Math.floor(Math.random() * 100) + 51;

//Метод 1
initialLog(1);
b = [a, a = b][0];
finalLog();

//Метод 2
initialLog(2);
[a, b] = [b, a];
finalLog();

//Метод 3 (не будет работать с типом string)
initialLog(3);
a = a + b;
b = a - b;
a = a - b;
finalLog();

function initialLog(number) {
    console.log(`Метод ${number}:\nИсходные данные:\na=${a} , b=${b}`);
}

function finalLog() {
    console.log(`Поменяли местами, теперь имеем:\na=${a} , b=${b}`);
}