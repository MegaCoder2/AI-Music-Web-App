song1 = ""
song2 = ""
function preload()
{
    song1 = loadSound("music.mp3")
    song2 = loadSound("Peter-Pan-and-the-Pirates.mp3")
}
function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw()
{
    image(video, 0, 0, 600, 500)
}
function play()
{
    song1.setVolume(100)
    song1.rate(1)
    song1.play()
}