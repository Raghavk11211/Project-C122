x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  loadImage('apple.png')
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

  to_number = Number(content);
  if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started Drawing Apple";
  } else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number";
  }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 createCanvas(screen_width,screen_height-150);
 canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    document.getElementById("status").innerHTML - to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number;
    speak();
    for(i = 1 i <=to_number i = i + 1) {
      x = Math.floor(Math.random(x * 700));
      y = Math.floor(Math.random(y * 400));
      image('apple.png', x, y, 50, 50)
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
