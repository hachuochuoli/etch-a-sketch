function generateGrid(){
    let number = output.innerHTML**2;
    let container = document.querySelector('.box');
    container.innerHTML = '';
    for (let i=0; i < number; i = i+1) {
        let dimension = 640 / Math.sqrt(number);
        let test_box = document.createElement('div');
        test_box.style.height = dimension+"px";
        test_box.style.width = dimension+"px";
        test_box.addEventListener('mouseover', (event) => {
            event.currentTarget.style.backgroundColor = 'black';
        })
        container.appendChild(test_box);
    }
}

function generateRainbowGrid(){
    let number = output.innerHTML**2;
    let container = document.querySelector('.box');
    container.innerHTML = '';
    for (let i=0; i < number; i = i+1) {
        let dimension = 640 / Math.sqrt(number);
        let test_box = document.createElement('div');
        test_box.style.height = dimension+"px";
        test_box.style.width = dimension+"px";
        test_box.addEventListener('mouseover', (event) => {
            event.currentTarget.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
        })
        container.appendChild(test_box);
    }
}

function generateScaleGrid(){
    let number = output.innerHTML**2;
    let container = document.querySelector('.box');
    container.innerHTML = '';
    for (let i=0; i < number; i = i+1) {
        let dimension = 640 / Math.sqrt(number);
        let test_box = document.createElement('div');
        test_box.luminosity = 100;
        test_box.style.height = dimension+"px";
        test_box.style.width = dimension+"px";
        test_box.addEventListener('mouseover', (event) => {
            test_box.luminosity = test_box.luminosity -10;
            event.currentTarget.style.backgroundColor = "hsla(150, 0%,"+test_box.luminosity+"%, 1)";
        })
        container.appendChild(test_box);
    }
}

let output = document.getElementById("demo");

let slider = document.getElementById("myRange").oninput = function(){
    output.innerHTML = this.value;
}

let reset = document.querySelector('#reset');
let color = document.querySelector('#color');
let scale = document.querySelector('#scale');

reset.addEventListener("click", generateGrid);
color.addEventListener("click", generateRainbowGrid);
scale.addEventListener("click", generateScaleGrid);
