let button = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

function generateColor()
{
    let R = Math.floor(Math.random() * 255 )  ;
    let G = Math.floor(Math.random() * 255 )  ;
    let B = Math.floor(Math.random() * 255 )  ;
    console.log(R,G,B);
    div.style.backgroundColor = `rgb(${R},${G},${B})`;
    h3.innerText = `rgb(${R},${G},${B})`;
}
button.addEventListener("click",generateColor);
