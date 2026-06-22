let userName = "You";

function sendMessage() {

    let input = document.getElementById("input").value;
    let chat = document.getElementById("chat");

    chat.innerHTML += "<p>" + userName + ": " + input + "</p>";

    if (input.toLowerCase().includes("what is unity")) {
        chat.innerHTML += "<p>GuideZ: Unity is a game engine.</p>";
    }

    else if (input.toLowerCase().includes("hello")) {
        chat.innerHTML += "<p>GuideZ: Hello!</p>";
    }

    else if (input.toLowerCase().startsWith("my name is ")) {

        userName = input.substring(11);

        chat.innerHTML += 
        "<p>GuideZ: Nice to meet you " + userName + "!</p>";
    }
        else if (input.toLowerCase().includes("what time is it")) {

        let now = new Date();
        let time = now.toLocaleTimeString();

        chat.innerHTML +=
        "<p>GuideZ: The time is " + time + "</p>";
        }
        else if (input.toLowerCase().includes("nice")) {
        chat.innerHTML += "<p>GuideZ: Thanks!";

        }
     else if (input.includes("+")) {
    let result = eval(input);
    chat.innerHTML +=
    "<p>GuideZ: " + result + "</p>";
}

    else {
        chat.innerHTML += 
        "<p>GuideZ: I don't know that yet.</p>";
    }

    document.getElementById("input").value = "";
}
function updateTime() {
    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("time").innerHTML =
        "Time: " + time;
}

updateTime();

setInterval(updateTime, 1000);

function openSettings() {

let settings = document.getElementById("settings");

if (settings.style.display === "block") {
    settings.style.display = "none";
}
else {
    settings.style.display = "block";
}

}


function blueTheme() {

document.body.style.backgroundColor = "rgb(0,16,85)";
document.body.style.color = "rgb(122,217,255)";

}


function redTheme() {

document.body.style.backgroundColor = "rgb(80,0,0)";
document.body.style.color = "white";

}

function blackTheme() {

document.body.style.backgroundColor = "rgb(24, 24, 24)";
document.body.style.color = "white";

}

function coolFont() {
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
}