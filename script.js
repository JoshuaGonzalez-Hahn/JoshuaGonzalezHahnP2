//This file is where I used my two jQuery methods: .delay() and .toggle()
//.delay() sets a timer to delay execution of subsequent items in the queue.
//and .toggle()  is able to display or hide the matched elements.
//I used both to make the site feel more interactive.
//You can find the methods and explanations of what they are and how I used them on
//lines 14-31, 48-55, and 170-187.

$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  //This is where I used .delay(). .delay() sets a timer to delay execution of subsequent items in the queue.
  //I'm using it to show a comment from your pet to say hello and it's name and then after a few seconds,
  //it will change to another comment asking for a treat.
  //It is used to have a more interactive aspect to your pet.
  // Add intial comment from pet
  //$(".pet-comment").text("Hello! I'm " + pet_info.name + "!");
  $(".pet-comment")
    .hide()
    .delay(500)
    .fadeIn(500, function () {
      $(this).text("Hello! I'm " + pet_info.name + "!");
    })
    .delay(1500)
    .fadeOut(1000, function () {
      $(this).text("You should give me a treat first!");
    })
    .delay(500)
    .fadeIn(1000);
  // .delay(2000)
  // .fadeOut(800)

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".special-treat-button").click(clickedSpecialTreatButton);
  $(".gold-treat-button").click(clickedGoldTreatButton);
  $(".ramen-button").click(clickedRamenButton);
  $(".steak-button").click(clickedSteakButton);
  $(".puppuccino-button").click(clickedPuppuccinoButton);
  $(".sleep-button").click(sleepAnimation);

  // Initially hide the special foods menu
  $(".special-foods-menu").hide();
  //This is where I used .toggle(). .toggle()  is able to display or hide the matched elements.
  //I'm using it show the special foods menu when the special foods button is clicked on.
  //It is used to be more interactive for the user. The menu can be shown or hidden when the button is clicked.
  // Show/hide menu when button clicked
  $(".special-foods-button").click(function () {
    $(".special-foods-menu").toggle();
  });
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Pakkun", weight: 20, happiness: 50 };

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 4;
  // Increase pet weight
  pet_info.weight += 2;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("Thank you for the treat!");
  petBounceAnimation();
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness += 8;
  // Decrease pet weight
  pet_info.weight -= 1;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("I love playing!");
  petBounceAnimation();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness -= 5;
  // Decrease pet weight
  pet_info.weight -= 5;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("I don't really like exercising!");
  petExerciseAnimation();
}

// Added special treat button function
function clickedSpecialTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 5;
  // Set weight to default weight(20)
  pet_info.weight = 20;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("Wow! I feel lighter! Thank you!");
  petBounceAnimation();
}

// Added gold treat button function
function clickedGoldTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 15;
  // Increase weight
  pet_info.weight += 1;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("A Golden Dog Treat! Thank you!");
  petBounceAnimation();
}

// Added ramen food button function
function clickedRamenButton() {
  // Increase pet happiness
  pet_info.happiness += 12;
  // Increase weight
  pet_info.weight += 3;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("Oh wow, some Ramen! Thank you!");
  petBounceAnimation();
}
// Added steak food button function
function clickedSteakButton() {
  // Increase pet happiness
  pet_info.happiness += 10;
  // Increase weight
  pet_info.weight += 4;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("I love Steak! Thank you!");
  petBounceAnimation();
}

// Added puppuccino treat button function
function clickedPuppuccinoButton() {
  // Increase pet happiness
  pet_info.happiness += 20;
  // Increase weight
  pet_info.weight += 5;
  checkAndUpdatePetInfoInHtml();
  commentFromPet("A puppuccino, I love this! Thank you!");
  petBounceAnimation();
}

// Adding animation for pet to bounce when happiness increases
function petBounceAnimation() {
  $(".pet-image")
    // move up 20px
    .animate({ top: "-=20px" }, 200)
    // move down
    .animate({ top: "+=20px" }, 200)
    // move up 20px
    .animate({ top: "-=20px" }, 300)
    // move down
    .animate({ top: "+=20px" }, 300);
}

// Adding animation for when pet exercises.
function petExerciseAnimation() {
  $(".pet-image")
    // move left 10px
    .animate({ left: "-=10px" }, 200)
    // move right back
    .animate({ left: "+=10px" }, 200)
    // move left 20px
    .animate({ left: "-=20px" }, 500)
    // move down
    .animate({ left: "+=20px" }, 500);
}

//This is where I also used .delay(). Im using it to make the pet appear to sleep.
function sleepAnimation() {
  commentFromPet("Time to sleep...");
  // Increase pet happiness
  pet_info.happiness += 5;
  // Decrease weight a bit when sleeping
  pet_info.weight -= 1;
  checkAndUpdatePetInfoInHtml();

  $(".pet-image")
    //sleeping
    .animate({ opacity: 0.3 }, 800)
    .delay(3000)
    .animate({ opacity: 1 }, 800, function () {
      // fade back in. awake
      commentFromPet("I'm awake! Let's play!");
    });
}

//Adding function for pet comment after a button is pressed
function commentFromPet(message) {
  document.querySelector(".pet-comment").textContent = message;
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero.
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
  // Added conditional to check if happiness is lower than 0. Don't exceed it below 0.
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  // Added conditional to check if happiness is higher than 100. Don't exceed it over 100.
  if (pet_info.happiness > 100) {
    pet_info.happiness = 100;
  }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
}
