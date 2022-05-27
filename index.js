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
        label: 'Bem-vindo!'
    },
    {
        label: 'Autores',
        submenu: [
            {
                label: 'Daniel Lopes'
            },
            {
                label: 'Filipe Davi'
            },
            {
                label: 'Samuel Gadoni'
            },
            {
                label: 'Luís Fernando'
            }
        ]
    },
    {
        label: 'Participantes', 
        submenu: [
            {
                label: 'Sidão ao ministrar as aulas de termologia'
            },
            {
                label: 'Documentação do Electron'
            },
            {
                label: 'Documentação do JavaScript'
            },
            {
                label: 'Caderno de rascunho do Mário'
            }
        ],
    }
];
