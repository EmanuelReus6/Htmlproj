function slide1(){
    document.getElementById("slide").src="thecureshow.jpg";
    setTimeout("slide2()", 3000)
}

function slide2(){
    document.getElementById("slide").src="thecureshow2.jpg";
    setTimeout("slide3()", 3000)
}

function slide3(){
    document.getElementById("slide").src="the cure img3.jpg";
    setTimeout("slide1()", 3000)
}

