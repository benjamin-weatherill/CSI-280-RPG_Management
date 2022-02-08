function testFunc() {
	document.getElementById('test').innerHTML = Date();
}

function success() {


	let y = document.getElementById('drop_menu_2').value;

	if (y == "knight"){
		console.log("Knight Test");
		document.getElementById("fill_image").innerHTML = '<img src = "https://static.tvtropes.org/pmwiki/pub/images/fepr_blackknight.png" style = "background:transparent;" height = "325px" width = "300px">'
	}
	else if (y == "mage"){
		console.log("Mage Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://www.kryxrpg.com/static/38051780264e12fd8d1c1a523c2dd94b/1a174/mage.png" style = "background:transparent;" height = "350px" width = "250px">'
	}
	else if (y == "cleric"){
		console.log("Cleric Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://www.finalfantasyd20.com/wp-content/uploads/cleric.png" style = "background:transparent;" height = "350px" width = "300px">'
	}
	else if (y == "thief"){
		console.log("Thief Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://i.pinimg.com/originals/b0/4a/eb/b04aeb642b4be08235c12451ebc0cd94.png" style = "background:transparent;" height = "350px" width = "225px">'
	}

	let x = document.getElementById('success');

	x.style.visibility = "visible";

	setTimeout(function() {
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
