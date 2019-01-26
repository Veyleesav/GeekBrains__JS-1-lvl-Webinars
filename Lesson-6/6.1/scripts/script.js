document.addEventListener("DOMContentLoaded", ready);
const pictureNames= ['lake','sea','concert'];
const pictureSmall = `img/small/`;
const pictureBig = `img/big/`;
let bigPics=0;
function ready() {
   let wrap=document.createElement('div');
   wrap.classList.add('wrapper');
   let smallWrap=document.createElement('div');
    smallWrap.classList.add('small-wrapper');
    let bigWrap=document.createElement('div');
    bigWrap.classList.add('big-wrapper');
    document.body.appendChild(wrap);
    wrap.appendChild(smallWrap);
    wrap.appendChild(bigWrap);
    for (let i=0;i<3;i++){
        appendPic(pictureSmall,pictureNames[i]);
    }


// функция добавления картинки
    function appendPic(size,name) {
            let picture = document.createElement('img');
            picture.onerror = function(){ alert(`Картинка '${name}' не существует.`)}; //обработчик ошибки
            picture.alt=name; //во имя семантики!
            if (size==='img/small/'){
                picture.className+='small';
                picture.src=pictureSmall+`${name}.jpeg`;
                smallWrap.appendChild(picture);
                picture.onclick=function () {
                    appendPic(pictureBig,name);
                }
            }else{
                if(bigPics===0){
                    picture.className+='big';
                    picture.src=pictureBig+`${name}.jpeg`;
                    bigWrap.appendChild(picture);
                    bigPics++;
                }else{
                    let temp = document.querySelector('.big');
                    temp.src = pictureBig+`${name}.jpeg`;
                }

            }
    }
}

