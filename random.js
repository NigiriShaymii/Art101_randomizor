//Bunny power

let super = [{
  ability: "Stretch",
  power: 3
}, {
  ability: "Prediction",
  power: 6
}, {
  ability: "Power Enhancer",
  power: 7
}, {
  ability: "Pressurizer",
  power: 5
}, {
  ability: "Healing Gel Manipulation",
  power: 4
}, {
  ability: "Fluid Cutter",
  power: 8,
}, {
  ability: "Aura Manipulation",
  power: 10
}, {
  ability: "Dimension Traveling",
  power: 1
}, {
  ability: "Teleportation",
  power: 2
}, {
  ability: "Weather Control",
  power: 9
}]

let randomIndex;

function setup() {
  createCanvas(1000, 1000);
  background(200);
}

function draw() {
}

function mousePressed(){
  background(random(200, 255));
  randomIndex = int(random(super.length));
  text(super[randomIndex].name, width.length/2, height.length/2);
  super.splice(randomIndex, 1);
}
