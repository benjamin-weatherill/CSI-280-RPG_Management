/*
playerID = 0;
enemyID = 1;
NPC_ID = 2;

class Creature{
    constructor(creatureID, creatureName, creatureStats){
	this.creatureID = creatureID;
	this.creatureName = creatureName;
	this.creatureStats = creatureStats;
    }
}


const combatants = [];

combatants = turnOrder();

for (let x = 0; x < combatants.length; x++){
    text += combatants[x].creatureName + "'s turn: Take your action!"
    actionList(combatants[x]);
}

function actionList(creature){
    if (creature.creatureID == playerID){
	text += "Fight!\nItems\nMove\n";
    }
    else if (creature.creatureID == enemyID){
	text += "Fight!\nMove\n";
    }
    else if (creature.creatureID == NPC_ID)
	text += "Fight!\nAssist\nMove\n";
}
*/