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
}

function expCalcM (){
    if(expGainM + expM == expToNextLevelM){
        print("Level Up!")
        levelM++;
        expToNextLevelM = expToNextLevelM * 150;
    }
}

function expCalcK (){
    if(expGainK + expK == expToNextLevelK){
        print("Level Up!")
        levelK++;
        expToNextLevelK = expToNextLevelK * 150;
    }
}

function expCalcC (){
    if(expGainC + expC == expToNextLevelC){
        print("Level Up!")
        levelC++;
        expToNextLevelC = expToNextLevelC * 150;
    }
}

function expCalcT (){
    if(expGainT + expT == expToNextLevelT){
        print("Level Up!")
        levelT++;
        expToNextLevelT = expToNextLevelT * 150;
    }
}