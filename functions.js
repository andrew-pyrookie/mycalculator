function oncalculator(){
    document.getElementById("msg").innerHTML = "Calculator is ON. press OFF to shutdown";
    
    document.addEventListener("click",clearScreen )
    
    p.style.cursor = "text";
    p.style.animation = "blink 1s infinite";

    var display = document.getElementById("display");

    display.style.fontStyle = "bold";
    display.style.color = "black";
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


function num(x) {
    
    display.innerHTML += x.toString();
    
}

function add(){
    display.innerHTML += "+";
}

function minus(){
    display.innerHTML += "-";
}

function multiply(){
    display.innerHTML += "*";

}

function devide(){
    display.innerHTML += "/";
}

function sin(){
    display.innerHTML += "Sin";
}

function cos(){
    display.innerHTML += "Cos";
}

function tan(){
    p.innerHTML += "tan";

}

function log(){
    p.innerHTML += "log";
}

function equal(){
    const qstn = document.getElementById("resultscreen");
    qstn.forEach(element => {
        if (element == "+"){
            const ans = sum(element);
            
        }
    });
}