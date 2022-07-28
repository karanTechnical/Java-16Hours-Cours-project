// var myName = "karan chaudhary";
// var myAge = 32
// console.log(typeof(myName))

// var myNames = false;
// console.log(myNames)
// console.log(typeof(myNames))

// console.log(false - true)

// var iAmUseless = null
// console.log(iAmUseless)
// console.log(typeof(iAmUseless))


// var iamStandBy;
// console.log(iamStandBy)

// var myPhoneNumber = 3635522
// var myName = "karan"

// console.log(isNaN(myPhoneNumber))
// console.log(isNaN(myName))

// if(isNaN(myName)){
//     console.log("plz enter valid number")
// }


// console.log(Number.NaN === NaN)

// = Asignment operator
// + operator
// 1,2,5 operand
// var x=5
// var y = 5
// // console.log("is both the x and y ar equal or not " + x == y) // false
// console.log(`is both the x and y ar equal or not :  ${x == y }`) // true


// greather than >
// lessthan <

// var a =30
// var b = 15;

// console.log(a <! b)

// logical orerator  (&& , || , !)

// var a  = 30;
//  var b = -20
//   console.log(a > b && b > 0 && b > 0);  /// if all ok but 1 false then all false/// false

//   console.log(a > b && b > -50 && b < 0); ///// if all ok only true  // true

// console.log((a > b) || (b > 0) ||( b > 0));  if all true ///true


// logical not operator
// console.log(!((a > 0) ||( b < 0))); /// false
// console.log(true) /// true

// Exponentilation operator( ** ) 3**3, 3**2
// console.log(3**2) // 3*3
// console.log(10 ** -2)  //1/10

// swap 2 numbar

// var a = 5;
// var b = 10;

// // let test = ()=>{
// //     a = a+b;    //5+10 = 15
// //     b = a-b;   //15-10 = 5
// //     a = a-b;    // 15-5 = 10
// //     console.log("a is " + a)
// //     console.log("b is " + b)
// // }
// // test()

// var c = b;
//     b = a
//     a = c
//      console.log("a is " + a)
//      console.log("b is " + b)

// == vs === /// == check value only /// === check value and string typeOperator //
// var num1 = 5
// var num2 = '5'
// console.log(num1 === num2)

// if else operator

// var tomr = 'sunny'

// if(tomr == 'rain'){
//     console.log('take rankot')

// }else{
//     console.log('no need take rankot')
// }

// var year = 2020;
// debugger
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("the year " + " is a leap year");
//         }else{
//             console.log("the year " + " is not a leap year")
//         }
//     }else{
//         console.log("the year " + " is a leap year");
//     }

// }else{
//     console.log("the year " + " is not a leap year");
// }

// let age = 14

// if(age >= 15){
//     console.log("you are eligibale for vote ")
// }else{
//     console.log("you ar not eligbal for vote")
// }

// turnary operator

// let age = 15
// console.log((age >= 18) ? "you can vote" : "you can't vote")

// switch statement
// find the circale traingle and ractangel area

// var area = "circle";
// var PI = 3.142, l = 5, b =4, r = 3;

// if(area == "circle"){
//     console.log("the area of the circle is " + PI*r**2)
// }else if (area == "triangle"){
//     console.log("the area of the triangle is  " + (l*b)/2)
// }else if(area == "rectangle"){
//     console.log("the area of the rectangle is  "  + (l*b))
// }else{
//     console.log("please enter valid data")
// }

// switch
// var area = "triangle";
// var PI = 3.142, l = 5, b =4, r = 3;

// switch (area) {
//     case 'circle':
//         console.log("the area of the circle is " + PI*r**2)
//       break;
//         case 'triangle':
//             console.log("the area of the triangle is  " + (l*b)/2)
// break;
//             case 'rectangle':
//                 console.log("the area of the rectangle is  "  + (l*b))
// break;
               
//   default :  console.log("please enter valid data")
       
// }

// LOOP
// var num = 0;

// while(num <=10){
//     console.log(num)
//     num++;
// }

// doWhiel loop

// var num = 0;
// do{
//     console.log(num)
//     num++;
// }while(num <=10)

// for loop
// for(num = 0; num <= 10; num++){
//     console.log(num);
// }

// for(num = 1; num <= 10; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num)
// }
                    // function
// function sum (){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total)  
    
// }
// sum();

//   function parameter vs function argument
// function sum (a,b){
//     var total = a+b;
//     console.log(total)  
    
