
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

		document.getElementById("character_name").innerHTML = "Aragorn";
		document.getElementById("character_class").innerHTML = "Knight";
		document.getElementById("character_class").style.backgroundColor = 'crimson';
		document.getElementById("attribute_table").style.backgroundColor = 'crimson';
		document.getElementById('character_name').style.backgroundColor = 'crimson';
		document.getElementById('weapons').style.backgroundColor = 'crimson';
		document.getElementById('skills').style.backgroundColor = 'crimson';
		document.getElementById('items').style.backgroundColor = 'crimson';
	}
	else if (y == "mage"){
		console.log("Mage Table Test")

		document.getElementById("character_name").innerHTML = "Gandalf the Grey";
		document.getElementById("character_class").innerHTML = "Mage";
		document.getElementById("character_class").style.backgroundColor = 'deepskyblue';
		document.getElementById("attribute_table").style.backgroundColor = 'deepskyblue';
		document.getElementById('character_name').style.backgroundColor = 'deepskyblue';
		document.getElementById('weapons').style.backgroundColor = 'deepskyblue';
		document.getElementById('skills').style.backgroundColor = 'deepskyblue';
		document.getElementById('items').style.backgroundColor = 'deepskyblue';
	}
	else if (y == "cleric"){
		console.log("Cleric Table Test")

		document.getElementById("character_name").innerHTML = "Arwen";
		document.getElementById("character_class").innerHTML = "Cleric";
		document.getElementById("character_class").style.backgroundColor = 'mediumseagreen';
		document.getElementById("attribute_table").style.backgroundColor = 'mediumseagreen';
		document.getElementById('character_name').style.backgroundColor = 'mediumseagreen';
		document.getElementById('weapons').style.backgroundColor = 'mediumseagreen';
		document.getElementById('skills').style.backgroundColor = 'mediumseagreen';
		document.getElementById('items').style.backgroundColor = 'mediumseagreen';
	}
	else if (y == "thief"){
		console.log("Thief Table Test")

		document.getElementById("character_name").innerHTML = "Pippen";
		document.getElementById("character_class").innerHTML = "Thief";
		document.getElementById("character_class").style.backgroundColor = 'blueviolet';
		document.getElementById("attribute_table").style.backgroundColor = 'blueviolet';
		document.getElementById('character_name').style.backgroundColor = 'blueviolet';
		document.getElementById('weapons').style.backgroundColor = 'blueviolet';
		document.getElementById('skills').style.backgroundColor = 'blueviolet';
		document.getElementById('items').style.backgroundColor = 'blueviolet';
		
	}
	else if (y == "archer"){
		console.log("Archer Table Test")

		document.getElementById("character_name").innerHTML = "Legolas";
		document.getElementById("character_class").innerHTML = "Archer";
		document.getElementById("character_class").style.backgroundColor = 'midnightblue';
		document.getElementById("attribute_table").style.backgroundColor = 'midnightblue';
		document.getElementById('character_name').style.backgroundColor = 'midnightblue';
		document.getElementById('weapons').style.backgroundColor = 'midnightblue';
		document.getElementById('skills').style.backgroundColor = 'midnightblue';
		document.getElementById('items').style.backgroundColor = 'midnightblue';
	}
	else if (y == "darkmage"){
		console.log("Dark Mage Table Test")

		document.getElementById("character_name").innerHTML = "Saruman";
		document.getElementById("character_class").innerHTML = "Dark Mage";
		document.getElementById("character_class").style.backgroundColor = 'darkorange';
		document.getElementById("attribute_table").style.backgroundColor = 'darkorange';
		document.getElementById('character_name').style.backgroundColor = 'darkorange';
		document.getElementById('weapons').style.backgroundColor = 'darkorange';
		document.getElementById('skills').style.backgroundColor = 'darkorange';
		document.getElementById('items').style.backgroundColor = 'darkorange';
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

/* This function hides and then shows the different tabs for the characeter creation page */

function openCharacter(event, titleName){

	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tab_content");
	for(i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tab_link");
	for(i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}

	document.getElementById(titleName).style.display = "block";
	event.currentTarget.className += "active";
}


function editHP(){
	document.getElementById("hp_stat").contentEditable = "true";
}

function editAttack(){
	document.getElementById("attack_stat").contentEditable = "true";
}

function editDefense(){
	document.getElementById("defense_stat").contentEditable = "true";
}

function editStrength(){
	document.getElementById("strength_stat").contentEditable = "true";
}

function editMagic(){
	document.getElementById("magic_stat").contentEditable = "true";
}


function dark_mode(){
	document.body.style.backgroundImage = "url('https://static.wikia.nocookie.net/criticalrole/images/1/16/The_Cyrengreen_Forest_-_Robin_Wyatt.jpg/revision/latest/scale-to-width-down/2000?cb=20211221125350')";}