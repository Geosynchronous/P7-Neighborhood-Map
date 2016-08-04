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





