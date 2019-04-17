var arr = [0,2,4,8,1,0,3,5,2];
let max = 0
arr.forEach((num)=>{
   if(num >max){
       max = num
   }
});
console.log(max)