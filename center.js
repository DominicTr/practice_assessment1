var image = document.getElementById("img");
var center = document.getElementById("center");
var vertical = 0;
var horizontal = 0;
var imgheight = 100;
document.getElementById("avatar1").addEventListener("click", function(){
	image.src="imgs/ava1.png";
});
document.getElementById("avatar2").addEventListener("click", function(){
	image.src="imgs/ava2.png";
});
document.getElementById("up").addEventListener("click", function(){
	vertical += 7;
	center.style.bottom= vertical + "px";
})
document.getElementById("down").addEventListener("click", function(){
	vertical -= 7;
	center.style.bottom= vertical + "px";
});
document.getElementById("left").addEventListener("click", function(){
	horizontal -= 7;
	center.style.left= horizontal + "px";
});
document.getElementById("right").addEventListener("click", function(){
	horizontal += 7;
	center.style.left= horizontal + "px";
});
document.getElementById("plus").addEventListener("click", function(){
	imgheight += 1
	image.style.height= imgheight + "%";
});
document.getElementById("minus").addEventListener("click", function(){
	imgheight -= 1
	image.style.height= imgheight + "%";
});
image.addEventListener("click", function(){
	document.getElementById("up").style.visibility = "hidden";
	document.getElementById("down").style.visibility = "hidden";
	document.getElementById("left").style.visibility = "hidden";
	document.getElementById("right").style.visibility = "hidden";
	document.getElementById("avatar1").style.visibility = "hidden";
	document.getElementById("avatar2").style.visibility = "hidden";
	document.getElementById("plus").style.visibility = "hidden";
	document.getElementById("minus").style.visibility = "hidden";
	/* document.getElementByClassName("control").style.visibility = "hidden";  not working */
});
document.getElementById("header").addEventListener("click", function(){
	document.getElementById("up").style.visibility = "visible";
	document.getElementById("down").style.visibility = "visible";
	document.getElementById("left").style.visibility = "visible";
	document.getElementById("right").style.visibility = "visible";
	document.getElementById("avatar1").style.visibility = "visible";
	document.getElementById("avatar2").style.visibility = "visible";
	document.getElementById("plus").style.visibility = "visible";
	document.getElementById("minus").style.visibility = "visible";
})