// Data File for Cat Clicker Premium by George Fischer

// Construct Cat Data
var dataConstructor = function() { 

	var self = this; 

	self.cat = [
		{  
			name: "Chicago", 
			images: "images/chicago.jpg", 
			count: 0 
		}, 
		{  
			name: "Chill", 
			images: "images/chill.jpg", 
			count: 0 
		}, 
		{  
			name: "Chops", 
			images: "images/chops.jpg", 
			count: 0 
		}, 
		{  
			name: "Mamasita", 
			images: "images/mamasita.jpg", 
			count: 0 
		}, 
			{  
			name: "Predator", 
			images: "images/predator.jpg", 
			count: 0 
		}, 
		{  
			name: "Siberian", 
			images: "images/siberian.jpg", 
			count: 0 
		}, 
		{  
			name: "Watch", 
			images: "images/watch.jpg", 
			count: 0 
		}, 
		{  
			name: "Wet", 
			images: "images/wet.jpg", 
			count: 0 
		}, 
		{ 
			name: "Woods", 
			images: "images/woods.jpg", 
			count: 0 
		} ];
};

// Create Encapsulated Cat Data variables
var data = new dataConstructor();  

//TEMP
//Example chained encapsulated variable array element that is created
console.log(data.cat[0].name);

