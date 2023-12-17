function generateGrid(number){
    let container = document.querySelector('.box');
    for (let i=0; i < number; i = i+1) {
        let dimension = Math.floor(640 / Math.sqrt(number));
        let test_box = document.createElement('div');
        test_box.style.height = dimension+"px";
        test_box.style.width = dimension+"px";
        test_box.addEventListener('mouseover', (event) => {
            event.currentTarget.style.backgroundColor = 'black';
        })
        container.appendChild(test_box);
    }
}

generateGrid(4096);