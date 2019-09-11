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



//box 2
//btn 4 = stretch
document.getElementById("btn4").addEventListener("click", function(){

    document.getElementById("box2").style.width = "200px";

});

//btn 5 = fade

document.getElementById("btn5").addEventListener("click", function(){

    document.getElementById("box2").style.opacity= 0;

});

//btn 6 = color

document.getElementById("btn6").addEventListener("click", function(){

    document.getElementById("box2").style.backgroundColor = "green";
});

//resetbtn2

document.getElementById("resetBtn2").addEventListener("click", function(){

    document.getElementById("box2").style.opacity= 100;

});

document.getElementById("resetBtn2").addEventListener("click", function(){

    document.getElementById("box2").style.backgroundColor = "lightcoral";
});

document.getElementById("resetBtn2").addEventListener("click", function(){

    document.getElementById("box2").style.height = "25px";
});
document.getElementById("resetBtn2").addEventListener("click", function(){

    document.getElementById("box2").style.width = "25px";
});
