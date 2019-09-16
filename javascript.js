document.getElementById("btn1").addEventListener("click", function(){

    document.getElementById("box").style.height = "200px";
});

document.getElementById("btn2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("btn3").addEventListener("click", function(){

    document.getElementById("box").style.opacity= 0;
});


document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height="150px";
});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "yellow";
});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity= 100;
});
