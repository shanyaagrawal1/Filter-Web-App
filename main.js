mustache_x=0;
mustache_y=0;
function preload(){
    mustache = loadImage('mustache2.png');
}
function draw(){
image(video, 0, 0, 325, 325);
image(mustache, mustache_x, mustache_y, 60, 45);
}
function setup(){
canvas=createCanvas(325,325);
canvas.center();
video=createCapture(VIDEO);
video.size(325,325);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotposes);
}
function take_snapshot(){
    save('my_picture.png');
}
function modelLoaded(){
    console.log('poseNet has been initialized');
}
function gotposes(results){
if(results.length > 0){
    console.log(results);
    console.log('noseX = '+results[0].pose.nose.x);
    mustache_x=results[0].pose.nose.x-30;
    console.log('noseY ='+results[0].pose.nose.y);
    mustache_y=results[0].pose.nose.y;
}
}
