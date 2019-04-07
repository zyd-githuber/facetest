let p = new Promise((resolve,reject)=>{
    resolve()
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('data')
    },1000)
})
p.then(()=>{
    return p2
}).then((data)=>{
  console.log(data.a())
  return data+1
}).then((data)=>{
    console.log(data) 
},(err)=>{
    console.log('catch++++'+err)
})