// function sum(a,b){
//     return a+b;
// }
// const result = sum(20,50)
// console.log("Sum = " + result)

// 

// function login(msg, error) {
//     if (error) {
//         console.log("Error: " + error);
//     } else {
//         let randomNumber = Math.floor(Math.random() * 1000); 
//         console.log("Welcome");
//         console.log("Your Random Number is: " + randomNumber);
//     }
// }

// function loginVerification(username, password, clbk) {
//     if (username === "Swi.kriti47" && password === "Swikriti") {
//         clbk("Success", null);
//     } else {
//         clbk(null, "Username or Password is incorrect");
//     }
// }

// loginVerification("Swi.kriti47", "Swikriti", login);    


// console.log("First")
// setTimeout(()=>{console.log("Second"),1000})
// for(i=0;i<10000;i++){
//     console.log("Second")
// }
// console.log("Third")

//callback hell error example
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(() => {        
//                         setTimeout(() => {        
//                             setTimeout(() => {        
//                                 setTimeout(() => {  
//                                 console.log("Nine")},1000)
//                             console.log("Eight")},1000)
//                        console.log("Seven") },1000)                          
//                     console.log("Six")}, 1000);
//                 console.log("Five")},1000);
//             console.log("Four")},1000);
//         console.log("Three")},1000);
//     console.log("Two")},1000);
// console.log("One")},1000);

//Promises

// const myPromise = new Promise((resolve,reject)=>{
//     username = "Swi.kriti47";
//     password = "Swikriti";
//     if(username == "Swi.kriti47" && password == "Swikriti"){
//         resolve("success")
//     } else{
//         reject("username or password is incorrect")
//     }

// })

// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All the resources have been closed/memory released")
// })

// async function handleLogin(){
//     try{
//         await myPromise

//     }catch (e){
//         console.log(e)
//     }
//     finally{
//         console.log("All the resources have been closed/memory released")
//     }
// }
// handleLogin();


const div=document.getElementById('container')
const button=document.getElementById('btn')
// console.log(div);
const h2=document.createElement('h2');
h2.innerText='Data is loading....';
console.log(h2);
async function display(){
// div.innerHTML='<h2>Hello Using DOM</h2>';
const serverdata=await fetch('https://fakestoreapi.com/products');
            const jsonData= await serverdata.json();
            console.log(jsonData[1].title)

}
button.addEventListener('click',display);