// }
// sum();
// sum(20,30)
// sum(50,50)

// function expressions

//  function sum (a,b){
//         var total = a+b;
//          console.log(total)  
        
//      }
//     var funExp = sum(5,10);


// return Keybord

// function sum (a,b){
   
//      return total = a+b ;
    
//  }
// var funExp = sum(5,10);
// console.log('the sum of to num is ' + funExp)

// Anonymous Function

// var funExp = function sum (a,b){
   
//     return total = a+b ;
   
// }
// var sum = funExp(15,15)
// console.log('the sum of to num is ' + sum)

////////////////////////   ECMA SCRIPT 2022  /////////////////////////////////////////////////////////////

// function biodata(){
//     let myFirstName = "karan";
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "chaudhary";
//         console.log('inner ' + myLastName)
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter ' + myLastName) /// error scop insde only 
// }
// biodata();
////////////////////templete litterel template string //////////////////////

// for(let num  = 1; num <= 10; num++){
//     let tableOf = 12;
//     // console.log(tableOf + "*" + num + " =" + tableOf * num);////
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`)
// }

///////////default parameters//

// function mult (a,b = 10){
//     return a*b

// }
// console.log(mult(6))

// Fat ARRow Function

// const sum = ()=>`the sum of the two number is ${(a=5) + (b=5)}`

// console.log(sum());

// Array////////////

// let myFriends = ['karan',22,male, 'ramesh','rade','binod','thapa']

 
// Traversal in Array

// var myFriends = ['karan','ramesh','rade','binod','thapa']

//  console.log(myFriends[myFriends.length -2])

//  console.log(myFriends.length)

// for loop //

//  var myFriends = ['karan','ramesh','rade','binod','thapa'];
//  for( var i =0; i<myFriends.length; i++){
//     console.log(myFriends[i])
//  };

//  ECMA
// for in loop
// var myFriends = ['karan','ramesh','rade','binod','thapa'];
// for(let elemnets in myFriends){
//     console.log(elemnets)
// }
// for of loop

// var myFriends = ['karan','ramesh','rade','binod','thapa'];
// for(let elemnets of myFriends){
//     console.log(elemnets)
// }

// for each
// var myFriends = ['karan','ramesh','rade','binod','thapa'];

// // myFriends.forEach(function(element,index,array){
//     myFriends.forEach((element,index,array)=>{
    
//   console.log(`${element}  index : ${index} ${array}`)
// })
//  searching and filter in an  Array /////////////
//  indexOf()//////////
// var myFriends = ['karan','ramesh','rade','binod','thapa'];

// console.log(myFriends.indexOf[2])

// CRUD operation array  creat, read, update, delete /////////////////////////////////////////
// add data push()
// const animals =  ['pigs', 'goats' , 'sheeps'];

//  const  count = animals.push('chicken');
// console.log(count)

//  animals.push('chicken', 'cats' , 'cows');
//  console.log(animals)
//  unshift() //////////////////////////////////////


// const animals =  ['pigs', 'goats' , 'sheeps'];

// const count = animals.unshift('chicken');
// console.log(count)
// console.log(animals)

// animals.unshift('chicken', 'cats' , 'cows');
// console.log(animals)
// 2nd example
// const myNumbar = [1,2,3,5];
// myNumbar.unshift(4,6)
// console.log(myNumbar)

// pop()///////////////////////// remove the last elements
// const plants = ['broccoli', 'couliflower','kale','tomato', 'cabbage'];

// console.log(plants)
// console.log(plants.pop());
// console.log(plants)

// shitf() ////////////////remove the first elemnts//////////////////
// const plants = ['broccoli', 'couliflower','kale','tomato', 'cabbage'];

// console.log(plants)
// console.log(plants.shift());
// console.log(plants)

// chalange time splice()/// add and remove array

// const months = ['jan','March','April', 'Jun', 'July'];

// solv 1  add last elemnts dec

// const newMonths = months.splice(months.length,0,'Dec')
// console.log(months)

// // solv 2 
// const months = ['jan','March','April', 'Jun', 'July'];

// const newMonths = months.splice(months.length,0,'Dec')
// console.log(newMonths)

// solv 3  update//
// const months = ['jan','march','April', 'Jun', 'July'];
// const indexOfMonth = months.indexOf('march')

// if(indexOfMonth!== -1){

//     const updateMonth = months.splice(indexOfMonth,1,'march')
// }else{
//     console.log('No such data found');
// }

// console.log(months)

// Delete method
// const months = ['jan','march','April', 'Jun', 'July'];
// const indexOfMonth = months.indexOf('April')

// if(indexOfMonth!== -1){

//     const updateMonth = months.splice(indexOfMonth,Infinity)
// }else{
//     console.log('No such data found');
// }

// console.log(months)

// Map() reduce() Filter()/////////////////////////
///map metod//

// const arr1 = [1, 4, 9, 16, 25]

// let newArr  = arr1.map((curElem,index,arr)=>{
//     return curElem > 9;
// })
// console.log(arr1)
// console.log(newArr);
////////////

// const arr1 = [1, 4, 9, 16, 25]

// let newArr  = arr1.map((curElem,index,arr)=>{
//     return `index no = ${index} and the value is ${curElem} belont to ${arr}`
// })

// console.log(newArr);

// chalange time find the square root of each Element array

// let arr = [ 25, 36, 49, 64, 81]

//  let arrSqr = arr.map((cruElem)=> Math.sqrt(cruElem))

//  console.log(arrSqr);


 //////// multiplay 2 geter than 10 ///////////////////////
//  let arr = [2, 3, 4, 6, 8]

//  let arr2 = arr.map((curElem)=>curElem * 2).filter((curElem)=>curElem > 10)

//  console.log(arr2)

//  Reduce Method reduce()//////////////////////////////

// let arr = [5, 6, 2];
//  let sum  = arr.reduce((accumulator,curElem, index,arr)=>{
//      return accumulator +=  curElem;
//  })
//  console.log(sum)

 ///////
//   let arr = [2, 3, 4, 6, 8]

//  let arr2 = arr.map((curElem)=>curElem * 2).filter((curElem)=>curElem > 10).reduce((accumulator, curElem)=>{
//     return accumulator += curElem;
//  },7)

//  console.log(arr2)

//  how to fatten an arry

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_7', 'zone_8']
// ]

// let flatArr  = arr.reduce((accum, currVal)=>{
//     return accum.concat(currVal);
// })
// console.log(flatArr);

// STRING IN JVASCRIPT/////////////////////////////////////////

// const myBiodata = 'iam the karan technical';
// console.log(myBiodata.indexOf("karan"));

// last index of ()

// const myBiodata = 'iam the karan technical';
// console.log(myBiodata.lastIndexOf("t" ,6));
 
// serch () method
// const myBiodata = 'iam the karan technical';
// let sData = myBiodata.search("karan");
// console.log(sData)

// extraction string parts 
// slice()
// let str = "Apple, banana, kiwi, mango";
// // let res = str.slice(0,5);
// // let res = str.slice(7,-2);
// let res = str.slice(7);

// console.log(res)

// challenge time//////////////
// let myTwieets = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quae debitis saepe natus mollitia? Assumenda, laudantium, perspiciatis! Vitae eos reprehenderit minus nostrum, corrupti sit at, velit blanditiis, minima officiis suscipit."
// let myActualTewet = myTwieets.slice(0,280);
// console.log(myActualTewet);
// console.log(myActualTewet.length)

// subsstring() method()
// let str = "Apple, banana, kiwi, mango";
// let res = str.substring(8,-2)
// console.log(res)

// substr() method
// let str = "Apple, banana, kiwi, mango";
// // let res = str.substr(7,)
// let res = str.substr(-5)
// console.log(res)

// resplacing string content()
// let myBiodata = 'iam the karan technical';
// let repalaceData = myBiodata.replace('technical', 'chaudhary');
// console.log(repalaceData)
// console.log(myBiodata)

// extracting string charcters////////////
// let str = "HELLO WORLD";
// console.log((str.charAt(0)));

// charCodeAt() UNI code
//  let str = "HELLO WORLD";
//  console.log((str.charCodeAt(0)));

//  uni code

// let str = "HELLO WORLD";
// let lastChar = str.length -1;
// console.log(str.charCodeAt(lastChar));

// property Access()
// let str = "HELLO WORLD";
// console.log(str[0]);

// other usful method upper lower
// let myName = "karan Chaudhary";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// string.trim() space remove //////////////
// var str = "       hellow world     ";
// console.log(str.trim());

// split() method  remove comas space and Pipe
// var txt = "a,b,c d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));

// Date and Time method()//////////////////////////////////
// newDate()
// let curDate = new Date();
// console.log(curDate);
// console.log(new Date());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toString());

// console.log(Date.now());

///////

// var d = new Date(2021, 0, 5, 10, 33, 30, 0)
// console.log(d.toLocaleString());

////

// var d = new Date(2021, 0, 5)
// console.log(d.toLocaleString());
// // 
// var d = new Date(2021, 0)
// console.log(d.toLocaleString());

// newDate(dataString)
// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// miliSecond
// var d = new Date(1609574531435)
// var d = new Date(86400000*2)
// console.log(d.toLocaleString());

// Date method how to get date()////////

// const curDate = new Date();

// console.log(curDate.toLocaleString() );
// console.log(curDate.getFullYear() );
// console.log(curDate.getMonth() );
// console.log(curDate.getDate() );
// console.log(curDate.getDay() );

// set indevisual Date() method///////////

// const curDate = new Date();
// console.log(curDate.setFullYear(2022));
// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

// Time Method()

// const curTime = new Date();

// console.log(curTime.getTime() );
// console.log(curTime.getHours() );
// console.log(curTime.getMinutes() );
// console.log(curTime.getSeconds() );
// console.log(curTime.getMilliseconds() );

// set time( ) indivisual
// const curTime = new Date();

// // console.log(curTime.setTime() );
// console.log(curTime.setHours(5) );
// console.log(curTime.setMinutes(5) );
// console.log(curTime.setSeconds(5) );
// console.log(curTime.setMilliseconds(5) );

// practiece time
// new Date().toLocaleTimeString();   ///for time  11:18:48: AM
// new Date().toLocaleDateString() // date  11/19/2015

// new Date().toLocaleString() // 11/16/2015, 11:18:48 Pm

// Math Object ind Java ////////////////////////////////////////////////////////// Math Object

// console.log(Math.PI);
// let num = 10.2565;
// console.log(Math.round(num));
/////////////////////

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt()

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs()//////////////////// negitv change positiv value - +

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));

// Math.ceil()/////////////////// inceres 1 number small or big no matter

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// Math.floor()//////////////////////// after decimal . remove

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.9));


// Math.min()////////////////////// Math.max()
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() give random number 

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)); // 0 to 9

// Math.trunc()///////////////////////

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// DOM OBJECT IN JAvA ///////////////////////////////////////////////////////////////


// Evennt in Java script/////////////////////

// Timing base Event /////////////

// setTimeout(function,miliseconds)
//  setInterval(function, miliseconds)

// OOps in Java Script/////// Object Orneted //

// how to create an Object
// 1st way
// let bioData = {
//     myName: "karan",
//     myAge : 31,
//     getData : function(){
//         console.log(`my name is  ${bioData.myName} nad my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()

