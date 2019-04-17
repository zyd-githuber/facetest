//冒泡排序
var arr = [0,5,4,8,9,1];
for(let i = 0;i < arr.length; i++){
    for(let j = 0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
}
// console.log(arr)
//编程实现indexOf
function indexOf(target) {
    let result = -1;
    arr.forEach((val,index)=>{
        if(target === val){
            result = index
        }
    });
    return result
}
// console.log(indexOf(1))

var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";
var obj = parseQueryString(url);
function parseQueryString(argu){
  let search = url.substring(argu.indexOf('?')+1);
  let arr = [];
    arr = search.split('&').map((item)=>{
      return {
          key:item.split('=')[0],
          val:item.split('=')[1]
      }
  })
    return arr
}
// console.log(obj)

let str = `dajpodjajd日打卡打卡的【搞搞csalflwf`;
function findMaxCount() {
    let obj = {};
   [].forEach.call(str,function (str1) {
       obj[str1] = obj[str1] === undefined ? 0:obj[str1]+1
    });
   let max = 0;
   let result = ''
   for(let key in obj){
       if(obj[key]>max){
           max = obj[key];
           result = key
       }
   }
   return result
}
// console.log(findMaxCount())
//屏蔽敏感词
str = str.replace(/日|搞/g,'*')
// console.log(str);
//找出指定字符串的全部索引位置
let sttr = `sada;d/,a/d,a''dald`;
let arra = [];
let warpIndex = 0
!(function find(){
    let index = sttr.indexOf('a',warpIndex);
    warpIndex = index
    warpIndex++
    if(index !== -1){
        arra.push(warpIndex);
        find()
    }
})();
console.log(arra);

