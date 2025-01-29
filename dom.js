// !document.getElementById("");

// let element = document.getElementById("demo");
// element.innerTExt = "DOM";
// console.log(element);

// let div = document.getElementById("test");
// div.innerHTML = "<h1>Header</h1>"
// console.log(div);
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].computedStyleMap.backgroundcolor="yellow"
// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map((element)=>{
//     element.computedStyleMap.backgroundxolor="teal";
// })


// let ele = document.getElementsByClassName("div");
// console.log(ele);










// let ele = document.querySelector(".test");
// console.log(ele); 

// let ele = document.querySelectorAll(".test");
// // console.log(ele); 
// [...ele].map(element=>{
//     console.log(element.innertext);
// }) 










// let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
//     document.body.style.background="teal"
// })








// let bgColor = document.querySelectorAll(".bgColor");
// [...bgColor].map((element) => {
//   element.addEventListener("mouseover", () => {
//     console.log(element.innerText);
//     element.style.backgroundColor = element.innerText;
//   });

//   element.addEventListener("mouseleave", () => {
//     element.style.backgroundColor = "transparent";
//   })
// });








// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// x.setAttribute("id", "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image);


// let mainEle = document.createElement("div");
// mainEle.setAttribute("class","mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");
// console.log(topEle);

// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_640.jpg";
// image.width="300"
// image.height="300"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// let h1 = document.createElement("h1");
// h1.innerText="view More";

// bottomEle.appendChild(h1);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);


let password  = document.getElementNyId("uPass");
let check = document.getElementById("check");
let show= doucument.getElementById("show");

let gen = document.getElementsByName("gender");


check>addEventListener("click" ,event=>{
    if(event.target.checked === true){
        password.setAttribute("type", "text");
        show.innerText = "hide password";
    }else{
        password.setAttribute("type" , "password");
    }

})

FormData.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    
})




