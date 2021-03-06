/* 3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
    * если a и b положительные, вывести их разность;
* если а и b отрицательные, вывести их произведение;
* если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.
*/
let a =  Math.round(Math.random() * 201) - 100; //создаём число от -100 до 100 и округляем его
let b = Math.round(Math.random() * 201) - 100;
console.log(`Случайно сгенерированы 2 числа в пределах [-100;100] каждое. \nИмеем:a=${a}, b=${b}`);
if (a>=0&&b>=0){ //условия с допущением, что ноль - положительное число.
    console.log('Оба числа оказались положительными.');
    if(a>b){
        console.log(`Так как a>b, считаем их разность следующим образом: ${a}-${b}=${a-b}`);
    }
    else{
        console.log(`Так как a<b, считаем их разность следующим образом: ${b}-${a}=${b-a}`);
    }
}
else if(a<0 && b<0){
    console.log(`Оба числа оказались отрицательными. \nСчитаем их произведение: (${a})*(${b})=${(a)*(b)}`);
}
else{
    console.log('Числа оказались разных знаков!');
    if(a<0){
        console.log(`Считаем их сумму: (${a})+${b}=${a+b}`);
    }
    else{
        console.log(`Считаем их сумму: ${a}+(${b})=${a+b}`);
    }
}