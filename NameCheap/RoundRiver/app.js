"use strict";function AppViewModel(){var t=this,e=0;t.isActive=ko.observable(!1),t.toggleActive=function(){t.isActive(!t.isActive())};var o=function(t,e){this.label=t,this.showLocationsViews=ko.observable(!1),this.id=e},a=regions.length;t.buttons=ko.observableArray();for(var i=0;a>i;i++)t.buttons.push(new o(regions[i],i));t.buttons()[0].showLocationsViews(!0);var n=function(t,e){this.title=t.title,this.location=t.location,this.lat=t.location.lat,this.lng=t.location.lng,this.continent=t.continent,this.category=t.category,this.type=t.type,this.siteUrl=t.siteUrl,this.siteImage=t.siteImage,this.toggleListItem=ko.observable(!0),this.highlight=ko.observable(!1)},a=places.length;t.locations=ko.observableArray();for(var i=0;a>i;i++)t.locations.push(new n(places[i],i));t.listClick=function(t){populateInfoWindow(t.marker)},this.listMouseOver=function(t){t.marker.setIcon(highlightedIcon),t.highlight(!0)},this.listMouseOut=function(t){t.marker.setIcon(defaultIcon),t.highlight(!1)},t.toggleVisibility=function(o){var a=!o.showLocationsViews(),i=!1;o.id!=e&&(i=!0,t.buttons()[e].showLocationsViews(!1)),e=o.id,a||i?(t.buttons()[o.id].showLocationsViews(!0),t.hideAllLocations(o),t.showFilteredLocations(o),t.setNewBounds(o)):(t.hideAllLocations(o),t.buttons()[o.id].showLocationsViews(!1))},t.showFilteredLocations=function(e){var o=e.label.toLowerCase();a=t.locations().length;for(var i=0;a>i;i++){var n=t.locations()[i].category.toLowerCase(),r=t.locations()[i].continent.toLowerCase(),l=t.locations()[i].type.toLowerCase();n===o||r===o||l===o?(t.locations()[i].toggleListItem(!0),t.locations()[i].marker.setVisible(!0)):(t.locations()[i].toggleListItem(!1),t.locations()[i].marker.setVisible(!1))}},t.hideAllLocations=function(e){a=t.locations().length;for(var o=0;a>o;o++)t.locations()[o].toggleListItem(!1),t.locations()[o].marker.setVisible(!1),largeInfowindow.close()},t.setNewBounds=function(){bounds=new google.maps.LatLngBounds,a=t.locations().length;for(var e=0;a>e;e++)t.locations()[e].toggleListItem()&&bounds.extend(t.locations()[e].marker.position);map.fitBounds(bounds)}}function loadContent(t){var e=largeInfowindow,o=apiPath+gps+apiKey+units;$.getJSON(o).done(function(o){weatherData=o,currentTemp=Math.round(weatherData.main.temp),maxTemp=Math.round(weatherData.main.temp_max),minTemp=Math.round(weatherData.main.temp_min),humidity=Math.round(weatherData.main.humidity),description=weatherData.weather[0].main,weatherImage="images/weather/"+weatherData.weather[0].icon+".png";var a='<div class="iw-container"><div class="iw-title">'+t.title+'</div><div class="iw-moreInfo"><a class="iw-moreInfoText" target="_blank" href='+t.siteUrl+'>info</a></div><div><img class="infoWindowImage" src='+t.siteImage+'></div><div class="weather" ><div class="iw-ImageDiv"><img class="iw-Image" src='+weatherImage+'></div><div class="listing"><p class="stats" >'+currentTemp+'F</p></div><div class="listing"><p class="stats" >'+humidity+'%</p></div><div class="credits"><a target="_blank" href="http://openweathermap.org/weathermap" title="Credit: OpenWeatherMap.org"><img src="images/OpenWeatherMap_logo.png">';e.marker!=t&&(e.marker=t,map.setZoom(9),map.setCenter(t.getPosition()),e.setContent(a),e.open(map,t),e.addListener("closeclick",function(){e.marker=null}))}).fail(function(){alert("Load Error: Open Weather Map API")})}function populateInfoWindow(t){gps="lat="+t.latitude+"&lon="+t.longitude,loadContent(t),t.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){t.setAnimation(null)},3500)}function hideInfoWindow(t){var e=largeInfowindow;e.marker=null}function makeMarkerIcon(t){var e=new google.maps.MarkerImage(t,new google.maps.Size(33,33),new google.maps.Point(0,0),new google.maps.Point(17,33),new google.maps.Size(33,33));return e}function createMarkers(){defaultIcon=makeMarkerIcon("images/RR-circle.png"),highlightedIcon=makeMarkerIcon("images/RR-circle-highlight.png");for(var t=vm.locations().length,e=0;t>e;e++){var o=vm.locations()[e].location,a=vm.locations()[e].title,i=vm.locations()[e].siteUrl,n=vm.locations()[e].siteImage,r=vm.locations()[e].location.lat,l=vm.locations()[e].location.lng,s=new google.maps.Marker({position:o,title:a,siteUrl:i,siteImage:n,latitude:r,longitude:l,animation:google.maps.Animation.DROP,icon:defaultIcon,id:e,animation:google.maps.Animation.DROP,map:map});vm.locations()[e].marker=s,bounds.extend(s.position),s.addListener("click",function(){populateInfoWindow(this)}),s.addListener("mouseover",function(t){return function(){vm.listMouseOver(vm.locations()[t])}}(e)),s.addListener("mouseout",function(t){return function(){vm.listMouseOut(vm.locations()[t])}}(e))}map.fitBounds(bounds)}function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:40.7501481,lng:-111.8665667},zoom:1,maxZoom:17,backgroundColor:"#af9a6b",styles:styles,mapTypeId:"terrain",mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.TOP_RIGHT}}),bounds=new google.maps.LatLngBounds,largeInfowindow=new google.maps.InfoWindow,createMarkers()}function mapError(){alert("Load Error: Google Maps API"),console.log("Load Error: Google Maps API")}var map,largeInfowindow,bounds,highlightedIcon,defaultIcon,weatherData,apiPath="http://api.openweathermap.org/data/2.5/weather?",apiKey="&APPID=db6d60dca9b88a47a0884b8ff753b7f6",units="&units=imperial",gps,currentTemp,maxTemp,minTemp,humidity,description,weatherImage,styles=[{featureType:"landscape",elementType:"natural.landcover",stylers:[{visibility:"on"}]},{featureType:"administrative",elementType:"country",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#19a0d8"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{weight:6}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#e85113"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efe9e4"},{lightness:-40}]},{featureType:"transit.station",stylers:[{weight:9},{hue:"#e85113"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{lightness:100},{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:-100},{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"on"},{color:"#f0e4d3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#efe9e4"},{lightness:-25}]}],regions=["GLOBAL LOCATIONS","AFRICAN CONTINENT","ASIAN CONTINENT","NORTH AMERICA","CENTRAL AMERICA","SOUTH AMERICA","FIELD RESEARCH","STUDY ABROAD","OUR OFFICES"],places=[{title:"Kunene Region of Namibia",location:{lat:-18.789779,lng:13.370975},continent:"African Continent",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/southern-africa/kunene-region-of-namibia/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/Namibia_Kunene_Zebra.jpg"},{title:"Botswana – KAZA, Okavango Delta & Central Kalahari Game Refuge",location:{lat:-19.2798704,lng:22.8201857},continent:"African Continent",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/southern-africa/botswana-okavango-delta/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/Lions_Whatwedo-2.jpg"},{title:"Taku River Wildlife Conservation Project – British Columbia",location:{lat:58.6553055,lng:-133.8137736},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/taku-river-wildlife-conservation-project-british-columbia/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/Taku-bke-2008-5.jpg"},{title:"Wolverine - Winter Recreation Project – Idaho, Montana and Wyoming",location:{lat:45.0575711,lng:-116.1655369},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/wolverine/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/10/wolverine-project-3.jpg"},{title:"Colorado Plateau – Utah",location:{lat:37.6299925,lng:-109.885184},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/san-juan-01.jpg"},{title:"North Coast – Yukon Territory",location:{lat:68.8369357,lng:-149.9462445},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/north-coast-yukon-territory/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/Yukon.jpg"},{title:"Great Bear Rainforest - British Columbia",location:{lat:52.9260101,lng:-128.935775},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/great-bear-rainforest/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/GBRKoeye2_Milek.jpg"},{title:"North Coast Conservation Design – British Columbia",location:{lat:54.2684383,lng:-130.4447293},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/north-coast-conservation-design-british-columbia/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/09/salmon.jpg"},{title:"Coastal Forest and Mountains – British Columbia",location:{lat:55.3639087,lng:-131.830578},continent:"North America",category:"Global Locations",type:"Field Research",cateUrl:"http://www.roundriver.org/where-we-work/north-america/coastal-forest-and-mountains-british-columbia/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/GBRKoeye3_Milek.jpg"},{title:"Muskwa Kechika Conservation Design - British Columbia",location:{lat:58.9338124,lng:-130.8412957},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/muskwa-kechika-conservation-design-british-columbia/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/bears-MK.jpg"},{title:"Mackenzie Delta – Northwest Territories",location:{lat:66.9995,lng:-127.437408},continent:"North America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/north-america/mackenzie-delta-northwest-territories/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/yukon_North_Slope-1.jpg"},{title:"Patagonia - Chile - South America",location:{lat:-43.0029846,lng:-71.6979215},continent:"South America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/south-america/patagonia-chile/",siteImage:"http://www.roundriver.org/wp-content/uploads/2013/06/patagonia_header-5.jpg"},{title:"Osa Peninsula - Costa Rica - Central America",location:{lat:8.539003,lng:-83.6045026},continent:"Central America",category:"Global Locations",type:"Field Research",siteUrl:"http://www.roundriver.org/where-we-work/central-america/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/10/costa-rica-01.jpg"},{title:"Study Abroad in Mongolia",location:{lat:51.198708,lng:99.678212},continent:"Asian Continent",category:"Global Locations",type:"Study Abroad",siteUrl:"http://www.roundriver.org/student-programs/programs/mongolia/",siteImage:"http://www.roundriver.org/wp-content/uploads/2016/09/Mongolia_project_detail-1024x768.jpg"},{title:"Study Abroad in Patagonia",location:{lat:-48.0029846,lng:-71.6979215},continent:"South America",category:"Global Locations",type:"Study Abroad",siteUrl:"http://www.roundriver.org/student-programs/programs/patagonia-chile/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/09/patagonia-120-1024x683.jpg"},{title:"Study Abroad in Costa Rica",location:{lat:9.539003,lng:-84.6045026},continent:"Central America",category:"Global Locations",type:"Study Abroad",siteUrl:"http://www.roundriver.org/student-programs/programs/costa-rica-the-osa-peninsula/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/IMG_1538-1024x1024.jpg"},{title:"Study Abroad in British Columbia",location:{lat:60.6553055,lng:-135.8137736},continent:"North America",category:"Global Locations",type:"Study Abroad",siteUrl:"http://www.roundriver.org/student-programs/programs/taku-river-tlingit-territory-british-columbia-canada/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/09/taku-11-1024x680.jpg"},{title:"Study Abroad in Botswana",location:{lat:-21.2798704,lng:24.8201857},continent:"Africa",category:"Global Locations",type:"Study Abroad",siteUrl:"http://www.roundriver.org/student-programs/programs/africa-wildlife-conservation-okavango-delta-botswana/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/09/botswana-5-1024x680.jpg"},{title:"Round River Administrative Office",location:{lat:40.748879,lng:-111.865102},continent:"North America",category:"Global Locations",type:"Our Offices",siteUrl:"http://www.roundriver.org/contact-us/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/RR-web-logo-main.png"},{title:"Round River Science Office",location:{lat:45.678863,lng:-111.035495},continent:"North America",category:"Global Locations",type:"Our Offices",siteUrl:"http://www.roundriver.org/contact-us/",siteImage:"http://www.roundriver.org/wp-content/uploads/2015/07/RR-web-logo-main.png"}],vm=new AppViewModel;ko.applyBindings(vm);