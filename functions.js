const resultscreen =  document.getElementById("resultScreen");
const p = resultscreen.querySelector("p");
const powerOnBtn = document.getElementById("poweron");
const powerOffBtn = document.getElementById("poweroff");
const functionkeys = Array.from(document.getElementsByClassName("functionskeys"));
const numerics = Array.from(document.getElementsByClassName("numerics"));

function oncalculator(){
    document.getElementById("msg").innerHTML = "Calculator is ON. Press OFF";
    powerOffBtn.disabled = true;
    powerOnBtn.disabled = false;
    
    for (const button of functionkeys){
        button.disabled = true;
    }

    for (const num of numerics){
        num.disabled = true;
    }

    p.style.cursor = "text";
    p.style.animation = "blink infinite";
    document.addEventListener("click", clearScreen);
}

function offcalculator(){
    document.getElementById("msg").innerHTML = "Calculator is OFF. Press ON";   
    powerOffBtn.disabled = false;
    powerOnBtn.disabled = true;

    for (const button of functionkeys){
        button.disabled = false;
    }

    for (const num of numerics){
        num.disabled = false;
    }
    p.style.cursor = "auto";
    p.style.animation = "none";
    p.innerHTML = "8888888888888888888888888888888888";
    document.removeEventListener("click", clearScreen);
}

function clearScreen(){
    p.innerHTML = "";
}

functionkeys.forEach(section => {
    const buttons = section.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = button.textContent;
            displayfunct(buttonText);
        });
    });
});

numerics.forEach(section => {
    const buttons = section.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = button.textContent;
            num(buttonText);
        });
    });
});
