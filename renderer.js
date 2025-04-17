const { ipcRenderer } = require('electron');

// Load existing games when the app starts
window.onload = async () => {
  const games = await ipcRenderer.invoke('load-games');
  games.forEach(game => renderGame(game));
};

function addNewGameSaved(gameName, fileLocation, imgUrl) {
    const newGame = { name: gameName, path: fileLocation, imgUrl, id: generateId() };

    renderGame(newGame); // Display it
    ipcRenderer.send('save-game', newGame); // Save it
}

function renderGame(game) {
    const list = document.getElementById('gameListItems');

    const li = document.createElement('li');
    li.id = game.id;

    const img = document.createElement('img');
    img.src = game.imgUrl;
    img.alt = `${game.name} Image`;
    img.className = 'game-image';

    const span = document.createElement('span');
    span.textContent = game.name;

    li.appendChild(img);
    li.appendChild(span);
    li.onclick = () => launchGame(game.id);

    list.appendChild(li);
}

function generateId() {
  return 'game-' + Math.random().toString(36).substr(2, 9);
}