// 2way
// let bioData = {
//     myName: "karan",
//     myAge : 31,
//     getData(){
//         console.log(`my name is  ${bioData.myName} nad my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()

//////////////////////

// let bioData = {
//     myName: {
//         realName  : "karan",
//         chanelName : "karnTechnical"

//     } ,
//     myAge : 31,
//     getData(){
//         console.log(`my name is  ${bioData.myName} nad my age is ${bioData.myAge}`);
//     }
// }

// console.log(bioData.myName.chanelName);


// this object injava////////////////
// console.log(this.alert('Awesome'));

// ex2
// function myName(){
//     console.log(this);
// }
// myName();

// ex3
// var myNames = 'vinod';
// function myName(){
//     console.log(this.myNames)
// }
// myName()

// ex4
// const obj = {
//     myAge : 31,
//     myName(){
//         console.log(this.myAge)
//     }
// }
// obj.myName();

// ex 5

// Destructuring Array
// const myBiodata = ['karan', 'thapa', 31];

// let myFname = myBiodata[0];
// let myLname = myBiodata[1];
// let myAge = myBiodata[2]

// console.log(myFname);
/////////////////////
// const myBiodata = ['karan', 'thapa', 31];
//  let [myFname,myLname,myAge, myDegree = "mcs"] = myBiodata;
//  console.log(myDegree);

