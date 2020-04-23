//Bunny power

// This is an array for superpowers. Each index have two categories: ability and power.
// This is very useful to organize what's in those categories within the indexes.
let superpower_two = [{
  ability: "Heal",
  power: 1
}, {
  ability: "Teleportation",
  power: 2
}, {
  ability: "Wind",
  power: 3
}, {
  ability: "Water",
  power: 4
}, {
  ability: "Earth",
  power: 5
}, {
  ability: "Fire",
  power: 6
}, {
  ability: "Electricity",
  power: 7
}, {
  ability: "Superstrength",
  power: 8
}, {
  ability: "Spirit",
  power: 9
}, {
  ability: "Psychic",
  power: 10
}];

let superpower = [];

// Initialize randomIndex to pick a random index.
let randomIndex;

// A boolean intialized so the randomizer can start randomizing.
let animating = false;

// An array to input ability images per index
let ability = [];

//
let counter = 0;

// A variable for a randomizer button
let startRandomiozerButton;

// A button to add more input fields for users to add abilities in.
let addMoreButton;

// A variable for canvas
let cnv;

// An array to add ability name into the index via input fields.
let nameInputs = [];

// When you first start the webpage, firstTime variable is true until you start
// the randomizer.
let firstTime = true;

// Before setting up the page and javascript code, preloading will load anything
// Before setup().
function preload() {
  // The For loop is essential to load all images in the assets folder.
  // Each index in the ability array loads the image of a specific image in the
  // assets folder. Here in the loadimage() function, it scans in the folder
  // to find the same image name in the loadImage parameter. But the string is
  // unique, including 'i' so that after it loops, the 'i' will be replaced with
  // a different number and so the loadImage function will find that name in the folder.
  for (let i = 0; i <= 9; i++) {
    ability[i] = loadImage(`assets/power_${i}.jpg`);
  }
}

// A function that setup the webpage via javascript.
function setup() {

  // Canvas, 500 pixels by 500 pixels, is in the variable cnv
  let cnv = createCanvas(500, 500);

  // Canvas is added into the structure of the website, aka, index.html.
  // index.html will adjust the size, position, etc to the canvas.
  // #canvasDiv is also the id in the div.
  cnv.parent("#canvasDiv");

  // Establish bg color.
  background(82, 77, 255);

  // Establish text size.
  textSize(40);

  // All text are centered.
  textAlign(CENTER);

  // All images are centered.
  imageMode(CENTER);

  // Adjust frame rate to 5 fps. (REALLY slow)
  frameRate(5);

  // Colors the text white.
  fill(255);

  //Adds text to the canvas and position it.
  text("What's your \ncombined superpower??", width / 2, height / 2);

  // Adds a button named #randButton. This is inputted into startRandomiozerButton variable.
  // The button is created on the html page, NOT the canvas.
  startRandomiozerButton = select('#randButton');

  // Calls function mousePressed. buttonPressed is when you use a mouse to click the button.
  startRandomiozerButton.mousePressed(buttonPressed);

  // Adds a button named #addMoreButton. This is inputted into addMoreButton variable.
  // The button is created on the html page, NOT the canvas.
  addMoreButton = select('#addMoreButton');
  addMoreButton .mousePressed(addAnotherInput);

  // Checks what ability is displayed in console.
  console.log(ability);

}

// Execute the code below per frame.
function draw() {

  // If the variable, animating, is true, display ability image in the ability
  // array and position image tot he middle of the canvas/
  if (animating == true) {
    clear();
    image(ability[counter], width / 2, height / 2);

    // Counter is based on the ability array length - 1. Counter starts with 0.
    // If counter breaks the condition, counter goes back to 0.
    if (counter < ability.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    //ellipse(random(width), random(height), random(50, 200));
  }
}

// Function to add a caption into the input fields.
function addAnotherInput() {

  // Every time to click "Add Power Name" button, you add 3 input inputFields
  // into the webpage. Each field is pushed into the nameInput array.
  // When the input fields are created, they go to the end of the array.
  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

// Function to randomizer the powers and images.
function randomizer() {

  // Stops the randomizer.
  animating = false;

  // If there's something in the superpower array, the canvas will refresh any
  // content in it with clear().
  if (superpower[0]) {

    clear();

    // randomIndex will randomly choose an index in superpower array.
    // randomIndex_two will choose any ability images.
    randomIndex = int(random(superpower.length));
    randomIndex_two = superpower_two[randomIndex];

    // Creates image and adjust it closely to middle of the canvas.
    image(random(ability), width / 2, (height / 2) - 10);

    // White text to stand out from image and canvas bg color.
    fill(0);

    // Adjust text size.
    textSize(20);

    // Shows text of the superpower and the added superpower from the input fields
    // to combine two powers into one. It is also positioned below the middle of the canvas.
    text(`${superpower[randomIndex]}${randomIndex_two.ability}`, width / 2, height - 10);

    // After the superpower is shown, the text of that superpower will be excluded
    // from the list.
    superpower.splice(randomIndex, 1);

  } else {
    // Change background to white or light grey color.
    background(random(200, 255));

    // Black text.
    fill(0);

    // Adds text and position it to the middle of the canvas.
    text("That's all!", width / 2, height / 2);
  }
}

// When the button is pressed, it starts the randomizer.
function buttonPressed() {

// When firstTime is true, it pushes ALL of the input fields into the superpower
// array. This will happen once.
if(firstTime) {
  for (let i = 0; i < nameInputs.length; i++)
  {
    superpower.push(nameInputs[i].value());
  }
  firstTime = false;
}

  // Randomizer will always be true to animate randomizer.
  animating = true;

  // Adjust and slows rate of when images change in the canvas other than frameRate.
  setTimeout(randomizer, 2000);

}
