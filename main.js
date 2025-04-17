const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

let win;

// Define the path to save game data
const dataPath = path.join(__dirname, 'games.json'); // Use the project directory's games.json

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Utility: Load games from JSON
function loadGamesFromDisk() {
    try {
        if (!fs.existsSync(dataPath)) {
            fs.writeFileSync(dataPath, '[]'); // create file if it doesn't exist
        }
        const data = fs.readFileSync(dataPath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Failed to load games:", err);
        return [];
    }
}

// Utility: Save a new game
function saveGameToDisk(newGame) {
    try {
        let games = loadGamesFromDisk();
        games.push(newGame);
        fs.writeFileSync(dataPath, JSON.stringify(games, null, 2));
    } catch (err) {
        console.error("Failed to save game:", err);
    }
}

// Handle loading games on renderer request
ipcMain.handle('load-games', () => {
    return loadGamesFromDisk();
});

// Handle saving new game from renderer
ipcMain.on('save-game', (event, gameData) => {
    saveGameToDisk(gameData);
});

// Handle game launch
ipcMain.on('launch-game', (event, gameId) => {
    console.log(`Launching game: (ID: ${gameId})`);

    const games = loadGamesFromDisk();
    const game = games.find(g => g.id === gameId);

    if (!game || !game.path) {
        console.error("Game not found or missing file path!");
        return;
    }

    const exePath = game.path;

    exec(`"${exePath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error launching game: ${error.message}`);
            return;
        }
        console.log(`Game output: ${stdout}`);
    });
});
