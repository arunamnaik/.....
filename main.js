function preload(){};

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 200, 200, 150, 100);
    fill("red");
    circle(50,50,50);
    circle(550,50,50);
    circle(50,400,50);
    circle(550,400,50);

    fill("black");
    rect(75,40,450,20);
    rect(75,390,450,20);
    rect(40,75,20,300);
    rect(540,75,20,300);
}

function take_snapshot(){
    save("???.png")
}

