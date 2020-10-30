// Variables
// Fetch ID:s from HTML
const title = document.getElementById("title");
const subTitle = document.getElementById("sub-title");
const firstButton = document.getElementById("btn");
const secondButton = document.getElementById("btn2");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("user-submit");
const fancyDiv = document.getElementById("fancy-restaurant");
const fastDiv = document.getElementById("fast-restaurant");
// const dishSubmit = document.getElementById("dish-submit");

let username = "";

// Enter name before starting game
/** Starts program when clicking button */
submitButton.onclick = function() {
    username = userInput.value;
    introWelcome();
}

/** Displays users name and a button, starts game when clicked. */
function introWelcome() {
    title.innerText = "Welcome, " + username;
    subTitle.innerText = "";

    firstButton.classList.remove("hidden");
    firstButton.innerText = "Click to start!"
    firstButton.onclick = function() {
        startFunction();
    }

    userInput.classList.add("hidden");
    submitButton.classList.add("hidden");

}

// Choose restaurant
/** Choose to eat at a fancy restaurant or a fastfood restaurant. */
function startFunction() {
    title.innerText = "";
    subTitle.innerText = subTitleIntro;

    firstButton.innerText = "fancy restaurant";
    secondButton.classList.remove("hidden");
    secondButton.innerHTML = "fastfood restaurant";

    firstButton.onclick = function() {
        regretFancyRestaurantOption(); 
    }

    secondButton.onclick = function() {
        regretFastFoodRestaurantOption(); 
    }
}

/** Continue or regret option for fancy restaurant. */
function regretFancyRestaurantOption() {
    subTitle.innerText = "Are you sure?";
    firstButton.innerText = "Yes, continue";
    firstButton.onclick = function() {
        fancyRestauratMenu();
    }
    secondButton.innerText = "No, go back";
    secondButton.onclick = function() {
        startFunction();
    }
}

/** Continue or regret option for fastfood restaurant. */
function regretFastFoodRestaurantOption() {
    subTitle.innerText = "Are you sure?";
    firstButton.innerText = "Yes, continue";
    firstButton.onclick = function() {
        fastFoodRestaurantScene();
    }
    secondButton.innerText = "No, go back";
    secondButton.onclick = function() {
        startFunction();
    }
}

// Fancy restaurant scene
/** Fancy restaurant scene start. */
function fancyRestauratMenu() {
    subTitle.innerText = fancyRestaurantWelcome;
    firstButton.classList.add("hidden");
    secondButton.classList.add("hidden");
    fancyDiv.classList.remove("hidden");

    handleFancyRestaurantChoice();
}

/** Dish menu for fancy restaurant scene. */
function handleFancyRestaurantChoice() {
    const dishInput = document.getElementById("dish-input").value;
    const fancyMenu = ["pizza", "paella", "pasta"]

    if(dishInput == fancyMenu[0]) {
        restaurantClosing();
    } else if (dishInput == fancyMenu[1]) {
        restaurantClosing();
    } else if (dishInput == fancyMenu[2]) {
        restaurantClosing();
    } else {
        fancyRestauratMenu();
    }
}

//Fastfood restaurant scene 
/** Fastfood restaurant scene start. */
function fastFoodRestaurantScene() {
    subTitle.innerText = fastfoodWelcome;
    firstButton.classList.add("hidden");
    secondButton.classList.add("hidden");
    fastDiv.classList.remove("hidden");

    handleFastRestaurantChoice();
}

/** Dish menu for fastfood restaurant scene. */
function handleFastRestaurantChoice() {
    const fastDishInput = document.getElementById("fast-input").value;
    const fastfoodMenu = ["cheeseburger", "doubleburger", "veganburger"]

    if(fastDishInput == fastfoodMenu[0]) {
        restaurantClosing();
    } else if (fastDishInput == fastfoodMenu[1]) {
        restaurantClosing();
    } else if (fastDishInput == fastfoodMenu[2]) {
        restaurantClosing();
    } else {
        fastFoodRestaurantScene();
    }
}

// Last Scene
/** Endning scene, when button is clicked the page refreshes to starting point. */
function restaurantClosing() {
    subTitle.innerText = gameExit;
    firstButton.innerText = "Play again?";
    firstButton.classList.remove("hidden");

    fancyDiv.classList.add("hidden");
    fastDiv.classList.add("hidden");
    firstButton.onclick = function() {
        location.reload();
    }
}

// Paragraphs made into variables
// Intro
const subTitleIntro = "You are very hungry and you want to go out and eat some food. Do you want to eat at a fancy restaurant or a fastfood restaurant?";
// Fancy restaurant scene paragraphs
const fancyRestaurantWelcome = "You enter a nice restaurant with light candles and soothing music. You get a menu from a waiter. You got 3 options. Do you want to order pizza, paella or pasta?";
// Fastfood restaurant scene paragraphs
const fastfoodWelcome = "At the fastfood restaurant there are kids screamning everywhere and a big queue to the counter. When it's your turn to order you have 3 options. Do you want to order cheeseburger, doubleburger or veganburger.";
// Outro
const gameExit = "After a nice meal it's time to go home. Thanks for playing!";

