const merge = require('deepmerge')
const wdioConf = require('./wdio.conf')

exports.config = merge(wdioConf.config, {
    // =============================================================
    // To run on browser stack, use this settings
    hostname: "hub-cloud.browserstack.com",

    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    //
    // If you run your tests on SauceLabs you can specify the region you want to run your tests
    // in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
    // These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
    // If you don't provide the region it will default for the `us`

    capabilities: [{
        'browserName': 'Chrome',
        'browser_version': '79.0 beta',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1280x1024',
        'browserstack.user' : 'paololagrito1',
        'browserstack.key' : 'sKGF87UzbqdDceQAp3zr',
        'name': 'Windows - Chrome 79 beta'
       
    },
    // {
    //     'browserName': 'iPhone',
    //     'device': 'iPhone X',
    //     'realMobile': 'true',
    //     'os_version': '11',
    //     'browserstack.user' : 'paololagrito1',
    //     'browserstack.key' : 'sKGF87UzbqdDceQAp3zr',
    //     'name': 'iPhone X'
    // },
    // {
    //     'browserName': 'android',
    //     'device': 'Samsung Galaxy S9 Plus',
    //     'realMobile': 'true',
    //     'os_version': '9.0',
    //     'browserstack.user' : 'paololagrito1',
    //     'browserstack.key' : 'sKGF87UzbqdDceQAp3zr',
    //     'name': 'Samsung Galaxy S9 Plus'
         
    // }]
]
}); 