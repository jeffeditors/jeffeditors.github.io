var porte = document.getElementById('door');
var humain = document.getElementById('humain');
var imgHumain = document.getElementById('imgHumain');

porte.onclick = function() { 
    porte.style.display = "none";
    humain.style.display = "block";
};

imgHumain.onmousedown = function () {
    document.getElementById("linkAudio").play();
}

imgHumain.onmouseup = function () {
    document.getElementById("linkAudio").pause();
}