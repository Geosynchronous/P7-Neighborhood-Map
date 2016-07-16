// Cat Clicker Premium by George Fischer
// Udacity Mini-Project

// THE CODING PLAN
// (DATA in data.js)
    // - Generate
    //     - DIVs
    //         - Title
    //         - Menu Container
    //             - Directions
    //             - Cat List
    //                 -Individual Cat Names
    //         - Data Containers (5 Cats)
    //             - Description Container
    //                 -Cat Name
    //                 - Click Count (default Value = 0)
    //             - Image
    // - Append
    //     - Title
    //     - Menu Container
    //     - Data Conainer (first Cat)

    // - Invoke Event Handler
    //     - Clicked Image Response
    //         - Cat Selected
    //         - Counter Incremented
    //         - Event Response
    //             - Update Selected Cat Data Content to screen (.innerHTML)
    //                 - Cat Name
    //                 - Click Count
    //                 - Image

// GENERATE DIV NODES
// TITLE, MENU CONTAINER, CAT CONTAINER
// (Data in data.js)


// TITLE DIV
// var titleElementGenerator = function() {

//     var titleContainer,
//         titleName,
//         h;

//     titleContainer = document.createElement("div");
//     titleContainer.classList.add("title");
//     h = document.createElement("h1");
//     titleName = document.createTextNode(title);
//     h.appendChild(titleName);
//     titleContainer.appendChild(h);

//     return titleContainer;
// };

// // MENU CONTAINER DIVs
// var menuElementGenerator = function(i) {
//     return menuContainer;
// };

// // CAT CONTAINER DIVs
// var catElementGenerator = function(i) {

//     var catContainer,
//         catImageContainer,
//         catImage,
//         catName;

//     catContainer = document.createElement("div");
//     catImageContainer = document.createElement("div");
//     catDescriptionContainer = document.createElement("div");
//     catImage = document.createElement("img");

//     catContainer.classList.add("catItemContainer");
//     catContainer.style.width = "50%";
//     catContainer.id = "cat" + i;

//     catImage.src = "images/cat-" + i + ".jpg";
//     catImage.style.width = "100%";
//     catImageContainer.style.width = "100%";
//     catImageContainer.appendChild(catImage);
//     catContainer.appendChild(catImageContainer);

//     catName = document.createElement("h4");
//     catName.id = "catCount" + i;
//     catName.innerHTML = "TIGER" + i + " " + count;
//     catImageContainer.appendChild(catName);

//     return catContainer;
// };

// APPEND VIEW

// INVOKE

// document.body.appendChild(titleElementGenerator());

// INVOKE
