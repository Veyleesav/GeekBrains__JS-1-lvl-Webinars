let rows=10;
let columns=10;
const numbers = [' ',1,2,3,4,5,6,7,8];
const letters = [' ','H','G','F','E','D','C','B','A'];
let generateGameField = function(){
    //Обёртка
let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);
    let table = document.createElement("table");
    wrap.appendChild(table);
    for( var i = 0; i < rows; i++ ){
        let row = document.createElement("tr");
        for( var j = 0; j < columns; j++ ) {
            var col = document.createElement("td");
            //letters
           generator(i,j,letters,'let');
            //numbers
            generator(j,i,numbers,'num');
            //black or white
            classPicker();
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    function generator(firstLet,secondLet,arr,type) {
        if(type==='let'){
            if (firstLet === 9) {
                switch (secondLet){
                    case 0:
                        col.innerHTML=arr[0];
                        break;
                    case 1:
                        col.innerHTML=arr[8];
                        break;
                    case 2:
                        col.innerHTML=arr[7];
                        break;
                    case 3:
                        col.innerHTML=arr[6];
                        break;
                    case 4:
                        col.innerHTML=arr[5];
                        break;
                    case 5:
                        col.innerHTML=arr[4];
                        break;
                    case 6:
                        col.innerHTML=arr[3];
                        break;
                    case 7:
                        col.innerHTML=arr[2];
                        break;
                    case 8:
                        col.innerHTML=arr[1];
                        break;
                    case 9:
                        col.innerHTML=arr[0];
                        break;
                    default:
                        console.log(`smth gone wrong, check code generating letters`);
                        break;
                }

                col.classList.add('outer');
            }
            if(firstLet===0){
                switch (secondLet){
                    case 0:
                        col.innerHTML=arr[0];
                        break;
                    case 1:
                        col.innerHTML=arr[1];
                        break;
                    case 2:
                        col.innerHTML=arr[2];
                        break;
                    case 3:
                        col.innerHTML=arr[3];
                        break;
                    case 4:
                        col.innerHTML=arr[4];
                        break;
                    case 5:
                        col.innerHTML=arr[5];
                        break;
                    case 6:
                        col.innerHTML=arr[6];
                        break;
                    case 7:
                        col.innerHTML=arr[7];
                        break;
                    case 8:
                        col.innerHTML=arr[8];
                        break;
                    case 9:
                        col.innerHTML=arr[0];
                        break;
                    default:
                        console.log(`smth gone wrong, check code generating letters`);
                        break;
                }
                col.classList.add('outer');
                col.classList.add('rotated');
            }
        }
        else{

         if (firstLet === 0) {
            switch (secondLet){
                case 0:
                    col.innerHTML=arr[0];
                    break;
                case 1:
                    col.innerHTML=arr[8];
                    break;
                case 2:
                    col.innerHTML=arr[7];
                    break;
                case 3:
                    col.innerHTML=arr[6];
                    break;
                case 4:
                    col.innerHTML=arr[5];
                    break;
                case 5:
                    col.innerHTML=arr[4];
                    break;
                case 6:
                    col.innerHTML=arr[3];
                    break;
                case 7:
                    col.innerHTML=arr[2];
                    break;
                case 8:
                    col.innerHTML=arr[1];
                    break;
                case 9:
                    col.innerHTML=arr[0];
                    break;
                default:
                    console.log(`smth gone wrong, check code generating letters`);
                    break;
            }

            col.classList.add('outer');
        }
        if(firstLet===9){
            switch (secondLet){
                case 0:
                    col.innerHTML=arr[0];
                    break;
                case 1:
                    col.innerHTML=arr[1];
                    break;
                case 2:
                    col.innerHTML=arr[2];
                    break;
                case 3:
                    col.innerHTML=arr[3];
                    break;
                case 4:
                    col.innerHTML=arr[4];
                    break;
                case 5:
                    col.innerHTML=arr[5];
                    break;
                case 6:
                    col.innerHTML=arr[6];
                    break;
                case 7:
                    col.innerHTML=arr[7];
                    break;
                case 8:
                    col.innerHTML=arr[8];
                    break;
                case 9:
                    col.innerHTML=arr[0];
                    break;
                default:
                    console.log(`smth gone wrong, check code generating letters`);
                    break;
            }
            col.classList.add('outer');
            col.classList.add('rotated');
        }
        }
    }
    function classPicker(){
        if (i!==0 && i!==9){
            if ((j+i)%2===0){
                col.classList.add('black');
            }else{
                col.classList.add('white');
            }
        }
    }
};
