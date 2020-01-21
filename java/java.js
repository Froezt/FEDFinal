var x = document.getElementById("myTopnav");


function myFunction() {
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function check() {
        document.querySelector("#check").style.display = "inline-block";
        document.getElementById("laser1").classList.add("laser1");
        document.getElementById("laser2").classList.add("laser2");
        document.getElementById("audio").play();
}

document.querySelector("#stuurknop").addEventListener("click", check);

