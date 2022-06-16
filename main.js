rightWristX=0;
leftWristX=0;

function setup(){
    canvas=createCanvas(470,400);
    canvas.position(560,100);

    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model has laoded");
}

function gotPoses(resutls){
    if(resutls.length>0){
        console.log(resutls);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
    }
}

function draw(){
    background ("rgb(154, 239, 141)");
}
