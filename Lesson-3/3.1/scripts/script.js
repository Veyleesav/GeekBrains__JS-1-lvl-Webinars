let count=0;
while (count<=100){
    if (count <= 1) {
        console.log(count);
        count++;
        continue;
    } else if (count <= 3) {
        console.log(count);
        count++;
        continue;
    } else if (count%2 === 0 || count%3 === 0) {
        count++;
        continue;
    }

    let i = 5;
    while (i*i <= count) {
        if (count%i === 0 || count%(i+2) === 0) {
            count++;
            continue;
        }
        i += 6
    }
    console.log(count);
    count++;
}