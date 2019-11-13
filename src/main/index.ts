import {app, BrowserWindow} from 'electron';
import electronDebug from 'electron-debug';

console.log('main process', __dirname);

electronDebug();

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      // Allow to invoke node side packages
      nodeIntegration: true,
    },
  });
  // const rendererUrl = 'file://' + __dirname + '/renderer/index.html';
  const rendererUrl = 'http://localhost:8080/index.html';
  console.log('rendererUrl', rendererUrl);
  mainWindow.loadURL(rendererUrl);
});
