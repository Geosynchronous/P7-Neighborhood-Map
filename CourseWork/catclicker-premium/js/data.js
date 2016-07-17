// Data File for Cat Clicker Premium by George Fischer

// Construct Cat Data
var dataConstructor = function() { 

	var self = this; 

	self.cat = [
		{  
			name: "Chicago", 
			images: "images/chicago.jpg", 
		}, 
		{  
			name: "Chill", 
			images: "images/chill.jpg", 
		}, 
		{  
			name: "Chops", 
			images: "images/chops.jpg", 
		}, 
		{  
			name: "Mamasita", 
			images: "images/mamasita.jpg", 
		}, 
			{  
			name: "Predator", 
			images: "images/predator.jpg", 
		}, 
		{  
			name: "Siberian", 
			images: "images/siberian.jpg", 
		}, 
		{  
			name: "Watch", 
			images: "images/watch.jpg", 
		}, 
		{  
			name: "Wet", 
			images: "images/wet.jpg", 
		}, 
		{ 
			name: "Woods", 
			images: "images/woods.jpg", 
		} ];
};

// Create Encapsulated Cat Data variables
var data = new dataConstructor();  

//TEMP
//Example chained encapsulated variable array element that is created
// console.log(data.cat[0].name);

