function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    background("red");
}
function draw() {
  image(video,50,50,540,380) 
  tint(tint_color) 
   fill("yellow")
   circle(25,25,20)
}
function take_snapshot(){
    save("rajanyo.png")
}
function filtercolor(){
    tint_color=document.getElementById("color").value
}