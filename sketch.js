let space = ["Earth","Stars","Galaxy","Moon","Nebula","Shuttle"];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(300);
}

function draw() {

}

function mousePressed() {
  background(random(200));
  randomIndex = [int(random(space.length))]);
  text(space[randomIndex].name, 100,100);
  space.splice(randomIndex, 1);

}
