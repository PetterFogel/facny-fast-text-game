/** Varibales fetching id:s from HTML */
/** @type {HTMLHeadingElement} h1 tag. */
const title = document.getElementById("title");
/** @type {HTMLParagraphElement} Paragraph tag. */
const subTitle = document.getElementById("sub-title");
/** @type {HTMLButtonElement} Button. */
const firstButton = document.getElementById("btn");
/** @type {HTMLButtonElement} Button. */
const secondButton = document.getElementById("btn2");
/** @type {HTMLInputElement} User input. */
const userInput = document.getElementById("user-input");
/** @type {HTMLButtonElement} Button */
const submitButton = document.getElementById("user-submit");
/** @type {HTMLDivElement} Div with inputs. */
const fancyDiv = document.getElementById("fancy-restaurant");
/** @type {HTMLDivElement} Div with inputs. */
const fastDiv = document.getElementById("fast-restaurant");
/** User name */
let username = "";

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
    /** @type {HTMLInputElement} Input field. */
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

/** Fastfood restaurant scene start. */
function fastFoodRestaurantScene() {
    subTitle.innerText = fastfoodWelcome;
    firstButton.classList.add("hidden");
    secondButton.classList.add("hidden");
    fastDiv.classList.remove("hidden");

    handleFastRestaurantChoice();
}

/** Dish menu for fastfood restaurant scene start. */
function handleFastRestaurantChoice() {
    /** @type {HTMLInputElement} Input field. */
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

/** Paragraphs made into variables. */
/** @type {innerHTML} Paragraph for intro. */
const subTitleIntro = "You are very hungry and you want to go out and eat some food. Do you want to eat at a fancy restaurant or a fastfood restaurant?";
/** @type {innerHTML} Paragraph for fancy restaurant scene. */
const fancyRestaurantWelcome = "You enter a nice restaurant with light candles and soothing music. You get a menu from a waiter. You got 3 options. Do you want to order pizza, paella or pasta?";
/** @type {innerHTML} Paragraph for fastfood restaurant scene. */
const fastfoodWelcome = "At the fastfood restaurant there are kids screamning everywhere and a big queue to the counter. When it's your turn to order you have 3 options. Do you want to order cheeseburger, doubleburger or veganburger.";
/** @type {innerHTML} Paragraph for outro. */
const gameExit = "After a nice meal it's time to go home. Thanks for playing!";