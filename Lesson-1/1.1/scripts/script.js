let celsiusTemperature = prompt("Введите температуру в градусах по Цельсию:");
while(celsiusTemperature.length===0){
    celsiusTemperature = prompt("Введите температуру в градусах по Цельсию:"); //защита от пропускания окна, работаем с заботой о невнимательном юзере :)
}
celsiusTemperature=Number(celsiusTemperature);
console.log(celsiusTemperature);
let fahrenheitTemperature = (9 / 5) * celsiusTemperature + 32;
alert(`Температура в градусах по Фаренгейту: ${fahrenheitTemperature}`);