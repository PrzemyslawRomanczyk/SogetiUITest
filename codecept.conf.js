exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'http://localhost',
            show: true,
            windowSize: '1900x1048',
            chrome: {
                defaultViewport: {
                    width: 1920,
                    height: 1080
                },
                args: [
                    '--disable-gpu',
                    '--window-size=1900,1200',
                    '--disable-dev-shm-usage',
                    '--disable-setuid-sandbox',
                    '--no-sandbox'
                ]
            }
        },
        MyHelper: {
            require: "./myhelper_helper.js"
        }
    },
    include: {},
    bootstrap: null,
    mocha: {},
    name: 'test-challenge'
};