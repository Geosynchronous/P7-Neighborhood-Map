// Data File for Cat Clicker Premium by George Fischer

// Construct Cat Data
var dataConstructor = function() { 

	var self = this; 

	self.title = "This is the title"; 

	self.cat = [
	{  
		name: "Cat1", 
		description: "description", 
		images: "URL", 
		count: 0 
	}, 
	{ 
		name: "Cat2", 
		description: "description", 
		images: "URL", 
		count: 0 
	} ];
};

// Create Encapsulated Cat Data variables
var data = new dataConstructor();  

//Example chained encapsulated variable array element
console.log(data.cat[0].name);

