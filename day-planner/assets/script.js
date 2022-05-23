var btns = document.querySelectorAll("button"); //Finding my buttons and my text areas for use
var text9 = document.getElementById("9");
var text10 = document.getElementById("10");
var text11 = document.getElementById("11");
var text12 = document.getElementById("12");
var text1 = document.getElementById("13");
var text2 = document.getElementById("14");
var text3 = document.getElementById("15");
var text4 = document.getElementById("16");
var text5 = document.getElementById("17");

btns.forEach(button => { //Applies an event listener to all the buttons that when clicked runs the clickSave function.
    button.addEventListener("click", (event) => {
        clickSave(event);
    })
});

function clickSave(event) { //The click function checks to see which button was clicked and saves data to the correct local storage key.
    event.preventDefault();
    if (event.target.id == "btn9") {
        localStorage.setItem("9", JSON.stringify(text9.value));
    }else if (event.target.id == "btn10") {
        localStorage.setItem("10", JSON.stringify(text10.value));
    }else if (event.target.id == "btn11") {
        localStorage.setItem("11", JSON.stringify(text11.value));
    }else if (event.target.id == "btn12") {
        localStorage.setItem("12", JSON.stringify(text12.value));
    }else if (event.target.id == "btn1") {
        localStorage.setItem("13", JSON.stringify(text1.value));
    }else if (event.target.id == "btn2") {
        localStorage.setItem("14", JSON.stringify(text2.value));
    }else if (event.target.id == "btn3") {
        localStorage.setItem("15", JSON.stringify(text3.value));
    }else if (event.target.id == "btn4") {
        localStorage.setItem("16", JSON.stringify(text4.value));
    }else {
        localStorage.setItem("17", JSON.stringify(text5.value));
    }
    location.reload();
}

document.getElementById("9").innerHTML = localStorage.getItem("9"); //Loading text data for each area from local storage.
document.getElementById("10").innerHTML = localStorage.getItem("10");
document.getElementById("11").innerHTML = localStorage.getItem("11");
document.getElementById("12").innerHTML = localStorage.getItem("12");
document.getElementById("13").innerHTML = localStorage.getItem("13");
document.getElementById("14").innerHTML = localStorage.getItem("14");
document.getElementById("15").innerHTML = localStorage.getItem("15");
document.getElementById("16").innerHTML = localStorage.getItem("16");
document.getElementById("17").innerHTML = localStorage.getItem("17");

function currentDay() { //Puts the time at the top and has it count every seocnd.
    document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YY, h:mm:ss a");
    applyColor();
}
setInterval(currentDay, 1000);

function applyColor() { //This function checks the time and changes the background colors.
    var time = moment().format("HH");
    for (let i = 9; i < 18; i++){
        if (i < time) {
            document.getElementById(i).style.backgroundColor = "grey";
        } else if (i > time) {
            document.getElementById(i).style.backgroundColor = "green";
        } else {
            document.getElementById(i).style.backgroundColor = "orange";
        }
    }
}
