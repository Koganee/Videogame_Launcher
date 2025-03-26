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
        const exePath = 'D:\\launcher_games\\Metal.Bringer.v1.01.6\\Metal.Bringer.v1.01.6\\MetalBringer.exe';

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
        const exePath = 'D:\\launcher_games\\The.Last.Faith.v1.5.2.ALL.DLC\\The.Last.Faith.v1.5.2.ALL.DLC\\The Last Faith.exe';

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
        const exePath = 'D:\\launcher_games\\WORLD.OF.HORROR.v1.01\\WORLD.OF.HORROR.v1.01\\worldofhorror.exe';

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
        const exePath = 'D:\\launcher_games\\Grounded.v1.4.6.4706\\Grounded.v1.4.6.4706\\Grounded.exe';

        exec(`"${exePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error launching game: ${error.message}`);
                return;
            }
            console.log(`Game output: ${stdout}`);
        });
    }
    if (gameId === "game5") {
        const exePath = "D:\\launcher_games\\Red.Dead.Redemption\\Red_Dead_Redemption\\RDR.exe";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game6") {
        const exePath = "D:\\launcher_games\\Palworld.v0.5.0.67935\\Palworld.v0.5.0.67935\\Palworld.exe";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game7") {
        const exePath = "D:\\launcher_games\\Geneforge.1.Mutagen\\Geneforge.1.Mutagen\\Geneforge Mutagen.exe";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game8") {
        const exePath = "D:\\launcher_games\\TMNT.SF.v2025.02.05.ALL.DLC\\TMNT.SF.v2025.02.05.ALL.DLC\\TMNTSF.exe";

        shell.openPath(exePath).then(result => {
            if (result) {
                console.error(`Error launching game: ${result}`);
            }
        });
    }
    if (gameId === "game9") {
        const exePath = "D:\\launcher_games\\Zompiercer.v16.8t\\Zompiercer.v16.8t\\Zompiercer.exe";

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

rpc.login({ clientId: '1352974194811469964' }).catch(console.error);

//Discord Integration--------------------------------------------------------