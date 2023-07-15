const numbers=[6,8,4,2,9]


const doubleNum = function (n){
     return 2*n;
}

const dubleNum=numbers.map(doubleNum)

const num=numbers.map((n, index)=>{
    return `index:${index}, ${n*n}`
})


console.log(dubleNum)

console.log(num)