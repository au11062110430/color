const box = document.getElementById("box");
const code= document.getElementById("code");
const btn= document.getElementById("color");

btn.addEventListener('click', colorGenerate);

function colorGenerate(){
let value ='0123456789ABCDEF';
let color='#';


for(let i=0;i<6;i++){
    let randomValue = Math.floor(Math.random()*16);
    color += value[randomValue];

}
code.innerHTML=color;
box.style.backgroundColor = color;
}