var obj = {};
Object.defineProperty(obj,'a',{
    value:'xxx',
    writable:true,
    configurable:true,
    enumerable:true
});
console.log(obj.a)
function Foo(){

}