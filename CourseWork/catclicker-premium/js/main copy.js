
// GLOBAL VARIABLES needed for the two Event Listener IIFE's to work together
// (Question: Is there a better way to do this?  Eliminate Global Variables?)
var numNow,
    clickCount = [];

// CHOOSE CAT MENU
// IIFE Setup, UI and Updates
var CatClickerPremium = function() {

    var num;

    // GENERATE & UPDATE ELEMENT CONTENT
    // Menu & Image Container Element Content as needed
    for (var i = 0; i < data.cat.length; i++) {
        num = i;
        clickCount[num] = 0;

        // IIFE UPDATES IMAGE CONTAINER CONTENTS to web page
        catListElement.addEventListener('click', (function(numCopy) {
            return function() {
                catNameElement.innerHTML = data.cat[numCopy].name;
                catImageElement.innerHTML = "<img src=" + data.cat[numCopy].images + ">";
                catCountElement.innerHTML = clickCount[numCopy];
                numNow = numCopy;
            };
        })(num));
    }
}();

// IIFE UPDATES CAT CLICK COUNTS to web page
// For each cat when clicked
// "clickCount[numNow]++"
//      - updates specific click counter for displayed cat
//      - since global, it remembers value to be used in both MENU and CLICK COUNTS
catImageElement.addEventListener('click', (function() {
    return function() {
        clickCount[numNow]++;
        catCountElement.innerHTML = clickCount[numNow];
    }

}

    };
})());
