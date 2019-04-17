//冒泡排序方法
let arr = [8,1,2,5,6,9,0,4];
for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
          let temp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = temp
      }
    }
}
// console.log(arr)
//判断一个文字是不是回文
function isHuiWen(str) {
    return str === str.split('').reverse().join('')
}
//数组去重
let arr1 = [0,2,2,8,4,5,9,1];
function quChong1(arr1) {
    let obj = {};
    arr1.forEach((num)=>{
        obj[num] = num
    });
    let arr = [];
    for(let key in obj){
        arr.push(obj[key])
    }
    return arr
}
// console.log(quChong1(arr1))

function quChong2(arr) {
    let arr1 = [];
    arr.forEach((num)=>{
        if(arr1.indexOf(num)=== -1){
            arr1.push(num)
        }
    })
    return arr1
}
// console.log(quChong2(arr1))
let str = 'asdadoajojkkjkkjkjk';
function maxCount() {
    var obj = {};
    Array.prototype.forEach.call(str,(key)=>{
        obj[key] = typeof obj[key] === 'number' ?obj[key]+1:0
    });

    let max = 0;
    let maxchart = ''
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key]
            maxchart = key
        }
    }
    return maxchart
}
console.log(maxCount(str));