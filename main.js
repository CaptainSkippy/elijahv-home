function generateSentence(){
    var idea, templateSeed;

    templateSeed = Math.floor(Math.random() * 6);

    switch(templateSeed){
        case 0:
            //a MOOD GENRE/GENRE game base around THEME in an SCENE
            idea = moodStart[Math.floor(Math.random() * (moodStart.length))] + " " + genre[Math.floor(Math.random() * (genre.length))] + "/" + genre[Math.floor(Math.random() * (genre.length))] + " game based around " + theme[Math.floor(Math.random() * (theme.length))] + " in " + scene[Math.floor(Math.random() * (scene.length))];
            break;
        case 1:
            //a MOOD GENRE game about THEME
            idea = moodStart[Math.floor(Math.random() * (moodStart.length))] + " " + genre[Math.floor(Math.random() * (genre.length))] + " game about " + theme[Math.floor(Math.random() * (theme.length))];
            break;
        case 2:
            //a MOOD GENRE game where you play as AGENERALCHARACTER
            idea = moodStart[Math.floor(Math.random() * (moodStart.length))] + " " + genre[Math.floor(Math.random() * (genre.length))] + " game where you play as " + aGeneralCharacter[Math.floor(Math.random() * (aGeneralCharacter.length))];
            break;
        case 3:
            //a MOOD GENRE game where you play as a CHARACTERDESCRIPTION GENERALCHARACTER
            idea = moodStart[Math.floor(Math.random() * (moodStart.length))] + " " + genre[Math.floor(Math.random() * (genre.length))] + " game where you play as a " + characterDescriptions[Math.floor(Math.random() * (characterDescriptions.length))] + " " + generalCharacter[Math.floor(Math.random() * (generalCharacter.length))];
            break;
        case 4:
            //a MOOD GENRE game where you play as a GROUPNAMES of GENERALCHARACTERS
            idea = moodStart[Math.floor(Math.random() * (moodStart.length))] + " " + genre[Math.floor(Math.random() * (genre.length))] + " game where you play as a " + groupNames[Math.floor(Math.random() * (groupNames.length))] + " of "+ generalCharacters[Math.floor(Math.random() * (generalCharacters.length))];
            break;
        case 5:
            //a MOOD GENRE game where you play as a GROUPNAMES of CHARACTERDESCRIPTION GENERALCHARACTERS
            idea = moodStart[Math.floor(Math.random() * (moodStart.length))] + " " + genre[Math.floor(Math.random() * (genre.length))] + " game where you play as a " + groupNames[Math.floor(Math.random() * (groupNames.length))] + " of " + characterDescriptions[Math.floor(Math.random() * (characterDescriptions.length))] + " " + generalCharacters[Math.floor(Math.random() * (generalCharacters.length))];
            break;
    }

    document.getElementById("gameIdeaArea").innerHTML = idea;
};
