//Text input from the User
document.getElementById("userInput").onload = function() {userInput}

function userInput(){
    input = window.prompt("Select your character: Knight, Mage, Cleric, or Theif.");
    if(input == "Knight" || input == "knight"){
        alert("You chose the class Knight!");
    }
    else if (input == "Mage" || input == "mage"){
        alert("You chose the class Mage!");
    }
    else if (input == "Cleric" || input == "cleric"){
        alert("You chose the class Cleric!");
    }
    else if (input == "Theif" || input == "theif"){
        alert("You chose the class Theif!");
    }
    else{
        input = window.prompt("Please choose one of the four Characters: Knight, Mage, Cleric, or Theif." );
    }
}
