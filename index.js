const {app, BrowserWindow, Menu} = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        
        icon: __dirname + '/doge.png'
    });

    

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
    {
        label: 'Bem-vindo!',
        label: 'Autores',
        submenu: [
            {
                label: 'Daniel Lopes'
            },
            {
                label: 'Samuel Gadoni'
            },
            {
                label: 'Filipe Davi'
            }
        ],
    }
];
