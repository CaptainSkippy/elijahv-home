function pullRandomWord(array){
    let word = array[Math.floor(Math.random() * (array.length))];
    return word;
};

function generateSentence(){
    var idea, templateSeed;

    templateSeed = Math.floor(Math.random() * 1);

    switch(templateSeed){
        case 0:
            //A MOOD GENRE game based in AINSETTING where you play as a GENERALCHARACTER trying to PEOPLEOBJECTIVES a GROUPNAMES of GENERALCHARACTERS
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game based in " + pullRandomWord(aInSetting) + " where you play as " + pullRandomWord(aGeneralCharacter) + " trying to " + pullRandomWord(peopleObjectives) + " a " + pullRandomWord(groupNames) + " of " + pullRandomWord(generalCharacters);
            break;
    }

    //include: SETTING, MOOD, GENRE, CHARACTER, OBJECTIVES
    //Optional: ART-STYLE, ENEMY(If not part of objective), 

    document.getElementById("gameIdeaArea").innerHTML = idea;
};
