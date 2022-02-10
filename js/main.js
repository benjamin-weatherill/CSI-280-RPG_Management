
// Test Function for Date
function testFunc() {
	document.getElementById('test').innerHTML = Date();
}

// Universal Success Function
function success() {

	let x = document.getElementById('success');

	x.style.visibility = "visible";

	setTimeout(function() {
		x.style.visibility = "hidden";
	},5000);

}


// Character Menu Selection
function characterMenu(){

	let y = document.getElementById('drop_menu_2').value;

	if (y == "knight"){
		console.log("Knight Test");
		document.getElementById("fill_image").innerHTML = '<img src = "https://static.tvtropes.org/pmwiki/pub/images/fepr_blackknight.png" style = "background:transparent;" height = "350px" width = "325px">'
		
	}
	else if (y == "mage"){
		console.log("Mage Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Ffireemblem%2Fimages%2F3%2F38%2FMerric_Fight.png%2Frevision%2Flatest%3Fcb%3D20171029115158%26path-prefix%3Dfr&f=1&nofb=1" style = "background:transparent;" height = "375px" width = "325px">'
	}
	else if (y == "cleric"){
		console.log("Cleric Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Ffeheroes_gamepedia_en%2Fthumb%2F7%2F72%2FCleric_BtlFace.png%2F1200px-Cleric_BtlFace.png&f=1&nofb=1" style = "background:transparent;" height = "450px" width = "375px">'
	}
	else if (y == "thief"){
		console.log("Thief Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepress.gg%2Ffeheroes%2Fsites%2Ffireemblem%2Ffiles%2F2017-07%2FFull_Portrait_Thief.png&f=1&nofb=1" style = "background:transparent;" height = "400px" width = "325px">'
	}
	else if (y == "archer"){
		console.log("Archer Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F48%2F4f%2Fa4%2F484fa47a9128d420c45b760b732b89c8.png&f=1&nofb=1" style = "background:transparent;" height = "400px" width = "325px">'
	}
	else if (y == "darkmage"){
		console.log("Dark Mage Test")
		document.getElementById("fill_image").innerHTML = '<img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2b%2F14%2Fc8%2F2b14c82ee8f6f8cdbdc29f43be81b2eb.png&f=1&nofb=1" style = "background:transparent;" height = "400px" width = "325px">'
	}

}

function createTable(){

	let y = document.getElementById('drop_menu_2').value;

	if (y == "knight"){
		console.log("Knight Table Test");
		document.getElementById("hp_stat").innerHTML = '0'
		document.getElementById("attack_stat").innerHTML = "0"
		document.getElementById("defense_stat").innerHTML = "0"
		document.getElementById("strength_stat").innerHTML = "0"
		document.getElementById("magic_stat").innerHTML = "0"
	}
	else if (y == "mage"){
		console.log("Mage Table Test")
		document.getElementById("hp_stat").innerHTML = '1'
		document.getElementById("attack_stat").innerHTML = "1"
		document.getElementById("defense_stat").innerHTML = "1"
		document.getElementById("strength_stat").innerHTML = "1"
		document.getElementById("magic_stat").innerHTML = "1"
	}
	else if (y == "cleric"){
		console.log("Cleric Table Test")
		document.getElementById("hp_stat").innerHTML = '2'
		document.getElementById("attack_stat").innerHTML = "2"
		document.getElementById("defense_stat").innerHTML = "2"
		document.getElementById("strength_stat").innerHTML = "2"
		document.getElementById("magic_stat").innerHTML = "2"
	}
	else if (y == "thief"){
		console.log("Thief Table Test")
		document.getElementById("hp_stat").innerHTML = '3'
		document.getElementById("attack_stat").innerHTML = "3"
		document.getElementById("defense_stat").innerHTML = "3"
		document.getElementById("strength_stat").innerHTML = "3"
		document.getElementById("magic_stat").innerHTML = "3"
	}
	else if (y == "archer"){
		console.log("Archer Table Test")
		document.getElementById("hp_stat").innerHTML = '4'
		document.getElementById("attack_stat").innerHTML = "4"
		document.getElementById("defense_stat").innerHTML = "4"
		document.getElementById("strength_stat").innerHTML = "4"
		document.getElementById("magic_stat").innerHTML = "4"
	}
	else if (y == "darkmage"){
		console.log("Dark Mage Table Test")
		document.getElementById("hp_stat").innerHTML = '5'
		document.getElementById("attack_stat").innerHTML = "5"
		document.getElementById("defense_stat").innerHTML = "5"
		document.getElementById("strength_stat").innerHTML = "5"
		document.getElementById("magic_stat").innerHTML = "5"
	}

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
