tamil_song="";
english_song="";

function preload(){
song1=loadSound("Rakita.mp3");

song2=loadSound("beliver.mp3");
}

function setup(){
canvas=createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}

function draw(){
image(video,0,0,600,400);
}
