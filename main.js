const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const { exec } = require('child_process');

const path = require('path'); // Import the path module
const { shell } = require('electron');

const { Client } = require('discord-rpc'); // Make sure to import the RPC client

let rpc = new Client({ transport: 'ipc' }); // Initialize the Discord RPC client

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
});


ipcMain.on('launch-game', (event, gameId, gameTitle) => {
    console.log(`Received request to launch game with ID: ${gameId}`);
    console.log(`Launching game: ${gameTitle} (ID: ${gameId})`);
    setActivity(gameTitle);

    if (gameId === "game1") {
        // Correct way: Use the full absolute path directly
        const exePath = '';

        exec(`"${exePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error launching game: ${error.message}`);
                return;
            }
            console.log(`Game output: ${stdout}`);
        });
    }
    if (gameId === "game2") {
        // Correct way: Use the full absolute path directly
        const exePath = '';

        exec(`"${exePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error launching game: ${error.message}`);
                return;
            }
            console.log(`Game output: ${stdout}`);
        });
    }
    if (gameId === "game3") {
        // Correct way: Use the full absolute path directly
        const exePath = 'e';

        exec(`"${exePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error launching game: ${error.message}`);
                return;
            }
            console.log(`Game output: ${stdout}`);
        });
    }
    if (gameId === "game4") {
        // Correct way: Use the full absolute path directly
        const exePath = '';

        exec(`"${exePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error launching game: ${error.message}`);
                return;
            }
            console.log(`Game output: ${stdout}`);
        });
    }
    if (gameId === "game5") {
        const exePath = "";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game6") {
        const exePath = "";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game7") {
        const exePath = "";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game8") {
        const exePath = "";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game9") {
        const exePath = "";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
});


//Discord Integration--------------------------------------------------------

// Set Discord activity
async function setActivity(gameTitle) {
    if (!rpc) return;
    rpc.setActivity({
        details: `Playing ${gameTitle}`,
        startTimestamp: Date.now(),
        largeImageKey: "game_icon",
        largeImageText: gameTitle,
        smallImageKey: "small_icon",
        smallImageText: "Idle",
        instance: true,
    });
}

// Connect to Discord Rich Presence
rpc.on('ready', () => {
    console.log('Connected to Discord!');
});

rpc.login({ clientId: '' }).catch(console.error);

//Discord Integration--------------------------------------------------------
