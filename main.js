function preload(){

}
function setup(){
    canvas=createCanvas(1000,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,250,150,500,300);

    fill(255,0,0);
    stroke("red");
    rect(240,140,10,320);

    fill(255,0,0);
    stroke("red");
    rect(240,140,520,10);

    fill(255,0,0);
    stroke("red"); 
    rect(750,140,10,320);

    fill(255,0,0);
    stroke("red"); 
    rect(240,450,520,10);
}
function take_snapshot(){
save("bla_bla_hahahahahahahahahahahahahaha.png")
}