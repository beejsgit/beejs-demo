const routes      = require('./routes')
const models      = require('./models')
const controllers = require('./controllers')
const middlewares = require('./middlewares')

module.exports = {
    name: "beeJS demo",
    version: 1.1,
    ports: process.env.PORT || 1987.443,
    routes: routes,
    models : models,
    controllers: controllers,
    middlewares: middlewares,
    databases: {
        default: {
            type: 'mysql',
            name: 'db-name',
            user: 'user',
            pass: 'password',
            host: 'host.beejs.org'
        }
    },
    jwt: {
        secret: "my-secret-key"
    }
}