song1 = "";
song2 = "";
songCheck = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
function preload() {
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3"); 
      canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
  }

function setup(){
    poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}
    function modelLoaded(){
        console.log('PoseNet is Initialized');
    }

 function draw() {

  image(video, 0, 0, 600, 500);
  song1_status = song1.isPlaying();
  song2_status = song2.isPlaying();

  fill("#FF0000"); stroke("#FF0000");

  if(scoreLeftWrist > 0.2) {
   circle(leftWristX,leftWristY,20);
  song1.play();
  song2.stop();
  document.getElementById("song").innerHTML = "Playing - Harry Potter"

   if(scoreRightWrist > 0.2) {
    circle(rightWristX,rightWristY,20);
    song1.stop();
    song2.play();
    document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
     } }
     }

function gotPoses(results){
  if(results.length > 0){
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      scoreLeftWrist = results[0].pose.keypoints[9].score;
      console.log("leftWristX = "+leftWristX + "leftWristY = "+leftWristY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      scoreRightWrist = results[0].pose.keypoints[10].score;
      console.log("rightWristX = "+rightWristX + "rightWristY = "+rightWristY);
  }
}
