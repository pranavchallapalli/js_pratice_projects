var a = document.getElementById('guess');
var btn = document.querySelectorAll('button');
var rad = Math.floor(Math.random()*1000);
var dis = document.getElementById('outp');
var hi = document.getElementById('hint');
var rang = document.getElementById('range');
var max= 1000
var min = 0
console.log(a);
 var r=[]
function ran(){
    console.log(rad);
    let inv = Number(a.value);
   
    if(!isNaN(inv)){
        r.push(inv);
        for(let i =0;i< r.length;i++){
        if(inv == rad){
            dis.innerHTML = `you won the value is ${inv}`;
            hi.style.background = "green";
            hi.innerHTML = 'you won!';
            break;
        }
        else if (inv>rad){
            dis.innerHTML= `${r} `;
            hi.innerHTML = `your guess is high`;
            hi.style.background = 'red';
            max = inv   
        }
        else if(inv<rad){
            dis.innerHTML=`${r}`;
            hi.style.background = 'red';
            hi.innerHTML = `your guess is low`;
            min = inv
        }
        if(i==15){
            dis();
        }
    }
}
}

function hin(){
 rang.innerHTML =  `the range is between ${min} - ${max}`
}
function dis(){
    a.disabled = true;
    btn[0].disabled = true;
    btn[1].disabled = true;

}