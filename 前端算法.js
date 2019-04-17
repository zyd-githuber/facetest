// //冒泡排序
// let arr = [1,8,5,3,2,1]
function mppx(arr) {
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length - i - 1;j++){
            if(arr[j].count>arr[j+1].count){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
//
// console.log(mppx(arr))
//找出js中的高频词汇，并按从高到低排列
let str = 'wdladoajdjakjkjkjkadacdm';
function findHigh(str) {
    let obj = {};
    [].forEach.call(str,function (val) {
        obj[val] = typeof obj[val] === 'number'?obj[val]+1:0
    });
    console.log(obj);
    let arr = [];
    for(let key in obj){
        arr.push({
            str:key,
            count:obj[key]
        })
    }
    return mppx(arr)
}
console.log(findHigh(str))