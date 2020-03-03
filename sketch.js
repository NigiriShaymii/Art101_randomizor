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
let animating = false;


function setup() {
  createCanvas(500, 500);
  background(200);
  textSize(40);
  textAlign(CENTER);
  text("Click to Randomize", width/2, height/2);

}

function draw() {
  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }
}

function randomizer() {

  animating = false;
  if (superpower[0]) {

    background(random(200, 255));
    randomIndex = int(random(superpower.length));
    text(`${superpower[randomIndex].ability}: \nPower Level: ${superpower[randomIndex].power}`, width/2, height/2 );
    superpower.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("That's all!", width/2, height/2 );
  }
}

// function changeBackground{
//   if(counter <= 5)
//   {
//     counter++;
//     console.log(counter);
//     background(random(255), random(255),random(255));
//     setTimeout(changeBackground, 1000);
//   }
//   else {
//
//   }
//
// }

function mousePressed() {

  animating = true;
  setTimeout(randomizer, 2000);

}
