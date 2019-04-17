let arrayLike = {
    0:'a',
    1:'b',
    2:'c',
    length:3
};
let arr = [].slice.call(arrayLike,0,2);
console.log(arr)
