
// day 1 SPLICE()
// let names = ['karn','bahadur', 'chaudharay','test'];
// // const newNames =  names.splice(1,1,'BAHadur'); ///update name
// const newNames =  names.splice(1,1); ///delete index no 1

// console.log(newNames)
// console.log(names)

// DAY 2 FIND VS FILTER => search using

// const array1 = [5, 12, 8, 130, 44];
// find no > 12
// const newArr = array1.find((elem)=>{
//     return elem > 12; // match 1value and return

// })
// console.log(newArr)
// ////////////////
// const newArr = array1.findIndex((elem)=>{
//     return elem > 8; 

// })
////
// console.log(newArr)
////////////////
// const newArr = array1.filter((elem)=>{
//     return elem > 8; 

// })
// console.log(newArr)
////
// console.log(newArr)
////////////////
// const newArr = array1.filter((elem,index ,arr)=>{
//     console.log(`${elem}, index no  ${index}, and ${arr}`)
//     return elem > 8; 

// })
// console.log(newArr)

// DAY 3 ARRY FILTER out
// const data = [
//     {name: 'danel ' , age: 45},
//     {name: 'john ' , age: 34},
//     {name: 'robert ' , age: null},
//     {name: 'jen ' , age: undefined},
//     {name: null  , age: undefined}
// ] 
// const newAges = data.filter((elem)=>{
//     // console.log(elem.age)
//     return elem.age != undefined;  ///out put  [ { name: 'danel ', age: 45 }, { name: 'john ', age: 34 } ]

// })
// console.log(newAges)


///////////////// NULL VS UNDEFINE DAY 4 /////different betwen////]

// undefined
// let x; 
// console.log(x);
// console.log(typeof x);
// null//////////////.
// let x = null; 
// console.log(x);
// console.log(typeof x);
//////////////////
// console.log(undefined === null) //false check data type
// console.log(undefined == null)  // true 
////////////////////////
// let x = undefined; 
// console.log(x);
// console.log(typeof x);

// exponential day 5////////////////////////////////////////////////////////

// 0e-5 // => 0    //0/10000 = 0
// 0e+5 // => 0  //0 /10000 =0
// 5e1 // => 50          // example = > 5e2 = 5*100 = 500//
// 175e-2 // => 1.75    ////175/100 = 1.75
// 1e3 // => 1000
// 1e-3 // => 0.001   // 1e-3 = > 1/1000 = 0.001//

//  function newFunction(){
//      return 5e1;
//  }
// console.log(newFunction())
//////////////////////////////////// LOOP day 6/////////

// const names = ['karan','bahadur', 'thapa','karantechnical']

// for(let i=0; i<names.length; i++){
//     console.log(names)
// }
/////////////////
// for(let elemnts in names){
//     console.log(elemnts)
// }
// //////
// for(let elemnts of names){
//     console.log(elemnts)
// }

////////////////////////////// USE STRICT MODE DAY 7////

// "use strict";

// sum(5,10);
// function sum(a,b){
//     const add  = a+b;
//     console.log(add)
    
// }
///

// const sum = (a,b)=>{
//     const add  = a+b;
//     console.log(add)
    
// }
// sum(5,10);

/////////////////// FUNCTION CURRYING  day 8 //

// function sum(a){
//     return function(b){

//         return function(c){

//             return function(d){

//                 // console.log(a,b,c,d)
//                return (a+b+c+d)
//             }
          
//         }
       
//     }
// }

// const add =console.log(sum(5)(10)(7)(3));
// console.log(add)
////////////////// 

// const sum = (a)=> (b)=> (c)=> (d)=> a+b+c+d
//  const add = sum(5)(10)(7)(3);
//  console.log(add)

//////////////////////////////////////////////////// ASI IN JAVA DAY9  automatic semicolon insertion (ASI)

// var a = 10;
// console.log(a);
//
// example  x; ++y;
// var x=1, y=1
// x
// ++
// y
// console.log(x)
// console.log(y)

////// return; undefine

// function ASI(){
//   return
//   {
//     foo:1
//   }
// }
// const a = ASI()
// console.log(a)

/////// return{ valid
// function ASI(){
//     return {
//       foo:1
//     }
//   }
//   const a = ASI()
//   console.log(a)

// ///////////////////write a program to swap two number//////

// input : a = 55, b = 20

// output : a = 20, b = 55



// const test = ()=>{
//   let a = 55;
//   let b = 20;

//   // do not change the code above

//   let c = a;  ///c = 55
//   a =b;  // a =20
  
//   b =c ;/// b = 55


//   // do not change the code below
//   console.log("a is " + a);
//   console.log("b is " + b);
// }
// test();

///////////////////write a program to swap two number//////

// input : a = 55, b = 20

// output : a = 20, b = 55



// const test = ()=>{
//   let a = 55;
//   let b = 20;

//   // do not change the code above

//  a = a+b ////a = 75
//  b =  a-b // b =55
//  a = a-b /// a = 20


//   // do not change the code below
//   console.log("a is " + a);
//   console.log("b is " + b);
// }
// test();

///////////////////////////////////////////day 13 SET TIME OUT  setTimeout() setInterval() clearInterva() /////////////////////////// TIME BASED EVENT
//  day10Setime.html


//////////////// Array Reduce() method map method // day 14///////

// let arr = [1,2,3,4,5,6];
// let sum   = arr.reduce((accum,curr)=>{
//     return accum + curr;

// },2)
// console.log(sum);

////////////////Average////
// let arr = [8,2,5,5];

// let avg = arr.reduce((accum, cuurVal,index,array)=>{
//     debugger;
//        let total = accum += cuurVal;
//        if(index === array.length-1){

//         return total/array.length;
//        }
//        return total;
      
  
// })


// console.log(avg);


////////////////  Callback Function()  Higher order Function()////

// calculator
//  const add=(a,b)=>{
//      return (a+b);
//  }
//  console.log(add(5,6));


//  const subs=(a,b)=>{
//     return Math.abs(a-b);
// }
// console.log(subs(5,6));


// const mult=(a,b)=>{
//     return Math.abs(a*b);
// }
// console.log(mult(5,6));

// master functon HOF////
// const calculator = (num1,num2,operator)=>{
//     return operator(num1,num2);

// }
// console.log(calculator(5,6,add))
// console.log(calculator(5,6,mult))
// console.log(calculator(5,6,subs))

///// Flaten an array//////////////////////////
// const arr = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']
// ]
// const flatArr = arr.reduce((accum,curVal)=>{
//     return accum.concat(curVal)
// })
// console.log(flatArr[0])

//////////////////ECMA 2020 Falte maethod///////

// const arr = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7',['zone_5',['zone_1','zone_2']]]
// ]

// console.log(arr.flat(Infinity));



