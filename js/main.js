function testFunc() {
	document.getElementById('test').innerHTML = Date();
}

function success() {
	let x = document.getElementById('success');
	x.style.visibility = "visible";

	setTimeout(function(){
		x.style.visibility = "hidden";
	},5000);
}

function switchHidden() {
	let x = document.getElementById('myButtonDiv');
	
	if (x.style.visibility == "visible") {
		x.style.visibility = "hidden";
		document.getElementById("myButton").innerHTML = "Show Date Button"
	}
	else {
		x.style.visibility = "visible";
		document.getElementById("myButton").innerHTML = "Hide Date Button"
	}
}
