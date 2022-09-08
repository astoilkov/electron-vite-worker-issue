// cjs
// const electron = require('electron')
// esm
import electron from 'electron'

electron.clipboard
electron.nativeImage
electron.shell
electron.contextBridge
electron.crashReporter
// 🐞 will cause the Renderer to crash
// electron.ipcRenderer
electron.webFrame

// 🌱 works
electron.clipboard.writeText('worker electron -> ' + Date.now())
