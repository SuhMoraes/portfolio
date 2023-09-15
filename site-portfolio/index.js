let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");

btn1.addEventListener("click", function() {
    info1.style.display = "block";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
});

btn2.addEventListener("click", function() {
    info1.style.display = "none";
    info2.style.display = "block";
    info3.style.display = "none";
    info4.style.display = "none";
});

btn3.addEventListener("click", function() {
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "block";
    info4.style.display = "none";
});

btn4.addEventListener("click", function() {
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "block";
});
