//Hurray experience calculator
function experienceMage(expM, levelM, expGainM, expToNextLevelM){
    levelM = 1;
    expM = 0;
    expGainM = 0; //Changes based on enemy defeated
    expToNextLevelM = 150; 
}

function experienceKnight(expK, levelK, expGainK, expToNextLevelK){
    levelK = 1;
    expK = 0;
    expGainK = 0; //Changes based on enemy defeated
    expToNextLevelK = 150; 
}

function experienceCleric(expC, levelC, expGainC, expToNextLevelC){
    levelC = 1;
    expC = 0;
    expGainC = 0; //Changes based on enemy defeated
    expToNextLevelC = 150; 
}

function experienceThief(expT, levelT, expGainT, expToNextLevelT){
    levelT = 1;
    expT = 0;
    expGainT = 0; //Changes based on enemy defeated
    expToNextLevelT = 150; 
}

function experienceEnemy(levelE, expGive){
    levelE = 0; //Changes based on user input
    expGive = 0; //Changes based on level of enemy
    let enemyDefeated = false; //Figure this out later 
}

function expCalcM (){
    if(enemyDefeated == true && expGainM + expM >= expToNextLevelM){
        console.log("Enemy Defeated!");
        console.log("Level Up!");
        levelM++;
        expToNextLevelM = expToNextLevelM * 150;
        expM = expM - expToNextLevelM;
    }
    if(enemyDefeated == true){
        console.log("Enemy Defeated!");
        expM = expM + expGive;
    }
}

function expCalcK (){
    if(enemyDefeated == true && expGainK + expK >= expToNextLevelK){
        console.log("Enemy Defeated!");
        console.log("Level Up!");
        levelK++;
        expToNextLevelK = expToNextLevelK * 150;
        expK = expK - expToNextLevelK;
    }
    if(enemyDefeated == true){
        console.log("Enemy Defeated!");
        expK = expK + expGive;
    }
}

function expCalcC (){
    if(enemyDefeated == true && expGainC + expC >= expToNextLevelC){
        console.log("Enemy Defeated!");
        console.log("Level Up!");
        levelC++;
        expToNextLevelC = expToNextLevelC * 150;
        expC = expC - expToNextLevelC;
    }
    if(enemyDefeated == true){
        console.log("Enemy Defeated!");
        expC = expC + expGive;
    }
}

function expCalcT (){
    if(enemyDefeated == true && expGainT + expT >= expToNextLevelT){
        console.log("Enemy Defeated!");
        console.log("Level Up!");
        levelT++;
        expToNextLevelT = expToNextLevelT * 150;
        expT = expT - expToNextLevelT;
    }
    if(enemyDefeated == true){
        console.log("Enemy Defeated!");
        expT = expT + expGive;
    }
}
