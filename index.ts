import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.on('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 600,
        height: 400
    });

    win.loadFile(`${__dirname}/views/index.html`);
});