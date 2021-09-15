function moveI() {

    window.location = "index.html";

}

function back() {

    window.location = "home.html";

}

img = "";
status = "";
function preload() {

    img = loadImage('dog_cat.jpg');

}

function setup() {

    canvas = createCanvas(520, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";

}

function modelLoaded() {

    console.log('Model Loaded!');
    status = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {

    if (error) {

        console.error(error);

    }

    console.log(results);

}

function draw() {

    image(img, 0, 0, 520, 420);
    fill("rgb(0, 0, 0)");

    text('Dog', 45, 75);
    noFill();
    stroke("rgb(255, 150, 0)");
    rect(30, 60, 230, 340);

    fill("rgb(0, 0, 0)");

    text('Cat', 290, 90);
    noFill();
    stroke("rgb(255, 150, 0)");
    rect(250, 75, 230, 340);

}