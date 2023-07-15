users = [
  { fName: "jeet", age: 21 },
  { fName: "raj", age: 20 },
  { fName: "sanjay", age: 22 },
  { fName: "amar", age: 23 },
];



users.forEach( (user,index)=>{
    console.log(user.fName, index);
})


// for(let user of users){
//     console.log(user.fName)
// }