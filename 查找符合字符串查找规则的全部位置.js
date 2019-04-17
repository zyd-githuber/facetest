var str = `addadapppdsa`;
var arr = [];
let i = 0;
while (str.indexOf('a',i) !== -1){
    i = str.indexOf('a',i)
        arr.push(i)
     i = i+1;
}
console.log(arr)