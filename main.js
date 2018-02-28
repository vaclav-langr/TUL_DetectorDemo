const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

process.env.NODE_ENV = 'development'

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
]

let mainWindow, testingWindow, devSettingsWindow, userSettingsWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 400, height: 600})

  mainWindow.setAlwaysOnTop(true, "normal");
  mainWindow.setMinimizable(false);
  //mainWindow.setResizable(false)
  electron.Menu.setApplicationMenu(electron.Menu.buildFromTemplate(template))

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    devSettingsWindow != null ? devSettingsWindow.close() : devSettingsWindow = null;
    testingWindow != null ? testingWindow.close() : testingWindow = null;
    userSettingsWindow != null ? userSettingsWindow.close() : userSettingsWindow = null;
    mainWindow = null
  })

  testPersistentConfig();
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})


if(process.platform == 'darwin'){
  template.unshift({});
}

if(process.env.NODE_ENV !== 'production') {
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

function testPersistentConfig() {
  var store_1 = require('electron-store');
  var store = new store_1();

  if(store.size == 0) {
    store.set("sampleRate", 16000);
    store.set("bitDepth", 16);
    store.set("segmenter.windowSize", 400);
    store.set("segmenter.overlap", 160);
    store.set("melfbank.noiseCoefsLower", -1);
    store.set("melfbank.noiseCoefsHigher", 1);
    store.set("melfbank.useRange", true);
    store.set("melfbank.preemCoef", 0.97);
    store.set("melfbank.lowFrequency", 0);
    store.set("melfbank.highFrequency", 8000);
    store.set("melfbank.channels", 39);
    store.set("melfbank.minValue", 1.0);
    store.set("melfbank.returnValue", 0.0);
    store.set("normalizer.size", 51);
    store.set("normalizer.position", 25);
    store.set("sequencer.size", 51);
    store.set("sequencer.position", 25);
    store.set("neurotizer.nnetPath", '');
    store.set("neurotizer.activations", ['Tanh','Tanh','Tanh','Tanh','Tanh','Tanh','Tanh']);
    store.set("transformator.mean.path", "");
    store.set("transformator.mean.operation", "sub");
    store.set("transformator.std.path", "");
    store.set("transformator.std.operation", "div");
    store.set("nanogrid.domain", "");
    store.set("nanogrid.username", "");
    store.set("nanogrid.password", "");
    store.set("nanogrid.access_token", "");
    store.set("nanogrid.ntx_token", "");
    store.set("fsm.threshold", 0.5);
  }
}