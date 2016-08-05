#Introduction

Monday August 1, 2016

7:11 PM
- **Project_Activity_Log Created**
- This is a daily ongoing list of these sectioned activities:
  - Project Development
  - Project Review Submissions

##Project Development

7:15 PM

- **Project Plan**
- Just Read over the [Project Rubric](https://review.udacity.com/#!/rubrics/17/view)... Wow!  What a challenging project!
- Need to start from the project from scratch... right now the project folder is empty, except for this document log.
- I will create an interactive map project that might be of use the non-profit organization [Round River Conservation Studies](http://www.roundriver.org/)
- I will use information from their website, and newly released media information, as well as third party APIs
- The "Neighborhood" will be the whole world, I will start with by using Administrative and Field Locations that are on Four Continents, and it will use the satellite view
- Additional functionality will be added in, and seperated as I move through the [developmment plan layed out in the course](https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175462/lessons/2711658591239847/concepts/26906985370923)
- First I will have the basic map rendered as above, using previous code in the course as a model.  Once the satellite view renders with some basic location markers, I will then, move it into an MVVM model, and start implementing knokout framework, and then I will make it responsive for all devices before moving on to greater functionalities.

8:07 PM
- **Cloned Project Files**
- Used [Project_Code_5_BeingStylish.html](ers/geo/version-control/P7-Neighborhood-Map/CourseWork/ud864-master-student/Project_Code_5_BeingStylish.html) and image folder from my previous Coursework
- Will modify marker geocode list to use Round River Data

10:28 PM
- **14 Map Markers Added**
- The whole world is shown
- Markers are too big, and should be centered on lat/lng
- NYC is the default position, change to admin office location in SLC, UT

Tuesday August 2, 2016

12:18 AM
- **Map Icons still need work**
- Opening map centers on RR headquarters in SLC, UT but with no marker(yet)
- Zoom = 2 now shows whole world on first map
- Maybe large markers are better 75 x 75
- need to figure out how to center marker...
- Maybe see if color change works, not sure of the code in makeMarkerIcon()...

10:21 AM
- **fix: imageIcon**
- Image icons are 33 x 33 in both a default mode, and a highlight mode
- Some of the lat/lng entries are off, but close enough for now
- Here's what it looks like: ![Screenshot of Map Markers](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-02%20at%209.44.47%20AM.png)

10:58 AM
- **feat: Style Visibility off**
- for counttires, and admin and water labels
- a natural world without borders
- looks cleaner

11:23 AM
- **Turned on Terrain**
- looks good

1:36 PM
- **on init showListings**
- ready to put the code in MVVM framework with knockout.js

3:03 PM
- **chore: file seperation of html, js, and css**
- code still works fine
- created necessary folders and files, and moved code around
- next: MVVM Framework with Knockout.js on this existing code
- After working framework in place, add much more functionality

Wednesday August 3, 2016

10:32 PM
- **feat: ko bindings hide and show listings**
- Switched to ko bindings for `hideListings` and `showListings`
- Nested `function AppViewModel()` and `  ko.applyBindings(new AppViewModel());` inside `function initMap()`.
- In `index.html` the google map is still loaded as before, and invokes `initMap` after loading:

```
    <script async defer
        src=
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAaL-jhZDIeEBOjiVX31sDh6UjauQlfWk4&v=3&callback=initMap">
    </script>
```
- at the moment, I am not sure there is a better way to do this.  Will ask Ryan tommorrow during the online mentor meeting. Right now the model and view model are all inside `function AppViewModel()` which itself gets called by `initMap()`
- Seperate model from view-model still needs to be done
- And binding to the map DIV still needs attention with ko

4:33 PM
- **Added self/this designation & ko binds**
- According to the Project Instructions, Knockout is not to be used with direct Google Map Functionalities, Knockout fine for Options Box Views and Functions

5:42 PM
- **feat: Better Options Box**
- Looks like this: ![Screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-03%20at%205.35.35%20PM.png)
 
6:01 PM
- **Enhanced Data Structure**
- Think this will help me display and filter markers
- Need to add more markers to data
- Need to add more properties and attributes:

```
    // TODO - add all sites, add all properties
    //      (Categories: Field Research, Field Studies, Administrative, Special Events)
    var locations = [
      {
        title: 'Kunene Region, Namibia',
        location: {lat: -18.789779,lng: 13.370975},
        continent: 'Africa',
        category: 'Field Research'
      },
      {title: 'Okavango Delta, Botswana',
```

6:57 PM
- **Idea for UI**
- This will probably be more of a toggle situation, with only one item open at a time, and itemized listings shown below, that are also clickable and will open the corresponding `infoWindow` functionality: ![Screenshot of Option Box](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-03%20at%206.53.28%20PM.jpg)

Thursday August 4, 2016

12:21 PM
- **MENTOR MEETING**
- Ryan just spent an hour with me going over my code big time and answering a lot of questions
- My head is ready to explode
- Will get back to this after a break and start refactoring my code...

![screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-04%20at%2012.36.34%20PM.png)

2:22 PM
- **STYLE CHANGES**
- THis is getting close to the overall look I envision: ![Screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-05%20at%204.14.28%20PM.jpg)

- Also want a large round river icon over Greenville, Missisippi as the intro view, with satellite view

Friday August 5, 2016

12:16 AM
- **Style**
- Made more changes, reflected in the image above

4:18 PM
- **feat: active social icons**
- change above screenshot to reflect the update
- these are the social links and icons that Round River is using

5:10 PM
- **HTML for Above Screenshot**

```
<!DOCTYPE html>
<html lang="en">
<!--
Neighborhood Map Project
Udacity FEND Nanodegree
Developer: George Fischer

Prototype Google Map App
MVVM Framework with Knockout.js
Model-View-ViewModel (MVVM) pattern

Map created for:
  Round River Conservation Studies
  http://www.roundriver.org
  Non-Profit Organization
-->

<!--
  THE ***VIEW***
  HTML markup that defines the appearance of your UI
 -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0"><link rel="stylesheet" id="vc_google_fonts_merriweather_sans300300italicregularitalic700700italic800800italic-css" href="//fonts.googleapis.com/css?family=Merriweather+Sans%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%2C800%2C800italic&amp;subset=latin&amp;ver=4.5.3" type="text/css" media="all">
    <link rel="stylesheet" href="css/style.css">
    <script src= "js/knockout-3.4.0.js"></script>
    <script src= "js/app.js"></script>
    <title>Round River Map</title>
  </head>
  <body>
    <div class="container">
      <div class="options-box">
        <a href="http://www.roundriver.org" title="Go to roundriver.org">
          <img alt="Round River" src="images/RR-Main-Logo.png">
        </a>
        <div>
          <button class="button" id="show-listings" data-bind="click: showListings">FIELD RESEARCH</button>
          <button class="button" id="show-listings" data-bind="click: showListings">FIELD STUDIES</button>
          <button class="button" id="show-listings" data-bind="click: showListings">AFRICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">NORTH AMERICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">CENTRAL AMERICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">SOUTH AMERICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">SPECIAL EVENTS</button>
          <button class="button" id="hide-listings" data-bind="click: hideListings">All Listings</button>
        </div>
        <div class="contact">

            <a id="about" href="http://www.roundriver.org/about-us" title="About Us">
              <h2>About Us</h2>
            </a>

            <img id="hero" src="images/great-bear-01.jpg">

            <!--
            ROUND RIVER Social Media Linked Icons
            -->
            <a href="http://roundriver.us3.list-manage1.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=3081df2487&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-facebook-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=81b66d90a8&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-instagram-48.png">
            </a>
            <a href="http://www.roundriver.org/wp-content/uploads/2015/07/great-bear-01.jpg">
              <img class="social" alt="Round River" src="images/social/color-link-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=cb4f4cc46a&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-twitter-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage2.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=19e75a7c08&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-vimeo-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage1.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=8a763f7326&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-youtube-48.png">
            </a>
        </div>
      </div>
      <div id="map"></div>
    </div>
    <script async defer
        src=
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAaL-jhZDIeEBOjiVX31sDh6UjauQlfWk4&v=3&callback=initMap">
    </script>
  </body>
</html>

```

- Basically the above html code creates the overall view the way I want it, except that I haven't added the kn list items when a button is toggled.  So there will be some changes to make the items appear in the view under the button.  Also the code has not been set up to be responsive for various viewport device widths.  I will deal with that after I get all the functionality built into my code base.


