// function isPalindrome(str){
//     let revStr=""; //!Imp
//     for(let i =str.length-1;i>=0;i--){
//         revStr+=str[i];
//     }
//     console.log(revStr)
//     if(str==revStr){
//         console.log("Palindrome")
//     }else console.log("Not  palindrome")
// }
// isPalindrome('madam')

// function isPalindrome(str){
//     let revStr=""; //!Imp
//     for(let i =str.length-1;i>=0;i--){
//         revStr+=str[i];
//     }
//     console.log(revStr)
//     if(str==revStr){
//         console.log("Palindrome")
//     }else console.log("Not  palindrome")
// }
// isPalindrome('madam')


//* Types of functions

//~ Named function
// function namedFunction(){
//     console.log("I have a name")
// }
// namedFunction()

// //~ Anonymous function


//  let greet = function(){
//     console.log("I dont have a name")
// }
// greet()
// let x = function(){
//     console.log("function expression"); 
// };

//!IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )()();

// function demo(){
//     console.log("Hello");
// }

// let x =() =>console.log("Hello");
// x();

// let x =(a,b) =>console.log("a+b");
// x(10,155555555);

// let x =_ =>{ console.log("hi");
//     console.log("bye");
//     console.log("okk");}
//     x();


// function add(a,b){
//     console.log("iam printing before return keyword");
//     return a+b;
// }
// let x = add(6,6);
// console.log(x);


// let x = (a,b) => a+b;
// console.log(x(10,40));

// let y = (a,b)=> return a+b;
// console.log(y(3,3));

// function hof(a){
//     return a;
// };

// let x = hof(function(){return "This is a callback function"});
// // console.log(x);
// let b = function(){
//     console.log("Anonymous");
// };
// b();

// function add(callback){
//     return callback(5,6);

// };
// let x = add(function(a,b){return a+b});
// console.log(x);

// let users = ['Navya', 'Vishnu', 'Keshav', 'Shravan', 'Shiva'];

// let x = users.map((user) => {
//     console.log(user);
//     return user;
// });
// console.log(x);

// users.forEach((user) => {
//     console.log(user);
// });


function x(){
    var user = "Shravan";
    let company = "Amazon";
    const sal= 12343660;
    console.log(user);
    console.log(company);
    console.log(sal);

    console.log(a,b);
}
x();