const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

const path = require('path');
const url = require('url');
const config_1 = require('./config')

let template = [
    {
        label: "Soubor",
        submenu: [
            {
                label: 'Nastavení',
                click: () => createSettingsWindow()
            },
            {
                label: 'Zavřít',
                accelerator: process.platform === 'darwin' ? "Command+Q" : "Ctrl+Q",
                click: () => app.quit()
            },
            {
                label: 'Development tools',
                accelerator: process === 'darwin' ? 'Command+I' : 'Ctrl+I',
                click: (item, focusedWindow) => focusedWindow.toggleDevTools()
            }
        ]
    }
];

let mainWindow, testingWindow, devSettingsWindow, userSettingsWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 400, height: 600});

    mainWindow.setAlwaysOnTop(true, "normal");
    mainWindow.setMinimizable(false);
    electron.Menu.setApplicationMenu(electron.Menu.buildFromTemplate(template));

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        devSettingsWindow != null ? devSettingsWindow.close() : devSettingsWindow = null;
        testingWindow != null ? testingWindow.close() : testingWindow = null;
        userSettingsWindow != null ? userSettingsWindow.close() : userSettingsWindow = null;
        mainWindow = null;
    });

    testPersistentConfig();
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});


if (process.platform == 'darwin') {
    template.unshift({});
}

if (config_1.isDev()) {
    template.push({
        label: 'Development',
        submenu: [
            {
                label: 'Nastavení',
                click: () => createDevSettingsWindow()
            },
            {
                label: 'Development tools',
                accelerator: process === 'darwin' ? 'Command+I' : 'Ctrl+I',
                click: (item, focusedWindow) => focusedWindow.toggleDevTools()
            },
            {
                label: 'Refresh',
                accelerator: process === 'darwin' ? 'Command+R' : 'Ctrl+R',
                click: (item, focusedWindow) => focusedWindow.reload()
            },
            {
                label: 'Testing',
                click: () => createTestingWindow()
            }
        ]
    })
}

function createSettingsWindow() {
    userSettingsWindow = new BrowserWindow(
        {
            width: 800,
            height: 600
        }
    )
    userSettingsWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'userSettings.html'),
        protocol: 'file:',
        slashes: true
    }))
    userSettingsWindow.on("close", function () {
        userSettingsWindow = null
    })
}

function createDevSettingsWindow() {
    devSettingsWindow = new BrowserWindow(
        {
            width: 800,
            height: 600
        }
    )
    devSettingsWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'devSettings.html'),
        protocol: 'file:',
        slashes: true
    }))
    devSettingsWindow.on("close", function () {
        devSettingsWindow = null
    })
}

function createTestingWindow() {
    testingWindow = new BrowserWindow(
        {
            width: 800,
            height: 600
        }
    )
    testingWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'testing.html'),
        protocol: 'file:',
        slashes: true
    }))
    testingWindow.on("close", function () {
        testingWindow = null
    })
}

ipcMain.on('user:login', function (e) {
    mainWindow.webContents.send('user:login-main');
});

function testPersistentConfig() {
    var store_1 = require('electron-store');
    var store = new store_1();
    var config = config_1.config;

    if (store.size == 0) {
        config.sampleRate.set(16000);
        config.bitDepth.set(16);
        config.segmenter.windowSize.set(400);
        config.segmenter.overlap.set(160);
        config.melfbank.noiseCoefs.set([-1, 1]);
        config.melfbank.useRange.set(true);
        config.melfbank.preemCoef.set(0.97);
        config.melfbank.lowFrequency.set(0);
        config.melfbank.highFrequency.set(8000);
        config.melfbank.channels.set(39);
        config.melfbank.minValue.set(1.0);
        config.melfbank.returnValue.set(0.0);
        config.normalizer.size.set(51);
        config.normalizer.position.set(25);
        config.sequencer.size.set(51);
        config.sequencer.position.set(25);
        config.neurotizer.activations.set(['Tanh', 'Tanh', 'Tanh', 'Tanh', 'Tanh', 'Tanh', 'Tanh']);
        config.nanogrid.domain.set("");
        config.nanogrid.username.set("");
        config.nanogrid.password.set("");
        config.nanogrid.access_token.set("");
        config.nanogrid.ntx_token.set("");
        config.fsm.threshold.set(0.5);
    }
}