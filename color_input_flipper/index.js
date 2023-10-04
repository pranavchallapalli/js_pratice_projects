let a= document.getElementById("change");
let b=document.querySelectorAll("div");
let c =document.querySelector('p');
let d = document.getElementById('value');
let e =document.body;
console.log(b[1],a,d);
a.addEventListener('input',()=>{
        b[1].style.backgroundColor = a.value;
        d.value = a.value;
        c.innerHtml = a.value;
        

})
// let arr=["red","blue","green","yellow"];
// document.body.style.backgroundColor = arr[Math.random()*arr.length];

function flip(){
    if(!isNaN(a.value)){
        console.log(a.value);
        e.style.background = a.value;
        
}
}

