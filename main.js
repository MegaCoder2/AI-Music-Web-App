song1 = ""
song2 = ""
var leftWristX = 0
var rightWristX = 0
var leftWristY = 0
var rightWristY = 0
var scoreleft = 0
var scoreright = 0
function preload()
{
    song1 = loadSound("music.mp3")
    song2 = loadSound("Peter-Pan-and-the-Pirates.mp3")
}
function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristY = results[0].pose.rightWrist.y
        scoreleft = Math.round(results[0].pose.keypoints[9].score * 100)
        scoreright = Math.round(results[0].pose.keypoints[10].score * 100)
        console.log("Left wrist (X, Y): " + leftWristX + ", " + leftWristY)
        console.log("Right wrist (X, Y): " + rightWristX + ", " + rightWristY)
        console.log("Score left: " + scoreleft + "%, Score right: " + scoreright + "%")
    }
}
function modelLoaded()
{
    console.log("PoseNet loaded successfully.")
}
function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", getPoses)
}
function draw()
{
    image(video, 0, 0, 600, 500)
    image(video, 0, 0, 600, 500)
    fill("#FF0000")
    stroke("#FF0000")
    if(scoreleft > 0.5)
    {
        song2.stop()
        circle(leftWristX, leftWristY, 20)
        InNumberleftWristY = Number(leftWristY)
        song1.play()
    }
    if(scoreright > 0.5)
    {
        song1.stop()
        circle(leftWristX, leftWristY, 20)
        InNumberleftWristY = Number(leftWristY)
        song2.play()   
    }
}
function play()
{
    song1.setVolume(100)
    song1.rate(1)
    song1.play()
}