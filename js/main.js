function testFunc() {
	document.getElementById('test').innerHTML = Date();
}

function switchHidden() {
	let x = document.getElementById('myButton');
	
	if (x.style.visibility == "visible") {
		x.style.visibility = "hidden";
	}
	else {
		x.style.visibility = "visible";
	}
}
