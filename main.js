const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

if (winEvents()) {
    return;
}

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

    setPath();
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

function setPath() {
    let config = config_1.config;
    config.appPath.set(app.getAppPath());
}

function winEvents() {
    if (process.argv.length === 1) {
        return false;
    }
    const ChildProcess = require('child_process');
    const path = require('path');
    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    const exeName = path.basename(process.execPath);
    const spawn = function(command, args) {
        let spawnedProcess, error;
        try {
            spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
        } catch (error) {}

        return spawnedProcess;
    };
    const spawnUpdate = function(args) {
        return spawn(updateDotExe, args);
    };
    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            spawnUpdate(['--createShortcut', exeName]);
            setTimeout(app.quit, 1000);
            return true;
        case '--squirrel-uninstall':
            spawnUpdate(['--removeShortcut', exeName]);
            setTimeout(app.quit, 100);
            return true;
        case '--squirrel-obsolete':
            app.quit();
            return true;
    }
}