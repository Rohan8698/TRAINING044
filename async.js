// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(31);
// }, 5000)
// console.log(30);
// console.log(40);
// setInterval(()=>{
//     console.log(31);
// }, 5000)
// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("Success");
// });
// console.log(p2);
// p2.then((response) =>
//     {
//         console.log(response);
//      }).catch((error)=>{
//      console.log(error);
// }).finally(()=>console.log("finally printing for both"))

// let p3 = new Promise((resolve , reject)=>{
//     reject("Failures");
// });
// console.log(p3);

// function fetchUsers(){
//     let res = window.fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(res)
//     .then((res)=>{
//         // console.log(res)
//         // console.log(res.json())
//         return res.json().then(data=>{
//             // console.log(data)
//             let store = document.getElementById("store")
//             data.map((user)=>{
//                 // console.log(user)
//                 store.innerHTML +=
//                 `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company}</td>
//                 </tr>
//                 `
//             })

//         })
//     })
//     .catch(err=>console.log(err))
    
// }
// fetchUsers()


// let P = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise successfully completing");
//     })
// })

// async function demo()
// {
//     console.log("Start");
//     let x =await P;
//     console.log(x);

//     console.log("End");
    
// }
// demo();



async function fetchUsers(){
    let response =await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response.json();
    console.log(data);
}
fetchUsers();





