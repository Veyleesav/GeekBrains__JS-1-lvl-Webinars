let num=2;
while (num<=100){
    if (isSimple(num)){
        console.log(num);
    }
    num++
}
function isSimple(num) {
   let i=2;
   while (i<num){
       if(num%2===0){
           return false;
       }
       i++
   }
   return true;
}
