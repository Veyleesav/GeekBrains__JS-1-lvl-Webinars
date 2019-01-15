function convertToObj(num) {
    let result = {};
    if (Number.isInteger(num)) {
        const numArr = num.toString().split('');
        switch (numArr.length) {
            case 0:
                console.log('Ошибка исходных данных. Скорее всего, Вы ввели ничего не ввели');
                break;
            case 1:
                result.единицы = Number(numArr[0]);
                break;
            case 2:
                result.единицы = Number(numArr[1]);
                result.десятки = Number(numArr[0]);
                break;
            case 3:
                result.единицы = Number(numArr[2]);
                result.десятки = Number(numArr[1]);
                result.сотни = Number(numArr[0]);
                break;
            default:
                if (numArr.length > 3) {
                    console.log('Число превышает 999');
                    break;
                }
                else {
                    console.log('Произошла непредвиденная ошибка. Программа приостановлена.');
                    break;
                }

        }
    } else {
        console.log('Ошибка исходных данных. Скорее всего, Вы ввели не числовое значение');
    }
    console.log(result);
    return result;
}