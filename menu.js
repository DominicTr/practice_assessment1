var verticalHat = 20;
var horizontalHat = 20;
var verticalShirt = 20;
var horizontalShirt = 20;
var verticalBow = 20;
var horizontalBow = 20;
var hatsize = 75;
var shirtsize = 75;
var bowsize = 75;
document.getElementById("menuButton").addEventListener("click", function(){
	document.getElementById("menu").style.right="0px";
});
document.getElementById("hat1").addEventListener("click", function(){
	document.getElementById("hat2").style.display = "block";
	document.getElementById("menuUp").style.display = "block";
	document.getElementById("menuDown").style.display = "block";
	document.getElementById("menuLeft").style.display = "block";
	document.getElementById("menuRight").style.display = "block";
	document.getElementById("hatplus").style.display = "block";
	document.getElementById("hatminus").style.display = "block";
	
	document.getElementById("menuUp2").style.display = "none";
	document.getElementById("menuDown2").style.display = "none";
	document.getElementById("menuLeft2").style.display = "none";
	document.getElementById("menuRight2").style.display = "none";
	document.getElementById("shirtplus").style.display = "none";
	document.getElementById("shirtminus").style.display = "none";
	
	document.getElementById("menuUp3").style.display = "none";
	document.getElementById("menuDown3").style.display = "none";
	document.getElementById("menuLeft3").style.display = "none";
	document.getElementById("menuRight3").style.display = "none";
	document.getElementById("bowplus").style.display = "none";
	document.getElementById("bowminus").style.display = "none";
	
	
	document.getElementById("menuUp").addEventListener("click", function(){
		verticalHat += 1;
		document.getElementById("hat2").style.bottom = verticalHat + "%";
	});
	document.getElementById("menuDown").addEventListener("click", function(){
		verticalHat -= 1;
		document.getElementById("hat2").style.bottom = verticalHat + "%";
	});
	document.getElementById("menuLeft").addEventListener("click", function(){
		horizontalHat += 1;
		document.getElementById("hat2").style.right = horizontalHat + "%";
	});
	document.getElementById("menuRight").addEventListener("click", function(){
		horizontalHat -= 1;
		document.getElementById("hat2").style.right = horizontalHat + "%";
	});
	document.getElementById("hatplus").addEventListener("click", function(){
		hatsize += 8;
		document.getElementById("hat2").style.width = hatsize + "px";
	});
	document.getElementById("hatminus").addEventListener("click", function(){
		hatsize -= 8;
		document.getElementById("hat2").style.width = hatsize + "px";
	});
});
document.getElementById("shirt1").addEventListener("click", function(){
	document.getElementById("shirt2").style.display = "block";
	document.getElementById("menuUp2").style.display = "block";
	document.getElementById("menuDown2").style.display = "block";
	document.getElementById("menuLeft2").style.display = "block";
	document.getElementById("menuRight2").style.display = "block";
	document.getElementById("shirtplus").style.display = "block";
	document.getElementById("shirtminus").style.display = "block";
	
	document.getElementById("menuUp").style.display = "none";
	document.getElementById("menuDown").style.display = "none";
	document.getElementById("menuLeft").style.display = "none";
	document.getElementById("menuRight").style.display = "none";
	document.getElementById("hatplus").style.display = "none";
	document.getElementById("hatminus").style.display = "none";
	
	document.getElementById("menuUp3").style.display = "none";
	document.getElementById("menuDown3").style.display = "none";
	document.getElementById("menuLeft3").style.display = "none";
	document.getElementById("menuRight3").style.display = "none";
	document.getElementById("bowplus").style.display = "none";
	document.getElementById("bowminus").style.display = "none";
	
		document.getElementById("menuUp2").addEventListener("click", function(){
		verticalShirt += 1;
		document.getElementById("shirt2").style.bottom = verticalShirt + "%";
	});
	document.getElementById("menuDown2").addEventListener("click", function(){
		verticalShirt -= 1;
		document.getElementById("shirt2").style.bottom = verticalShirt + "%";
	});
	document.getElementById("menuLeft2").addEventListener("click", function(){
		horizontalShirt += 1;
		document.getElementById("shirt2").style.right = horizontalShirt + "%";
	});
	document.getElementById("menuRight2").addEventListener("click", function(){
		horizontalShirt -= 1;
		document.getElementById("shirt2").style.right = horizontalShirt + "%";
	});
	document.getElementById("shirtplus").addEventListener("click", function(){
		shirtsize += 8;
		document.getElementById("shirt2").style.width = shirtsize + "px";
	});
	document.getElementById("shirtminus").addEventListener("click", function(){
		shirtsize -= 8;
		document.getElementById("shirt2").style.width = shirtsize + "px";
	});
});
document.getElementById("bow1").addEventListener("click", function(){
	document.getElementById("bow2").style.display = "block";
	document.getElementById("menuUp3").style.display = "block";
	document.getElementById("menuDown3").style.display = "block";
	document.getElementById("menuLeft3").style.display = "block";
	document.getElementById("menuRight3").style.display = "block";
	document.getElementById("bowplus").style.display = "block";
	document.getElementById("bowminus").style.display = "block";
	
	document.getElementById("menuUp").style.display = "none";
	document.getElementById("menuDown").style.display = "none";
	document.getElementById("menuLeft").style.display = "none";
	document.getElementById("menuRight").style.display = "none";
	document.getElementById("hatplus").style.display = "none";
	document.getElementById("hatminus").style.display = "none";
	
	document.getElementById("menuUp2").style.display = "none";
	document.getElementById("menuDown2").style.display = "none";
	document.getElementById("menuLeft2").style.display = "none";
	document.getElementById("menuRight2").style.display = "none";
	document.getElementById("shirtplus").style.display = "none";
	document.getElementById("shirtminus").style.display = "none";
	
		document.getElementById("menuUp3").addEventListener("click", function(){
		verticalBow += 1;
		document.getElementById("bow2").style.bottom = verticalBow + "%";
	});
	document.getElementById("menuDown3").addEventListener("click", function(){
		verticalBow -= 1;
		document.getElementById("bow2").style.bottom = verticalBow+ "%";
	});
	document.getElementById("menuLeft3").addEventListener("click", function(){
		horizontalBow += 1;
		document.getElementById("bow2").style.right = horizontalBow + "%";
	});
	document.getElementById("menuRight3").addEventListener("click", function(){
		horizontalBow -= 1;
		document.getElementById("bow2").style.right = horizontalBow + "%";
	});
	document.getElementById("bowplus").addEventListener("click", function(){
		bowsize += 8;
		document.getElementById("bow2").style.width = bowsize + "px";
	});
	document.getElementById("bowminus").addEventListener("click", function(){
		bowsize -= 8;
		document.getElementById("bow2").style.width = bowsize + "px";
	});
});
