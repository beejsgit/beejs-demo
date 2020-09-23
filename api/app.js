const bee     = require('bee-backend')
const configs = require('./configs')

const app = bee.create(configs)

app.use('/api', configs.routes)

bee.start(app)