// Object destructuring//
// const myBiodata = {
//     myFname : "karan",
//     myLname : "thapa",
//     myAge : 31
// }
// // let age = myBiodata.age
// // let myFname = myBiodata.myFname;
// // console.log(age);

// let {myFname,myLname,myAge, myDegree = "mcs"} = myBiodata;
// console.log(myDegree)

// Object properties///////////

// let myName = "karan";
// const myBio = {
//     [myName] : "hellow how are you",
//     [20+11] : "ismy age"
// }
// console.log(myBio);

//////////
// let myName = "karan Chaudhary";
// let myAge = 26;

// const myBio = {myName, myAge}
// console.log(myBio);

// spread opertor///////////// ...colors
// const colors = ['red', 'green', 'blue', 'white'];

// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black','pink','aqua'];

// const myFevColors = [...colors,'yellow ','black']
// console.log(myFevColors);

// ES7 featurs
// 1: Array incloud\ true / false 

//  const colors = ['red', 'green', 'blue', 'white','pink'];

//  const isPresnt = colors.includes('blue');
//  console.log(isPresnt);

// 2: ** exposniteal

// console.log(2**3);     //2*2*2//

// ES8 Features////////////////////////////////////////
// string padding
// Object.values()
// Object.entries()
// const message = "my name is karan";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));
////////////////////////////////
// const person = {name:'Fred', age: 87};
// console.log(Object.values(person));

