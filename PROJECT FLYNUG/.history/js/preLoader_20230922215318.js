var randomDelay = (Math.random() * 2 + 1) * 1000;

var loader = document.getElementById("backgrounf-loding");
window.addEventListener("load", function(){
    loader.style.display="none";
}, randomDelay);
