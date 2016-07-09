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