// ////

// console.log(Object.entries(person));


/////


// ES2018 update

// const person = {name:'Fred', age: 87};

// const sPerson = {...person}
// console.log(person);
// console.log(sPerson);
//
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));


//////////////////// ES2019 update

//  how to fatten an arry

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_5', 'zone_6', ['zone_7', 'zone_8']]]
// ]

// // let flatArr  = arr.reduce((accum, currVal)=>{
// //     return accum.concat(currVal);
// // })
// // console.log(flatArr);
// ////
// // console.log(arr.flat(2));

// console.log(arr.flat(Infinity));

///

//////////////////// ES2020 update

//# BigInt //

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 12n );
// const newNum  = 9007199254740991n + 12n;

// console.log(newNum);

// console.log(typeof newNum);

// ES2014 update//////////////

// "use Strict";  declare /let var const 
// let x = 3.14;
// console.log(x);



//  ADVANCE JAVASCRIPT START/////////////////////////////////////////////

// create calculator higer order  call back function
// const add = (a,b)=>{
//     return a+b;
// }

// const sub = (a,b)=>{
//     return Math.abs(a-b);
// }


// const mult = (a,b)=>{
//     return a*b;
// }

// const calculator = (num1,num2,operator)=>{
//     return operator(num1,num2)

// }

// console.log(calculator(5,2,add));
// console.log(calculator(5,2,sub));


// Hosting
// console.log(myName);
// var myName;
// myName = "thapa"

// undefined
///
// during creation phase //////////let eror

// var myName;
// console.log(myName);
// myName = "thapa"

// Closures in JavaScrit/////////////

// const oueterFun = (a)=>{
//     let b = 10;

//     const innerFun = ()=>{
//         let sum = a+b;
//         console.log(`thse sum of the two no is ${sum}`);
//     }
//     innerFun()
// }
// oueterFun(5)

/////////////////////////////////

// const oueterFun = (a)=>{
//     let b = 10;

//     const innerFun = ()=>{
//         let sum = a+b;
//         console.log(`thse sum of the two no is ${sum}`);
//     }
//   return  innerFun;
// }
// let checkCloure = oueterFun(5);
// checkCloure();

// Synchronous JavaScript Prog /////////////////////////////////////////

// const fun2 = ()=>{

//   console.log(`function 2 id called`);
// }

// const fun1 = ()=>{

//   console.log(`function 1 id called`);

//   fun2();

//   console.log(`function 1 is called again`);
// }
// fun1();

// ASynchronous JavaScript Prog /////////////////////////////////////////

// const fun2 = ()=>{
//   setTimeout(()=>{
//     console.log(`function 2 id called`);
//   },2000)
 
// }

// const fun1 = ()=>{

//   console.log(`function 1 id called`);

//   fun2();

//   console.log(`function 1 is called again`);
// }
// fun1();

//Function curring/////// // sum(5)(3)(8)


// function sum(num1){
 

//  return function(num2){
 

//   return function(num3){
//     console.log(num1+num2+num3);
//   }
//  }
  
// }
// sum(5)(3)(8)
////////// online code  same code function currying
// const  sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

//  sum(5)(3)(8)

// callback Hell function//////////////////////////

// setTimeout(()=>{
//   console.log(` 1 work is done`);
//   setTimeout(()=>{
//     console.log(` 2 work is done`);
//     setTimeout(()=>{
//       console.log(` 3 work is done`);
//       setTimeout(()=>{
//         console.log(` 4 work is done`);
//         setTimeout(()=>{
//           console.log(` 5 work is done`);
//           setTimeout(()=>{
//             console.log(` 6 work is done`);
//           },1000)
//         },1000)
//       },1000)
//     },1000)
//   },1000)
// },1000)





















