


const PI = 3.14159;



document.getElementById("mySubmit").onclick = function(){
    let radius = document.getElementById("text").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("h1").textContent = `The circumference is ${circumference} cm`;
}
