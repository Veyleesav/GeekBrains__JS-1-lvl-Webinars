let rows=10;
let columns=10;
const numbers = [' ',1,2,3,4,5,6,7,8];
const letters = [' ','H','G','F','E','D','C','B','A'];
const figures = ['&#9823;','&#9822;','&#9821;','&#9820;','&#9820;','&#9819;','&#9818;'];
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
            //figures
            chessFigures(i,j,figures);
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    function generator(firstLet,secondLet,arr,type) {
        if(type==='let'){
            if (firstLet === 9 || firstLet ===0) {
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
                col.classList.add('outer');
                col.classList.add('rotated');
            }
        }
        else{
         if (firstLet === 0 || firstLet===9) {
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
    function chessFigures(firstLet,secondLet,arr){
        if (isTrue(1,8,1,8) ){
            col.innerHTML=arr[3];
            col.classList.add('rook');
        }
        if (isTrue(1,8,2,7) ){
            col.innerHTML=arr[1];
            col.classList.add('knight');
        }
        if (isTrue(1,8,3,6) ){
            col.innerHTML=arr[2];
            col.classList.add('bishop');
        }
        if(firstLet===2&&secondLet!==0&&secondLet!==9||firstLet===7&&secondLet!==0&&secondLet!==9){
            col.innerHTML=arr[0];
            col.classList.add('pawn');
        }
        if (firstLet===1&&secondLet===4||firstLet===8&&secondLet==4){
                col.innerHTML=arr[5];
            col.classList.add('queen');
        }
        if (firstLet===1&&secondLet===5||firstLet===8&&secondLet==5){
            col.innerHTML=arr[6];
            col.classList.add('king');
        }
        if(firstLet===1&&secondLet!==0&&secondLet!==9||firstLet===2&&secondLet!==0&&secondLet!==9){
            col.classList.add('chess-white');
            //comment in case of no need in rotating the figures
            col.classList.add('rotated');
        }else if(firstLet===7&&secondLet!==0&&secondLet!==9||firstLet===8&&secondLet!==0&&secondLet!==9){
            col.classList.add('chess-black');
        }
        function isTrue(firstLetPos,firstLetPosSecond,secondLetPosFirst,secondLetPosSecond) {
            return (firstLet===firstLetPos && secondLet===secondLetPosFirst || firstLet===firstLetPos && secondLet===secondLetPosSecond || firstLet===firstLetPosSecond && secondLet===secondLetPosFirst || firstLet===firstLetPosSecond && secondLet===secondLetPosSecond );
        }
    }
};
