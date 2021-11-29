var ideaHistory = [];

function pullRandomWord(array){
    let word = array[Math.floor(Math.random() * (array.length))];
    return word;
};

window.addEventListener("keydown", function(event){
    if(event.keyCode == 32){
        generateSentence();
    }
});

function generateSentence(){
    var idea, templateSeed;

    templateSeed = Math.floor(Math.random() * 7);

    switch(templateSeed){
        case 0:
            //a MOOD GENRE game based in AINSETTING where you play as a GENERALCHARACTER trying to PEOPLEOBJECTIVES a GROUPNAMES of GENERALCHARACTERS
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game based in " + pullRandomWord(aInSetting) + " where you play as " + pullRandomWord(aGeneralCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(peopleObjectives) + " a " + pullRandomWord(groupNames) + " of " + pullRandomWord(generalCharacters);
            break;
        case 1:
            //a MOOD GENRE game where you play as a CHARACTERDESCRIPTION GENERALCHARACTER trying to PEOPLEOBJECTIVES a GENERALCHARACTER in AINSETTING
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game where you play as " + pullRandomWord(aCharacterDescriptions) + " " + pullRandomWord(generalCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(peopleObjectives) + " a " + pullRandomWord(generalCharacter) + " in " + pullRandomWord(aInSetting);
            break;
        case 2:
            //a MOOD COMBINATION of GENRE and GENRE based in AINSETTING where you play as a GENERALCHARACTER trying to PEOPLEOBJECTIVES a GROUPNAMES of GENERALCHARACTERS
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(combination) + " of " + pullRandomWord(genre) + " and " + pullRandomWord(genre) +" based in " + pullRandomWord(aInSetting) + " where you play as " + pullRandomWord(aGeneralCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(peopleObjectives) + " a " + pullRandomWord(groupNames) + " of " + pullRandomWord(generalCharacters);
            break;
        case 3:
            //a MOOD GENRE game based in AINSETTING where you play as PROPERCHARACTER trying to PEOPLEOBJECTIVES PROPERCHARACTER
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game based in " + pullRandomWord(aInSetting) + " where you play as " + pullRandomWord(properCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(peopleObjectives) + " " + pullRandomWord(properCharacter);
            break;
        case 4:
            //a MOOD GENRE game where you play as a CHARACTERDESCRIPTION PROPERCHARACTER trying to PEOPLEOBJECTIVES a GENERALCHARACTER in AINSETTING
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game where you play as " + pullRandomWord(aCharacterDescriptions) + " " + pullRandomWord(properCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(peopleObjectives) + " a " + pullRandomWord(generalCharacter) + " in " + pullRandomWord(aInSetting);
            break;
        case 5:
            //a MOOD GENRE game where you play as a CHARACTERDESCRIPTION GENERALCHARACTER trying to LOCATIONOBJECTIVES AINSETTING
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game where you play as " + pullRandomWord(aCharacterDescriptions) + " " + pullRandomWord(generalCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(locationObjectives) + " " + pullRandomWord(aInSetting);
            break;
        case 6:
            //a MOOD GENRE game based in AINSETTING where you play as PROPERCHARACTER trying to PEOPLEOBJECTIVES PROPERCHARACTER
            idea = pullRandomWord(moodStart) + " " + pullRandomWord(genre) + " game based in " + pullRandomWord(aInSetting) + " where you play as " + pullRandomWord(properCharacter) + " " + pullRandomWord(doingTo) + " " + pullRandomWord(locationObjectives) + " " + pullRandomWord(aInSetting);
            break;
    }
    
    /*
    Thoughts:
      - Include: SETTING, MOOD, GENRE, CHARACTER, OBJECTIVES...
      - Optional: ART-STYLE, ENEMY(If not part of objective)...
    */
    
    ideaHistory.push(idea);

    if(ideaHistory.length > 1000){
        ideaHistory = _.drop(ideaHistory, 1);
    }

    sessionStorage.setItem("ideaHistory", JSON.stringify(ideaHistory));

    document.getElementById("gameIdeaArea").innerHTML = idea;
};
