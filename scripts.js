// Javascript for TP7
//function to load file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}






// new Recipe object  
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients =  ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#container h1").innerHTML = this.recipeName; 
    document.querySelector("contributor").innerHTML = this.contributor; 
    document.querySelector(".centered").innerHTML = this.centered; "img(" + this.imageURL + ")";
    LoadFileInto(this.ingredients, "#ingedients ul");
    LoadFileInto(this.equipment, "#equipment  ul");
    LoadFileInto(this.directions, "#directions ol");
    
  }
 
  
  
}

BasicCrepe = new Recipe( "Basic Crepe", "Kia", "https://images.unsplash.com/photo-1485962307416-993e145b0d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "ingredients.html", "equipment.html", "directions.html");

PeachCrisp = new Recipe( "Peach Crisp", "Zaire Moon", "https://images.pexels.com/photos/4397920/pexels-photo-4397920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "peach-ingredients.html", "peach-equipment.html", "peach-directions.html");

TwistyCookie = new Recipe( "Twisty Cookie", "Mark Fillip ", "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", "cookie-ingredients.html", "cookie-equipment.html", "cookie-directions.html");

window.onload = function() {
  
    document.querySelector("#fristRecipe").onclick = function() {
      SevenLayerBars.displayRecipe();
      
    }

  document.querySelector("#secondRecipe").onclick = function() {
      PeachCrisp.displayRecipe(); }

   document.querySelector("#thirdRecipe").onclick = function() {
      TwistyCookie.displayRecipe(); }


  
}


// end window.onload