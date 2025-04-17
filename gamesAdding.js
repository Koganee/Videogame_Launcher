function addNewGame(gameName, fileLocation, imgUrl) {
    const gameList = document.getElementById("gameList");
    const newGame = document.createElement("div");
    gameList.appendChild(newGame);
    addNewGameSaved(gameName, fileLocation, imgUrl); // Save the game to disk
}

window.addNewGame = addNewGame;