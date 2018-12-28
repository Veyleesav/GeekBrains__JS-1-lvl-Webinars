/*
6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
function add(a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b){
    return a/b;
}

function mathOperation(arg1,arg2,operation) {
    switch (operation.toLowerCase()){
        case 'add':
        case 'addition':
        case 'sum':
        case 'сложение':
        case 'сложить':
        case 'сумма':
            return add(arg1,arg2);
        case 'subtract':
        case 'subtraction':
        case 'вычитание':
        case 'вычесть':
        case 'разница':
            return subtract(arg1,arg2);
        case 'multiply':
        case 'multiplication':
        case 'умножение':
        case 'умножить':
            return multiply(arg1,arg2);
        case 'divide':
        case 'division':
        case 'деление':
        case 'делить':
        case 'разделить':
            return divide(arg1,arg2);
    }
}
