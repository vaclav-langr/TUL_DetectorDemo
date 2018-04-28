const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Electron-tutorial-app-win32-ia32/'),
    authors: 'Václav Langr',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'TUL_DP.exe',
    setupExe: 'TUL_DP_Installer.exe'
  })
}