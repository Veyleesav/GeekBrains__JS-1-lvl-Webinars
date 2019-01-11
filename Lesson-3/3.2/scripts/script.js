let count=0;
do{
    switch (count){
        case 0:
            console.log(`${count} - это ноль`);
            break;
        default:
        if (count%2!==0){
            console.log(`${count} - нечетное число`);
            break;
        }
        else {
            console.log(`${count} - четное число`);
            break;
        }
    }
    count++;
}
while(count<=10);