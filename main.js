x = 0;
y = 0;
draw_apples = "";
to_number = 0;

SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
function preload() {
    img = loadImage("apple.png")
}
function setup() {
    canvas = createCanvas(900,600);
}
function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);

    content = event.results[0][0].transcript;
    to_number = Number(content);

    if (Number.isInteger(to_number)) {
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        draw_apples = "set"
    }
}
function draw() {

    if (draw_apples == "set") {
        console.log("applesisset")
        for(var i = 1; i <= to_number; i++) {
        x = Math.floor(Math.random() * 900); 
        y = Math.floor(Math.random() * 600); 
        image (img, x, y, 50, 50);
    }
        spas = i - 1 + " Apples have been drawn";
        document.getElementById("status").innerHTML = spas;
        draw_apples = "";
    }
}