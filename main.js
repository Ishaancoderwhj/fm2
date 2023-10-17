function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is loaded");
}

function draw(){
    background("#34d8eb");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}