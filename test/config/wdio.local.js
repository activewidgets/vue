exports.config = {

    //
    // running chromedriver on port 9515
    //

    port: 9515,
    path: '/',
    specs: ['./test/e2e/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
            args: ['headless', 'disable-gpu']
        }
    }],

    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './test/screenshots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'static-server'],

    staticServerPort: 4567,
    staticServerFolders: [
        { mount: '/storybook', path: './out/storybook' }
    ],

    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000,
        expectationResultHandler: function(passed, assertion) {}
    },

    before: function (capabilities, specs) {
        global.storybook = function(name){
            return 'http://localhost:4567/storybook/iframe.html?selectedKind=Tests&selectedStory=' + name;
        };
    }
}
