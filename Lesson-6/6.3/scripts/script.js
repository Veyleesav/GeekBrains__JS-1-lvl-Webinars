document.addEventListener("DOMContentLoaded", ready);
const pictureNames= ['lake','sea','concert'];
const pictureSmall = `img/small/`;
const pictureBig = `img/big/`;
let bigPics=0;
let currentBig='';
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
                    let arrowLeft = document.createElement('div');
                    let arrowRight = document.createElement('div');
                    arrowLeft.classList.add('arrow');
                    arrowRight.classList.add('arrow');
                    arrowLeft.innerText='<';
                    arrowRight.innerText='>';
                    arrowRight.addEventListener('click',function () {
                        picture.src=pictureBig+`${nextPic(currentBig)}.jpeg`;
                    });
                    arrowLeft.addEventListener('click',function () {
                        picture.src=pictureBig+`${prevPic(currentBig)}.jpeg`;
                    });
                    picture.className+='big';
                    picture.src=pictureBig+`${name}.jpeg`;
                    currentBig=name;
                    bigWrap.appendChild(arrowLeft);
                    bigWrap.appendChild(picture);
                    bigWrap.appendChild(arrowRight);
                    bigPics++;

                }else{
                    let temp = document.querySelector('.big');
                    temp.src = pictureBig+`${name}.jpeg`;
                }

            }
            function nextPic(name) {
                if(pictureNames[pictureNames.indexOf(name)+1]!==undefined){
                    currentBig=pictureNames[pictureNames.indexOf(name)+1];
                    return pictureNames[pictureNames.indexOf(name)+1];

                }else{
                    console.log(pictureNames.indexOf(name));
                    currentBig=pictureNames[0];
                    return pictureNames[0];
                }
            }
        function prevPic(name) {
            if(pictureNames[pictureNames.indexOf(name)-1]!==undefined){
                currentBig=pictureNames[pictureNames.indexOf(name)-1];
                return pictureNames[pictureNames.indexOf(name)-1];

            }else{
                console.log(pictureNames.indexOf(name));
                currentBig=pictureNames[pictureNames.length-1];
                return pictureNames[pictureNames.length-1];
            }
        }

    }
}

