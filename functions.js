function oncalculator(){
    document.getElementById("msg").innerHTML = "Calculator is ON. press OFF to shutdown";
    
    document.addEventListener("click",clearScreen )
    p.style.cursor = "text";
    p.style.animation = "blink 1s infinite";
}

function offcalculator(){
    document.getElementById("msg").innerHTML = "Calculator is OFF. press ON to startup";
    document.addEventListener("click",restorescreen )
}

const resultscreen = document.getElementById("resultScreen");
const p = resultscreen.querySelector("p");

function clearScreen(){
    p.innerHTML="";

}

function restorescreen(){
    p.innerHTML = "8888888888888888888888888888888888";
}
fu
