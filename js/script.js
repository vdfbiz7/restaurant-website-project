function myFunction() {
	var x = document.getElementById("centered_nav");
	if (x.className === "nav-links") {
		x.className += " responsive";
	} else {
		x.className = "nav-links";
	}
}
