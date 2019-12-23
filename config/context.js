const config = require('config-yml')

class Context {

    constructor() {
        this.config = config
    }

    get testrail() {
        return config.testrail
    }
}

var context = new Context()

module.exports = {
    "testrail": context.testrail,
    "env": context.env
}