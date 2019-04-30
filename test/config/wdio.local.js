
exports.config = {

    //
    // running chromedriver on port 9515
    //

    runner: 'local',
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

    sync: false,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './test/screenshots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'jasmine',
    reporters: ['spec'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000,
        expectationResultHandler: function(passed, assertion) {}
    },


    onPrepare: function (config, capabilities) {
        var express = require('express'), app = express();
        app.use('/storybook', express.static('./out/storybook'));
        app.listen(4567);
    },


    before: function (capabilities, specs) {
        global.storybook = function(name){
            return 'http://localhost:4567/storybook/iframe.html?id=tests--' + name;
        };
    }
}
