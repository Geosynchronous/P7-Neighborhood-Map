#STUDENT ACTIVITY LOG
##Author: George Fischer
**Udacity Front-End Web Developer Student**

#Introduction
July 1, 2016
12:18 AM
- **STUDENT_ACTIVITY_LOG.md Created**
- Created this repository: [P7-Neighborhood-Map](https://github.com/Geosynchronous/P7-Neighborhood-Map)
- Created this documentation `STUDENT_ACTIVITY_LOG.md` for the following audiences:
  - Author
  - Project Reviewers 
  - Udacity Staff & Students
  - Employers
  - Public
- This is a daily ongoing list of these sectioned activities:
  - Courseware Learning
  - Project Development
  - Project Review Submissions

#Courseware Learning
July 1, 2016
12:32 AM
- **Cloned this [GITHUB Repository](https://github.com/Geosynchronous/P7-Neighborhood-Map) to DESKTOP GIT**
- Necessary for editing code files, and local backups

1:27 AM
- **Starting up**
- Created folders in repository:
  - `CourseWork` for nefarious coding activities files.
  - `DocImages` for nefarious graphic files.
- Skipped ahead to the Project Review Rubric to get a perspective on the targeted outcomes of the project.
- Read some intro material on [knockout.js](http://knockoutjs.com/documentation/introduction.html) (**KO**).
  - KO is a general way to make UIs for editing JSON data.

**July 4TH 2016**

8:05 PM

- **Started INTRO TO AJAX course**
- Nice 4th of July Weekend... getting back to the grindstone...
- Dev Tools Network Analysis
- APIs Intro -[What are APIs???](http://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work)

9:29 PM
- **Finishing Requests & API's Section Starting Mini API Project**
- Downloaded [Zip File for Project](https://www.udacity.com/api/nodes/3180658597/supplemental_media/udacity-ajax-initzip/download?_ga=1.83064086.1099881078.1443828986)
- Opened in Local Repo for P7... CourseWork Folder

9:41 PM
- **Started BUILDING THE MOVE PLANNER**
- Sync Github Repo with local

July 5, 2016

4:16 PM
- **jQuery Requests Section**

8:50 PM
- **Completed Quiz: Loading Streetview"
```

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    // Gets values from form inputs and creates a var address string
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ',' + cityStr;

    // Replace original greeting "Where do you want to live at?"
    $greeting.text('So you want to live at ' + address + '?');

    // Concatenate address with base URL to create the streetviewURL with adress parameters
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + '';

    // Appends a background image of the streetmap address location to the body
    $body.append('<img class="bgimg" src="' + streetviewUrl + '" >');

    return false;
};

$('#form-container').submit(loadData);
```


July 6, 2016

10:12 AM
- **Style Change**
- Improved #greeting
- changed font color to yellow
- added a space in the returned greeting

11:01 AM

- **minicourse-ajax-project 2**
- Applied for [NYT API key](http://developer.nytimes.com/) & waiting...
- Downloaded [Sample Code for this miniproject](https://www.udacity.com/api/nodes/3131738547/supplemental_media/udacity-ajax-nytzip/download?_ga=1.83049494.1099881078.1443828986)
- Purpose to create New York TImes API search related to user location

12:50 PM
- **Still Waiting for NYT API KEY**
- Made another request online, and sent an email to code@nytimes.com
- Created gh-pages to use as the web link requested on the online page:
  - https://geosynchronous.github.io/P7-Neighborhood-Map/CourseWork/minicourse-ajax-project%202/index.html

1:00 PM
- **KEY Arrived**
- Scott @ support helped
```
Thanks for registering for a New York Times API Key. 

Here's your API Key for the Article Search API: 4e6e2405a9e14cfc9121ccdcad44a03f

If you have any questions, email us at code@nytimes.com

Happy Coding!
```

10:57 PM
- **NYT API Working**
```
    // load nytimes

    // YOUR CODE GOES HERE!
    // URL for NYT article search with my registered API key
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=4e6e2405a9e14cfc9121ccdcad44a03f';

    // Request Article Search from NYT, then parses articles data into list
    $.getJSON(nytimesUrl, function(data) {

        // Write out Header for List of Articles from Searched City
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);

        // Load the NYT RESPONSE data for docs data into articles array elements
        var articles = data.response.docs
        // Make a list of every article and corresponding snippet
        for (var i=0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class ="article">' +
                '<a href="'+article.web_url+'">'+article.headline.main+
                    '</a>' +
                    '<p>' + article.snippet + '</p>' +
            '</li>');
        };

    });
```
July 7, 2016

12:25 PM
- **NYT jQUery AJAX Error Handling**
- added jQuery .fail() instead of depreceated .error()
- this keeps the page from breaking, displays error and the rest of the code can complete
```
    $.getJSON(nytimesUrl, function(data) {

        // Write out Header for List of Articles from Searched City
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);

        // Load the NYT RESPONSE data for docs data into articles array elements
        var articles = data.response.docs;
        // Make a list of every article and corresponding snippet
        for (var i=0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class ="article">' +
                '<a href="'+article.web_url+'">'+article.headline.main+
                    '</a>' +
                    '<p>' + article.snippet + '</p>' +
            '</li>');
        };

    })

    // Error Handling for failed request
    // Note: .error() has been depreceated
    // Use .fail()
    .fail(function(e){

        $nytHeaderElem.text('NYT Articles Coud Not Be Loaded');

    });
```

12:33 PM
- ** Starting Cross-Origin Resource Sharing (CORS) and/or JSON-P**

July 8, 2016

12:33 PM
- **minicourse-ajax-project 3 for Wikipedia API**
- Donloaded zip file and installed on Github and local Github

1:52 PM
- **CODE NOT WORKING**
- Typing the Wiki API URL in a web window works:
  - https://en.wikipedia.org/w/api.php?action=opensearch&search=denver&format=json&callback=wikiCallback
  - However, the DEV TOOLS NETWORK is only showing a response from NYT and none for Wikimedia


```

**--------END OF FILE-----------**

July , 2016
#Courseware Learning
#Project Development
#Project Review Submissions

**--------END OF FILE-----------**
```
4:50 PM
-  ** NO AJAX Response from Wiki API JSON-P**
-  console.log is not being evoked, as no response is being returned

```
    // load wikipedia data

    // YOUR CODE GOES HERE!

    // Wikipedia API URL for server request
    var wikiUrl =  'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';

    // jQuery AJAX using JSON-P script
    $.ajax({
        // Settings Object for using JSON-P
        url: wikiUrl,
        dataType: "jsonp",
        // jsonp: "callback",
        sucess: function( response ) {
            var articleList = response[1];
            // TEMP CHECK TO SEE IF response  is working
            console.log(articleList);

            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr +  '</a></li>');
            };
        }
    });
```
    
5:35 PM
- **Found possible solution in Forums**
-  Another example of outdated courseware that frustrates students and wastes their valubable time
  -  **I could scream right now... why doesn't Udacity take care to put this info in the right place in a timely manner???**
  -  The [forums solution](https://discussions.udacity.com/t/wikipedia-exercise-error/43300/2) was known 6 months ago, got updated in TEACHER NOTES about 3 Months ago, but needed to appear at an even earlier point in the course [suggestion to forum](https://discussions.udacity.com/t/wikipedia-exercise-error/43300/14)
  -  **This kind of bs sends me off down the wrong path, burning up valuable learning time that could be used to learn a heck of a lot of other things about FEND and my career objectives that I need to spend time on.  THIS HAS HAPPENED A LOT IN THE COURSE, BECAUSE OF OUTDATED INFO.  And to be fair, there is a lot of great things about this course, but this really impedes student learning, and probably turns some students away.  The caliber of the FEND graduate would be a lot better if care were taken to remove thses pedagogical stumbling blocks!!!**
- `.success` had been depreciated, use `.done`
- basically I need to implement this:

```
    $.ajax({
      //stuff
    }).done(function(){
      //do math
    });
```

6:44 PM
-**Working WIKI API**

---
    // Wikipedia API URL for server request
    var wikiUrl =  'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';

    // jQuery AJAX using JSON-P script
    $.ajax({
        // Settings Object for using JSON-P
        url: wikiUrl,
        dataType: "jsonp",
        // jsonp: "callback",
    // NOTE: .success has been depreeciated in jQuery
    // .done is being chained instead
    }).done(function( response ) {
            var articleList = response[1];
            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr +  '</a></li>');
            };
        });
---

Saturday July 9, 2016

8:49 PM
- **WIKI TIMEOUT ERROR MESSAGE ADDED**
- Works fine, tested with Turning WIFI both on and off

---
    // Turn on Timeout for 8 sec
    // Will throw error message if WIKI API does not respond in time
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("Failed to Get Wiki Resources")
    }, 8000);

    // STUFF HERE
    
    $.ajax({
    
        // STUFF HERE
  
        // Inactivate the Timeout
        clearTimeout(wikiRequestTimeout);
    });
---

9:08 AM
- **DEBUG METHODOLOGY with DEV TOOLS**
- Tried out the suggestions, worked fine
- I wonder if the error messages could be captured and add to the timeout message or a generic error message.

9:20 AM
- **Finished INTRO TO AJAX, Starting JAVASCRIPT DESIGN PATTERNS Course**
- CRP Generic & Unique HTML noted, and understood form end of AJAX Course

July 10, 2016

7:49 PM
- **Mini-Project: Cat Clicker Coded**
- Used Vanilla JS for this, needed to refine my understanding of fundamentals
- Could have used jQuery and it would have been easier, Vanilla requires more lines of code
- Using Vanilla JS help me understand the NODE aspects relations between HTML & JS

![Image of Tiger](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/catclicker.png)

July 11, 2016

9:08 AM
- ** Refactor: Cat Clicker**
- Made code and design more efficient
- Improved comments
- main.js now looks like this:

```
// Initialize Click Counter default value
var count = 0;

// Get DOM NODES for HTML Elements
var elemCat = document.getElementById('tiger');
var elemCounter = document.getElementById('counter');

// Create DOM HTML Element Nodes
// Create a generic <p> node
var para = document.createElement("p");
// Create a text node
var t = document.createTextNode(count);

// Append Nodes and write Default Count
// Append the text to <p>
para.appendChild(t);
// Append <p> to <div>
elemCounter.appendChild(para);

// Updates Click Count View
elemCat.addEventListener('click', function(){
	// the element has been clicked...
	count++;
	// Overwrites previous Count
	para.innerHTML = count;


}, false);
```

7:13 PM
- **Cat Clicker DUal.. First Pass**
- Worked on it all day
- Quite a learning experience
- Still a few kinks to work out
- Should of made a bunch of commits. playing around too much
- First Commit!!! Duh!
- Stuck with Vanilla JS
- More later...

7:58 PM
- **Style Enhancements**
- Here's a screenshot: ![Image of Dual Cat Clicker](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/DualCatClicker.jpg)

8:11 PM
- **Commented COde**

```
// Initialize Click Counter default value
// Write to screen
var count = 0;
var elemCounter = document.getElementById('cats');
var countText = document.createElement("p");
var t = document.createTextNode(count);
countText.appendChild(t);
elemCounter.appendChild(countText);

// returns a DOM element for each cat
var catElementGenerator = function(i) {

    var catContainer,
        catImageContainer,
        catImage,
        catName,

    catContainer = document.createElement("div");
    catImageContainer = document.createElement("div");
    catDescriptionContainer = document.createElement("div");
    catImage = document.createElement("img");

    catContainer.classList.add("catItemContainer");
    catContainer.style.width = "50%";
    catContainer.id = "cat" + i;

	// Thanks to Shaggydactyl for image created at University of Chicago
	//  http://thecore.uchicago.edu/Winter2011/editors-note.shtml

	// Cat Image Nodes created
    catImage.src = "images/cat-" + i + ".jpg";
    catImage.style.width = "100%";
    catImageContainer.style.width = "100%";
    catImageContainer.appendChild(catImage);
    catContainer.appendChild(catImageContainer);

    // Cat Image Name Nodes created
   	catName = document.createElement("h4");
    catName.innerHTML = "Cat " + i;
    catImageContainer.appendChild(catName);

    return catContainer;
};

// Create Cat Elements in HTML
var catDiv = document.getElementById("cats");
for (var i = 1; i < 3; i++) {
    catDiv.appendChild(catElementGenerator(i));
}

// This triggers the Click Score to increment
// Updates value to screen
// Is there a more concise way of writing this?
var cat1Div = document.getElementById("cat1");
cat1Div.addEventListener('click', function(){
	count++;
	// Overwrites previous Count
	countText.innerHTML = count;
}, false);

var cat2Div = document.getElementById("cat2");
cat2Div.addEventListener('click', function(){
	count++;
	// Overwrites previous Count
	countText.innerHTML = count;

}, false);
```

Tuesday July 12, 2016
10:38 AM
- **Refactor Click Count to Individual Cats**

```
// Initialize Click Counter default value
var count = 0;

// returns a DOM element for each cat
var catElementGenerator = function(i) {

    var catContainer,
        catImageContainer,
        catImage,
        catName,

    catContainer = document.createElement("div");
    catImageContainer = document.createElement("div");
    catDescriptionContainer = document.createElement("div");
    catImage = document.createElement("img");

    catContainer.classList.add("catItemContainer");
    catContainer.style.width = "50%";
    catContainer.id = "cat" + i;

	// Thanks to Shaggydactyl for image created at University of Chicago
	//  http://thecore.uchicago.edu/Winter2011/editors-note.shtml

	// Cat Image Nodes created
    catImage.src = "images/cat-" + i + ".jpg";
    catImage.style.width = "100%";
    catImageContainer.style.width = "100%";
    catImageContainer.appendChild(catImage);
    catContainer.appendChild(catImageContainer);

    // Cat Image Name Nodes created
   	catName = document.createElement("h4");
   	catName.id = "catCount" + i;
    catName.innerHTML = "TIGER" + i + " " + count;
    catImageContainer.appendChild(catName);

    return catContainer;
};

// Create Cat Elements in HTML
var catDiv = document.getElementById("cats");
for (var i = 1; i < 3; i++) {
    catDiv.appendChild(catElementGenerator(i));
}

// This triggers the Click Score to increment
// Updates value to screen
// Is there a more concise way of writing this?
var cat1Div = document.getElementById("cat1");
var catCount1Div = document.getElementById("catCount1");
cat1Div.addEventListener('click', function(){
	count++;
	// Overwrites previous Count
	// countText.innerHTML = count;
	catCount1Div.innerHTML = "TIGER1"+ " " + count;
}, false);

var cat2Div = document.getElementById("cat2");
var catCount2Div = document.getElementById("catCount2");
cat2Div.addEventListener('click', function(){
	count++;
	// Overwrites previous Count
	catCount2Div.innerHTML = "TIGER2"+ " " + count;
}, false);
```

- This is all works fine, but I need to drill down into DIVS and keeping them alinged when inside a specific container, I forgot how to do that

10:55 AM
- **fix: removed flexbox**
- from .catItemContainer
- It was probably causing some of the problems I mentioned above
- float: left; seems to be all that was needed

```
/*  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;*/
```

11:15 AM
-- **box-sizing: border-box & Flexbox & Grid**
- Reviewed these two topics, and have a little better perspective on how this works
- Useful links to hone skills:
	- http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing2
	- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
	- https://css-tricks.com/snippets/css/complete-guide-grid/

11:38 AM
- **SCALABLE**
- The above code for the Dual Cat Clicker is SCALABLE
- Closure issues are next in the course, so maybe I will understand a bit more about scaling code

Wednesday July 13, 2015

9:39 PM
- **Closure & IIFE**
- This generalizable code is slicker than the specific I wrote for the cat clicker
- I hope to apply it in the next round of Cat Clicker Coding
- It uses an Immediately Invoke Function Execution, to capture the specific num for each div generated
- And when the event is triggered it passes the specific value (numCopy) for the div clicked on

```
// clear the screen for testing
document.body.innerHTML = '';

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};
```
- **COOL TRICK**- It is also cool to note that I just pasted this code in to the console for any open web page, and it cleared out the html body and then ran the rest of the js code, and it could be viewed in the webpage display area, and the div events could be triggered and the alert num value was shown
- This is the code to use to clear previous webpage:

```
// clear the screen for testing
document.body.innerHTML = '';
```

9:56 PM
- **CAT CLICKER PREMIUM Setup**
- [List of Mini-Project Requirements](https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175461/lessons/3417188540/concepts/34338690500923)
- I will refactor my Cat Clicker Dual Code in a big way to meet these requirements.  Using more function structures will be a priority.
- Will make a new folder in Repo called CAT CLICKER PREMIUM, and start with the CAT CLICKER DUAL files

Thursday July 14, 2016
12:14 AM
- **Basic Container Wireframe**
- Installed Gliffy Diagramer Extension on Chrome
- Created this basic wireframe:

![Wireframe Image](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/CatClickerPremiumWireframe.jpg)

12:20 AM
- **Initial Design Considerations**
- Design for a minimum viewport width of around 400px
- Design scales up with larger viewport widths
- Use functions to group code appropriately
```
	- Generate
		- DIVs
			- Title
			- Menu Container
				- Directions
				- Cat List
					-Individual Cat Names
			- Data Containers (5 Cats)
				- Description Container
		 			-Cat Name
				 	- Click Count (default Value = 0)
				- Image
	- Append
 		- Title
 		- Menu Container
 		- Data Conainer (first Cat)

	- Invoke Event Handler
		- Clicked Image Response
			- Cat Selected
			- Counter Incremented
			- Event Response
				- Update Selected Cat Data Content to screen (.innerHTML)
					- Cat Name
					- Click Count
					- Image
```	
- Seperate DATA & Operational FUNCTIONS into two seperate JS files for more clarity and better organization
- Try to stick with Vanilla JS for now

July 14, 2016
2:21 PM
- ** Setup FEND Feedback Repo**
- For collecting notes to Cameron about FEND course improvements
- https://github.com/Geosynchronous/FEND-Feedback/blob/master/Notes_to_Pittman.md

2:22 PM
- **Udacity Coaching Changeover Today**
- Looks like they are improving things big time
- Have a 4 PM meeting with Heidi today (with old system?)
	- Initially got cancel message, Chelsea responded with a working link 
- Have a 5 PM meeting wtih Ryan tomorrow (new Zoom.us system)
- Have on on Tuesday  with Ty (not sure what system they will use)
- Zoom.us looks to be way cool

Friday July 15, 2016

8:21 PM

- **Notes from Udacity Coaching**
-  Only second time I was able to talk a coach
-  Heidi anwered a lot of questions for me, that put things in perspective
-  Forums
	- Udacity Discussion - Official Support, Forum Mentors respond within 24 hrs, long continious threads
	- SLACK Udacity FEND Channel - Very active, shorter retention, more of single thread
	- Google+ Not working out so well, phasing out
- 2,500 FEND Students
- Just complete 2 last required project and can graduate
	- Resume, LinkedIn, Grunt, Gulp can be done after graduation
- Sent a [Web Tooling & Automation link](https://www.udacity.com/course/web-tooling-automation--ud892) from Senior Web Dev Course that has GULP in it
- Career Most Important
	- Github Account
	- Linked IN Account
	- 1 page Resume & Cover Letter
- Changeover for Coaching
	-  Using ZOOM for video chats, really like it, easy to use, has whiteboard feature too
	-  Mentors instead of coaches
- Contact Support if any problem occurs that can't be resolved
- Lots of changes being made to improve FEND course

8:40 PM
- **Web Site & Domain Name Created**
- NameCheap.com $10.56 for 1 year
- geosynchronous.us
- bummer.... .us can't privatize domain WHO IS info
- created site to have a presence on the web
- "Hello World" is all that it does at moment

11:48 PMc
- **Setup Working Dir and Files**
- Cloned previous project
- Added a data.js
- main.js new with Outlined Plan in Comments
- main_old.js has old code to take from and reference while developing

2:50 PM

- **ZOOM WEBINAR**
- 2 HOURS OF USEFUL INFOR

6:15 PM

- **Great Udacity Online Mentor Meeting with Ryan**
- Scheduled another for next Thursday @ 10 AM
- Hints for cat clicker code:
	- Put DIV Scaffold structure in place in HTML
		- Easier to read structure
		- Less JS to do
	- Use Constructor function for data
		- data. prefix will make it easy to distinguish data vaiiables... awesome 
- Open all files at once in SUBLIME by clicking on parent folder... very cool

7:39 PM
- **Setup basic HTML Sturcture**
- After taliking with mentor Ryan I decide to put more structure in the HTML and leass from JS
- Also decided to use his suggestions on creating a better data structure

9:42 PM
- **Made Cat List**
- made in js and loads to page
- not yet selectable

10:27 PM
- **id added to each list item**
- now each list element item will be unique when selected and identifiable

Saturday July 16,2016
2:10 AM

- **Messed around with Style**
- Looks like this:

![screenshot image](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/zcreenshotz-ccz-%20premium.jpg)

1:30 PM
- **Refactored js and html**
- Reduced fluff, made more concise

2:28 PM
- **Selectable List Working**
- Clicking on any item will pop up a window message with the num value for that <li> element
```
// Cat Clicker Premium by George Fischer
// Yet another very cool Udacity Mini-Project

// LIST OF CATS
// IIFE for creating, appending and selecting list in "Choose Cat" menu
var makeCatList = function() {

    // Create DOM Elements
    var catListItem = "",
        catListElement,
        num;
    var ul = document.getElementById("catList");

    for (var i = 0; i < data.cat.length; i++) {
        num = i;
        catListItem = "<li>" + data.cat[i].name + "</li>";
        catListElement = document.createElement("li");
        catListElement.innerHTML = catListItem;
        
        // Append List Item to HTML List
        ul.appendChild(catListElement);

        // IIFE for each list element with eventListener  and with unique num value
        // ... and when we click, alert the value of `num`
        catListElement.addEventListener('click', (function(numCopy) {
            return function() {
            alert(numCopy);
            };
        })(num));
    }
}();
```
- Next I need to construct all the DOM Elements for each of the individual cats that can be loaded into the catContainer DIV

6:31 PM
- **Refactor Image Selection @ Image Container Element Updates**
- Clicking on any list item will load that cat data into the image container
- Still need to make counter work

7:49 PM
- **Cat Click Count Updates**
- But goes back to 0 everytime a cat is reselected from the menu
- Need to hold and pass the accumulated counts somehow...

Sunday July 17,2016
10:49 AM
- **Completed: Cat Clicker Premium**
- Did a lot of refactors to get here:
- ![Screenshot Cat Clicker Premium](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-07-17%20at%2010.08.21%20AM.jpg)

```
// Cat Clicker Premium by George Fischer
// Yet another very cool Udacity Mini-Project

// GLOBAL VARIABLES needed for the two Event Listener IIFE's to work together
// (Question: Is there a better way to do this?  Eliminate Global Variables?)
var numNow,
    clickCount = [];

// GET DOM ELEMENTS
// Needed for MENU & CLICK COUNTS
var ul = document.getElementById("catList");
var catNameElement = document.getElementById("catName");
var catCountElement = document.getElementById("catClickCount");
var catImageElement = document.getElementById("catImage");

// CHOOSE CAT MENU
// IIFE Setup, UI and Updates
var CatClickerPremium = function() {

    var catListItem = "",
        catListElement,
        num;

    // GENERATE & UPDATE ELEMENT CONTENT
    // Menu & Image Container Element Content as needed
    for (var i = 0; i < data.cat.length; i++) {
        num = i;
        clickCount[num] = 0;
        catListItem = "<li>" + data.cat[i].name + "</li>";
        catListElement = document.createElement("li");
        catListElement.innerHTML = catListItem;

        // MENU LIST ITEM Appended
        ul.appendChild(catListElement);

        // IIFE UPDATES IMAGE CONTAINER CONTENTS to web page
        // Each cat list element with eventListener and with unique numCopy value
        // ... and when we click the cat list item, the cat image and text update
        // Slick Trick:
        //      - catListElement.addEventListener invoked immediately
        //      - pass in "num" (iterates through all cats) to .addEventListener
        //      - "numCopy" passes unique value of "num" to "return function()" (for each cat)
        //      - "return function()" executed each time "catListElement" is clicked (specific cat)
        //      - current "numCopy" value passed to global "numNow"
        //              - allows current cat displayed to have it's specific click counter updated
        //              - (see "catImageElement.addEventListener()" below)
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
    };
})());
```
- The code seems to work fine in all required functions
- I really like how it turned out
- Do wonder about a good way to eliminate global variables, or if that really matters...

4:58 PM
- **Reload gh-Pages to run Cat Clicker Premium on Web**
- https://geosynchronous.github.io/P7-Neighborhood-Map//CourseWork/catclicker-premium/index.html

5:58 PM
- **More Mobile Friendly**
- CSS Tweaks

![Cat Clicker Premium more Mobile Friendly](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-07-17%20at%205.51.01%20PM.png)

7:11 PM
- **Mobile Test**
- The clicks worked on both the list of cats, and the images for each cat
- Not perfect layout for mobile, though it is interesting to know that the everntListener clicking works on IOS

Monday July 18, 2016
5:45 PM
- **Finished "Changing Expectations" Course Section**
- Edited "Udacity Retain" code to add formatted date to each note

6:10 PM
- **Started "Refactoring with Separation of Concerns" Section**
- Cloned Andy's Cat Clicker Repo
- Looking at Code

7:07 PM
- ** Cat Clicker Premium MVO refactor set-up**
- Cloned Premium to Premium 2 folder
- Will first try and institure MVO organization into organizing vars:

```
// MVO ORGANIZATION:
//  - MODEL, VIEW, OBJECT
//  - Move existing code into correct place
//  - Refactor Work in Progress...

// ALL MODEL OBJECTS HERE
var model = {

};

// ALL VIEW OBJECTS HERE
var view = {

};

// ALL OCTOPUS OBJECTS HERE
var octopus = {

};	
```
- I will refactor code till all of this is acheived
- I will stick with Vanilla JS
- I will keep the initial HTML the same, possibly refactor later, so that none of the data or text is shown.
 
8:40 PM
- **IN OVER MY HEAD and into jQuery**
- Did the above and tried refactor code, and OMG what a mess
- Kept the above addition, and also added jQuery as I am using the [UDACITY RETAIN CODE](https://github.com/Geosynchronous/P7-Neighborhood-Map/CourseWork/ud989-retain) as a model for MVO
- Put all my code in `$(function());`
	- **WHAT IS THIS DOING??** Anything special?
- Added script in html to load jQuery
- The Cat Clicker Premium2 works fine
- **Seriously Glad that I have a 1 on 1 Mentor with TY tommorow at 6 PM**
- Going to need help with jQuery
- In the meantime, I will see what progress i can make & break...

9:12 PM
- **refactor: Add" init:" to MVO objects**
- Seems like a common thread to each MVO object, and seems like something I am doing already in my spaghetti code
- Left functions empty, till i can figure out how to make this work
- Didn't break the code
- Will try first to init my cat `data` from data.js

```
    var model = {
        init: function(){

        }
    };
```

9:58 PM
- **Document Ready**
- This is  `$(function());`is short hand for `$(document).ready(function(){};`
	- Which means that the jQUery functions will not execute until all of the document has finished loading.
- I changed it to the long hand form to remind me of what is happening in my code.
- `$(selector).action() shows basic structure and terninmology
- jQuery uses CSS syntax to select elements
	- A $ sign to define/access jQuery
	- A (selector) to "query (or find)" HTML elements
	- A jQuery action() to be performed on the element(s)
- [This is a GOOD W3 INTRO to jQUERY](http://www.w3schools.com/jquery/jquery_intro.asp)

Tuesday July 19, 2016
8:21 AM
- **TOO HARD - REBOOT**
- bit off more than I can chew with refactoring my Cat Clicker Premium code into similar MVO model of Udacity Retain
- Will Pickup [**Andrew's Cat Clicker**](https://github.com/Geosynchronous/P7-Neighborhood-Map/tree/master/CourseWork/ud989-cat-clicker-andy-refactor-mvo) less complicated Code for refactor into MVO using [**Udacity Retain**](https://github.com/Geosynchronous/P7-Neighborhood-Map/tree/master/CourseWork/ud989-retain) as a model

8:43 AM
- **Setup MVO Refactor in app.js**
- First to move everything into MVO var structure
```
// REFACTOR ANDY's CODE for MVO

// MVO ORGANIZATION:
//  - MODEL, VIEW, OBJECT
//  - Move existing code into correct place
//  - Refactor Work in Progress...

// ALL MODEL OBJECTS HERE
// LOL.... HOW???

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    var model = {

    };

    // ALL VIEW OBJECTS HERE
    var view = {

    };

    // ALL OCTOPUS OBJECTS HERE
    var octopus = {

    };
});


// REFACTOR EVERYTHING BELOW
// And move into MVO vars above

var cats = $(".cat");
var buttons = $("button");

function hideAllCats(){
	for (var i=0; i<cats.length; i++){
		$(cats[i]).hide();
	}
}

function bindButtonToCat(idNumber){
	$("#button"+idNumber).click(function(){
		hideAllCats();
		$("#cat"+idNumber).show();
	})
}

function bindCounterToCat(idNumber){
	var cat = "#cat"+idNumber
	$(cat).click(function(){
		var count = $(cat+" > .counter").text();
		count = parseInt(count) + 1;
		$(cat+" > .counter").text(count);
	})
}

for (var i=1; i<=buttons.length; i++){
	bindButtonToCat(i);
}

for (var i=1; i<=cats.length; i++){
	bindCounterToCat(i);
}

hideAllCats();
$("#cat1").show();
```

10:45 PM
- **Moved all JS Code into MVO var structure**
- Still bugs
- Console helps show what is not connecting
- Need to consdier Scope better

```
// REFACTOR ANDY's CODE for MVO

// MVO ORGANIZATION:
//  - MODEL, VIEW, OBJECT
//  - Move existing code into correct place
//  - Refactor Work in Progress...

// ALL MODEL OBJECTS HERE
// LOL.... HOW???

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    var model = {
    	init: function() {
    		var cats = $(".cat");
			var buttons = $("button");
    	},

    	getAllButtons: function(){
    		return buttons;
    	},

    	getAllCats: function() {
    		return cats;
    	}

    };

    // ALL VIEW OBJECTS HERE
    var view = {
        init: function() {

            view.render();
        },
        render: function() {
			octopus.hideAllCats();
			$("#cat1").show();
        }
    };

    // ALL OCTOPUS OBJECTS HERE
    var octopus = {
        init: function() {
            model.init();
            view.init();
        },

		bindButtonToCat: function(idNumber){
			$("#button"+idNumber).click(function(){
				hideAllCats();
				$("#cat"+idNumber).show();
			})
		},

		bindCounterToCat: function(idNumber){
			var cat = "#cat"+idNumber
			$(cat).click(function(){
				var count = $(cat+" > .counter").text();
				count = parseInt(count) + 1;
				$(cat+" > .counter").text(count);
			})
		},

        getButtons: function() {
    		for (var i=1; i<=buttons.length; i++){
			bindButtonToCat(i);
			}
        },

        getCats: function() {
    		for (var i=1; i<=cats.length; i++){
			bindCounterToCat(i);
			}
        },

    	hideAllCats: function(){
			for (var i=0; i<cats.length; i++){
			$(cats[i]).hide();
			}
		}

    };


	// REFACTOR EVERYTHING BELOW
	// And move into MVO vars above

	// var cats = $(".cat");
	// var buttons = $("button");

	// function hideAllCats(){
	// for (var i=0; i<cats.length; i++){
	// 	$(cats[i]).hide();
	// }
	// }

	// function bindButtonToCat(idNumber){
	// $("#button"+idNumber).click(function(){
	// 	hideAllCats();
	// 	$("#cat"+idNumber).show();
	// })
	// }

	// function bindCounterToCat(idNumber){
	// var cat = "#cat"+idNumber
	// $(cat).click(function(){
	// 	var count = $(cat+" > .counter").text();
	// 	count = parseInt(count) + 1;
	// 	$(cat+" > .counter").text(count);
	// })
	// }

	// for (var i=1; i<=buttons.length; i++){
	// bindButtonToCat(i);
	// }

	// for (var i=1; i<=cats.length; i++){
	// bindCounterToCat(i);
	// }

	// hideAllCats();
	// $("#cat1").show();



    octopus.init();

});


```

12:33 PM
- **refactor: Starting OVer Again!!!**
- Model and View are mixed in html.  Basically need to start from scratch,  Build one piece at a time.  Get Data our of HTML first.
- Arrggh!!!
- [ud989-cat-clicker-andy MVO2](https://github.com/Geosynchronous/P7-Neighborhood-Map/tree/master/CourseWork/ud989-cat-clicker-andy%20MVO2)



