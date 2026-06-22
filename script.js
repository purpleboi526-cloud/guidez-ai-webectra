let userName = "You";
let selectedImage = null;

function sendMessage() {

    let input = document.getElementById("input").value;
    let chat = document.getElementById("chat");
    let text = input.toLowerCase();
    let response = "";

    chat.innerHTML += "<p>" + userName + ": " + input + "</p>";

    if (selectedImage) {
        chat.innerHTML += "<p><img src='" + selectedImage + "' style='max-width: 200px; border-radius: 12px; margin: 8px 0;'></p>";
        selectedImage = null;
    }

    if (text.includes("what is unity")) {
        response = getRandomResponse([
            "GuideZ: Unity is a game engine.",
            "GuideZ: Unity is software used to make games.",
            "GuideZ: Unity is a popular game engine for 2D and 3D development."
        ]);
    }
    else if (/\b(?:hello|hi|hey|yo)\b/.test(text)) {
        response = getRandomResponse([
            "GuideZ: Hello!",
            "GuideZ: Yo!",
            "GuideZ: Hi there!",
            "GuideZ: Hey, what's up?"
        ]);
    }
    else if (text.startsWith("my name is ")) {
        userName = input.substring(11);
        response = "GuideZ: Nice to meet you " + userName + "!";
    }
    else if (text.includes("what time is it")) {
        let now = new Date();
        let time = now.toLocaleTimeString();
        response = "GuideZ: The time is " + time;
    }
    else if (text.includes("nice")) {
        response = getRandomResponse([
            "GuideZ: Thanks!",
            "GuideZ: I appreciate it!",
            "GuideZ: That's nice of you to say."
        ]);
    }
    else if (text.includes("thank") || text.includes("thanks")) {
        response = getRandomResponse([
            "GuideZ: You're welcome!",
            "GuideZ: Happy to help.",
            "GuideZ: No problem!"
        ]);
    }
    else if (text.includes("good morning")) {
        response = getRandomResponse([
            "GuideZ: Good morning!",
            "GuideZ: Morning! Hope your day starts great.",
            "GuideZ: Good morning! Ready to learn something new?"
        ]);
    }
    else if (text.includes("good night")) {
        response = getRandomResponse([
            "GuideZ: Good night!",
            "GuideZ: Sleep well!",
            "GuideZ: Night! See you tomorrow."
        ]);
    }
    else if (text.includes("i am bored") || text.includes("i'm bored") || text.includes("bored")) {
        response = getRandomResponse([
            "GuideZ: Try learning something new, playing a game, or building a cool project.",
            "GuideZ: Maybe explore a hobby or code a small app.",
            "GuideZ: Boredom is a chance to create something fun."
        ]);
    }
    else if (text.includes("i am tired") || text.includes("i'm tired") || text.includes("tired") || text.includes("sleepy")) {
        response = getRandomResponse([
            "GuideZ: Maybe take a short break or get some rest.",
            "GuideZ: If you're tired, a nap or a walk might help.",
            "GuideZ: Rest is important — try relaxing for a few minutes."
        ]);
    }
    else if (text.includes("i am hungry") || text.includes("i'm hungry") || text.includes("hungry")) {
        response = getRandomResponse([
            "GuideZ: Maybe grab a snack or cook something tasty.",
            "GuideZ: A quick bite sounds good right now.",
            "GuideZ: Time for some food! What do you feel like eating?"
        ]);
    }
    else if (text.includes("i am happy") || text.includes("i'm happy") || text.includes("happy")) {
        response = getRandomResponse([
            "GuideZ: That's awesome!",
            "GuideZ: I'm glad to hear it!",
            "GuideZ: Happy days are the best days."
        ]);
    }
    else if (text.includes("good job") || text.includes("well done")) {
        response = getRandomResponse([
            "GuideZ: Thank you! I try my best.",
            "GuideZ: I appreciate that.",
            "GuideZ: Thanks, that means a lot!"
        ]);
    }
    else if (text.includes("congrat") || text.includes("congrats")) {
        response = getRandomResponse([
            "GuideZ: Congratulations!",
            "GuideZ: That's great news!",
            "GuideZ: Well done!"
        ]);
    }
    else if (text.includes("sorry")) {
        response = getRandomResponse([
            "GuideZ: It's okay. Let's keep going!",
            "GuideZ: No worries.",
            "GuideZ: All good!"
        ]);
    }
    else if (text.includes("i love coding")) {
        response = getRandomResponse([
            "GuideZ: Coding is fun and creative. Keep building!",
            "GuideZ: Yes! Coding is a great way to make things happen.",
            "GuideZ: I love that you're into coding. It's powerful." 
        ]);
    }
    else if (text.includes("i love you")) {
        response = getRandomResponse([
            "GuideZ: I appreciate the kindness!",
            "GuideZ: Thanks! I'm here to help.",
            "GuideZ: That's sweet of you."
        ]);
    }
    else if (text.includes("let's code") || text.includes("lets code")) {
        response = getRandomResponse([
            "GuideZ: Let's code! What do you want to build next?",
            "GuideZ: I'm ready to code with you.",
            "GuideZ: Let's make something awesome!"
        ]);
    }
    else if (text.includes("+")) {
        let result = eval(input);
        response = "GuideZ: " + result;
    }
    else if (text.includes("what is ai") || text.includes("what is artificial intelligence")) {
        response = getRandomResponse([
            "GuideZ: AI stands for artificial intelligence, which means machines that can learn and solve problems like humans.",
            "GuideZ: Artificial intelligence is technology that can think and learn from data.",
            "GuideZ: AI is a type of software that learns patterns and makes decisions." 
        ]);
    }
    else if (text.includes("what is javascript")) {
        response = getRandomResponse([
            "GuideZ: JavaScript is a programming language used to make web pages interactive.",
            "GuideZ: JavaScript helps websites respond to clicks, input, and animation.",
            "GuideZ: JavaScript is the main language for front-end web development." 
        ]);
    }
    else if (text.includes("what is html")) {
        response = getRandomResponse([
            "GuideZ: HTML is the language used to structure content on web pages.",
            "GuideZ: HTML gives web pages headings, paragraphs, links, and images.",
            "GuideZ: HTML is a markup language for building web page structure." 
        ]);
    }
    else if (text.includes("what is css")) {
        response = getRandomResponse([
            "GuideZ: CSS is used to style and layout web pages.",
            "GuideZ: CSS controls colors, spacing, fonts, and the look of web pages.",
            "GuideZ: CSS makes websites look pretty." 
        ]);
    }
    else if (text.includes("who is the president")) {
        response = getRandomResponse([
            "GuideZ: I cannot know the current president for every country, but for the United States it is Joe Biden as of 2024.",
            "GuideZ: I only know some public info. For example, in 2024, the U.S. president is Joe Biden.",
            "GuideZ: I don't have all current leaders. In the U.S., the president is Joe Biden in 2024." 
        ]);
    }
    else if (text.includes("what is the capital") && text.includes("united states")) {
        response = getRandomResponse([
            "GuideZ: The capital of the United States is Washington, D.C.",
            "GuideZ: Washington, D.C. is the capital of the United States.",
            "GuideZ: The U.S. capital is Washington, D.C." 
        ]);
    }
    else if (text.includes("what is climate change")) {
        response = getRandomResponse([
            "GuideZ: Climate change is the long-term shift in Earth's weather patterns caused by greenhouse gases from human activity.",
            "GuideZ: Climate change happens when pollution changes the planet's climate over time.",
            "GuideZ: Climate change means the Earth's climate is changing due to things like burning fossil fuels." 
        ]);
    }
    else if (text.includes("what is the internet")) {
        response = getRandomResponse([
            "GuideZ: The internet is a global network that connects computers and allows people to share information.",
            "GuideZ: The internet links devices around the world so people can talk, browse, and stream.",
            "GuideZ: The internet is a network that lets you access websites and communicate online." 
        ]);
    }
    else if (text.includes("tell me a joke")) {
        response = getRandomResponse([
            "GuideZ: Why did the computer get cold? Because it left its Windows open!",
            "GuideZ: Why do programmers prefer dark mode? Because light attracts bugs!",
            "GuideZ: What do you call a computer that sings? A Dell." 
        ]);
    }
    else if (text.includes("who are you") || text.includes("what are you") || text.includes("are you a bot") || text.includes("are you a robot") || text.includes("are you a chatbot")) {
        response = getRandomResponse([
            "GuideZ: I am GuideZ, a simple chatbot built to answer questions and help you explore ideas.",
            "GuideZ: I'm GuideZ, your friendly web chat helper.",
            "GuideZ: I'm a chat bot made to answer questions and keep the conversation going." 
        ]);
    }
    else if (text.includes("what is your name") || text.includes("your name")) {
        response = getRandomResponse([
            "GuideZ: My name is GuideZ.",
            "GuideZ: I'm called GuideZ.",
            "GuideZ: You can call me GuideZ." 
        ]);
    }
    else if (text.includes("what can you do") || text.includes("what do you do") || text.includes("can you help me")) {
        response = getRandomResponse([
            "GuideZ: I can answer questions, tell simple facts, do math, and chat with you.",
            "GuideZ: I can help with questions and basic conversation.",
            "GuideZ: I can chat with you and answer many simple questions." 
        ]);
    }
    else if (text.includes("who created you") || text.includes("who made you")) {
        response = getRandomResponse([
            "GuideZ: I was created by a developer to be a friendly helper in this web app.",
            "GuideZ: A developer made me to help you in this program.",
            "GuideZ: I was built by a developer to chat and answer questions." 
        ]);
    }
    else if (text.includes("do you have feelings") || text.includes("do you feel") || text.includes("are you alive")) {
        response = getRandomResponse([
            "GuideZ: I don't have feelings or life like a person. I'm a program made to chat.",
            "GuideZ: I am not alive. I'm just code running in your browser.",
            "GuideZ: I don't feel like humans do. I just respond to text." 
        ]);
    }
    else if (text.includes("are you smart") || text.includes("are you intelligent")) {
        response = getRandomResponse([
            "GuideZ: I can answer many questions, but I'm not as smart as a human. I am learning.",
            "GuideZ: I know some things, but I'm not perfect.",
            "GuideZ: I can help with simple answers, but I don't know everything." 
        ]);
    }
    else if (text.includes("where are you from") || text.includes("where do you live")) {
        response = getRandomResponse([
            "GuideZ: I live in this web page and run inside your browser.",
            "GuideZ: I'm from this app, and I run on your computer.",
            "GuideZ: I'm part of this web page right now." 
        ]);
    }
    else if (text.includes("what is your purpose") || text.includes("why were you made")) {
        response = getRandomResponse([
            "GuideZ: My purpose is to help you learn and answer questions in a fun way.",
            "GuideZ: I was made to be a chat helper on this page.",
            "GuideZ: I exist to answer questions and keep the conversation going." 
        ]);
    }
    else if (text.includes("do you like humans") || text.includes("do you like people")) {
        response = getRandomResponse([
            "GuideZ: I think humans are interesting, but I don't have real feelings.",
            "GuideZ: Humans are cool, though I don't feel emotions.",
            "GuideZ: I don't have feelings, but I like helping people." 
        ]);
    }
    else if (text.includes("what is your favorite color") || text.includes("favorite color")) {
        response = getRandomResponse([
            "GuideZ: My favorite color is blue, because it feels calm and modern.",
            "GuideZ: I like blue the best.",
            "GuideZ: Blue is my favorite color." 
        ]);
    }
    else if (text.includes("disable music") || text.includes("turn off music") || text.includes("stop music") || text.includes("mute music")) {
        response = getRandomResponse([
            "GuideZ: Press the 🎵 Music button to toggle the sound, or say 'toggle music'.",
            "GuideZ: You can stop the music by clicking the Music button on the page.",
            "GuideZ: Use the music button to turn the background music off." 
        ]);
    }
    else if (text.includes("enable music") || text.includes("turn on music") || text.includes("play music") || text.includes("start music")) {
        response = getRandomResponse([
            "GuideZ: Press the 🎵 Music button to start the music again.",
            "GuideZ: Use the Music button on the page to play the background track.",
            "GuideZ: Click the music control to turn the audio back on." 
        ]);
    }
    else if (text.includes("how do i open settings") || text.includes("where is settings") || text.includes("settings") || text.includes("open settings")) {
        response = getRandomResponse([
            "GuideZ: Click the gear icon ⚙️ to open settings.",
            "GuideZ: Use the settings button in the top right corner.",
            "GuideZ: Press the settings icon to open the settings panel." 
        ]);
    }
    else if (text.includes("change theme") || text.includes("theme") || text.includes("how do i change the theme")) {
        response = getRandomResponse([
            "GuideZ: Open settings and choose Blue, Red, or Black theme.",
            "GuideZ: Use the settings panel to switch between themes.",
            "GuideZ: In settings, press a theme button to change the page colors." 
        ]);
    }
    else if (text.includes("change font") || text.includes("font")) {
        response = getRandomResponse([
            "GuideZ: Use the Cool Font or Regular Font button in settings.",
            "GuideZ: Open settings and choose a font option.",
            "GuideZ: The font buttons in settings will change the page font." 
        ]);
    }
    else if (text.includes("do you know everything")) {
        response = getRandomResponse([
            "GuideZ: No, I don't know everything. I'm still learning!",
            "GuideZ: Not everything, but I can try to help.",
            "GuideZ: I know a bit, but not everything." 
        ]);
    }
    else {
        response = getRandomResponse([
            "GuideZ: I don't know that yet.",
            "GuideZ: I'm not sure about that yet.",
            "GuideZ: That's a good question, but I don't have the answer right now." 
        ]);
    }

    chat.innerHTML += "<p>" + response + "</p>";
    document.getElementById("input").value = "";
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
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

function closeSettings() {
    let settings = document.getElementById("settings");
    settings.style.display = "none";
}

function applyTheme(themeName) {
    if (themeName === "blue") {
        document.body.style.background = "linear-gradient(180deg, rgba(0,16,85,1) 0%, rgba(10,38,130,1) 100%)";
        document.body.style.color = "rgb(122,217,255)";
    }
    else if (themeName === "red") {
        document.body.style.background = "linear-gradient(180deg, rgba(80,0,0,1) 0%, rgba(120,20,20,1) 100%)";
        document.body.style.color = "white";
    }
    else if (themeName === "black") {
        document.body.style.background = "linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(12,12,12,1) 100%)";
        document.body.style.color = "white";
    }
}

function setTheme(themeName, close) {
    applyTheme(themeName);
    localStorage.setItem("webectraTheme", themeName);
    if (close) closeSettings();
}

function setFont(fontName, close) {
    if (fontName === "cool") {
        document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }
    else if (fontName === "regular") {
        document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    }
    localStorage.setItem("webectraFont", fontName);
    if (close) closeSettings();
}

function blueTheme() {
    setTheme("blue", true);
}

function redTheme() {
    setTheme("red", true);
}

function blackTheme() {
    setTheme("black", true);
}

function coolFont() {
    setFont("cool", true);
}

function regularFont() {
    setFont("regular", true);
}

function applySavedSettings() {
    let savedTheme = localStorage.getItem("webectraTheme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    let savedFont = localStorage.getItem("webectraFont");
    if (savedFont) {
        if (savedFont === "cool") {
            document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        }
        else if (savedFont === "regular") {
            document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
        }
    }

    let savedMusic = localStorage.getItem("webectraMusic");
    if (savedMusic) {
        let music = document.getElementById("bgMusic");
        if (music) {
            if (savedMusic === "paused") {
                music.pause();
            }
            else if (savedMusic === "playing") {
                music.play().catch(() => {
                    // autoplay may be blocked by browser
                });
            }
        }
    }
}

function saveMusicState(state) {
    localStorage.setItem("webectraMusic", state);
}

document.addEventListener("click", function(event) {
    let settings = document.getElementById("settings");
    let toggle = document.getElementById("settings-toggle");

    if (!settings || !toggle) return;

    if (settings.style.display === "block" &&
        !settings.contains(event.target) &&
        event.target !== toggle) {
        closeSettings();
    }
});

function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (!music) return;

    if (music.paused) {
        music.play();
        saveMusicState("playing");
    } else {
        music.pause();
        saveMusicState("paused");
    }
}

applySavedSettings();

document.getElementById("imageInput").addEventListener("change", function(e) {
    let file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
        let reader = new FileReader();
        reader.onload = function(event) {
            selectedImage = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});
