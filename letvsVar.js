// let vs var
// hosting:
// tmd => temporal dead zone
// scope
// blocks



// let => block scope 
// var => function scope


// for(let i = 1; i<=1; i++){
//     let a = 10
//     var b = 20
// }

// // console.log(a) 
// console.log(b)


// if(true){
//     let a = 10
//     var b = 20
// }

// // console.log(a)
// console.log(b)


// function hello(){
//     let a = 10
//     var b = 20
//     // return b
// }

// hello()

// // console.log(a)
// console.log(b)



let a = 10
a = 500
var b = 20
// var b = 100

function hello(){
     let d = 1000
    a = 100
    b = 200
}

hello()

console.log(a)
console.log(b)
console.log(d)