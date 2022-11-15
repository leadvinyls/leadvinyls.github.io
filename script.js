let randomColor2;
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" +  randomColor2;
setInterval(() => {
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" +  randomColor2;
}, 3000);

let randomColor = Math.floor(Math.random()*16777215).toString(16);
let button = document.querySelectorAll(".gen-button");
let colorText = document.querySelectorAll(".hex-color");
let colorCube = document.querySelectorAll(".color-cube");

button.forEach(element => {
    element.addEventListener('click', () => {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorCube.forEach(element =>{
            element.style.backgroundColor = "#" + randomColor;
        });
        colorText.forEach(element => {
            element.innerHTML = "#" + randomColor;
            element.style.color = "#" + randomColor;
        });
        element.style.color = "#" + randomColor;
        element.style.border = "0.1px solid #" + randomColor;
    });
});

