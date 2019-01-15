let event, ok;
let money=0;
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + works.a3+works.a4+'-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
if (event===2) {
    money+=100;
    event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Выход из игры');
    if(event===4){
        money+=150;
        event = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - Выход из игры');
        if(event===3){
            money+=250;
            event = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - Выход из игры');
            if(event===4){
                money+=500;
                alert('Поздравляем!');
            }else{
                fail();
            }
        }else{
            fail();
        }
    }else{
        fail();
    }
}else{
    fail();
}
alert(`Спасибо за игру, вы дошли до суммы в ${money} рублей!`);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
function fail(){
    alert('Это неверный ответ!');
}