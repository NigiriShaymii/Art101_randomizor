//Bunny power

// let superpower = [{
//   ability: "Heal",
//   power: 1
// }, {
//   ability: "Teleportation",
//   power: 2
// }, {
//   ability: "Wind",
//   power: 3
// }, {
//   ability: "Water",
//   power: 4
// }, {
//   ability: "Earth",
//   power: 5
// }, {
//   ability: "Fire",
//   power: 6
// }, {
//   ability: "Electricity",
//   power: 7
// }, {
//   ability: "Superstrength",
//   power: 8
// }, {
//   ability: "Spirit",
//   power: 9
// }, {
//   ability: "Psychic",
//   power: 10
// }];

let superpower = [];

let randomIndex;
let animating = false;
let ability = [];
let counter = 0;
let startRandomiozerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

function preload() {
  for (let i = 0; i <= 9; i++) {
    ability[i] = loadImage(`assets/power_${i}.jpg`);
  }
}

function setup() {
  createCanvas(500, 500);
  background(82, 77, 255);

  textSize(40);
  textAlign(CENTER);
  imageMode(CENTER);
  frameRate(5);
  text("Click to Randomize", width / 2, height / 2);

  //button = createButton("Superpower Randomizer");
  //button.position(width / 4, height); //This puts the button at the bottom instead of the top
  startRandomiozerButton = select('#randButton');
  startRandomiozerButton.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton');
  addMoreButton .mousePressed(addAnotherInput);

  console.log(ability);

}

function draw() {
  if (animating == true) {
    clear();
    image(ability[counter], width / 2, height / 2);

    if (counter < ability.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    //ellipse(random(width), random(height), random(50, 200));
  }
}

function addAnotherInput() {
  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

function randomizer() {

  animating = false;
  if (superpower[0]) {

    //background(random(200, 255));

    clear();
    randomIndex = int(random(superpower.length));
    //text(`${superpower[randomIndex].ability}: \nPower Level: ${superpower[randomIndex].power}`, width / 2, height - 80);
    image(random(ability), width / 2, (height / 2) - 10);
    text(superpower[randomIndex], width / 2, height - 80);
    superpower.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("That's all!", width / 2, height / 2);
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

function buttonPressed() {

if(firstTime) {
  for (let i = 0; i < nameInputs.length; i++)
  {
    superpower.push(nameInputs[i].value());
  }
  firstTime = false;
}

  animating = true;
  setTimeout(randomizer, 2000);

}
