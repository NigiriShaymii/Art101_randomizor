//Bunny power

let superpower = [{
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
}];

let randomIndex;

function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
}

function mousePressed(){
  
  background(random(200, 255));
  
  if(superpower[0])
  {
  randomIndex = int(random(superpower.length));
  text(superpower[randomIndex].ability, 50,50 );
  superpower.splice(randomIndex, 1);
  }
  else
  {
    text("That's all!", 50, 50);
  }
}