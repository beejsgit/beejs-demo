const bee         = require('bee-backend')
const controllers = require('../controllers')
const router      = bee.router()
const route       = bee.route
const freeRoute   = bee.freeRoute

// users
router.get('/user/:id', route, controllers.users.find)
router.put('/user/:id', route, controllers.users.put)
router.get('/users', route, controllers.users.get)
router.post('/users', route, controllers.users.post)
router.delete('/users', route, controllers.users.delete)
router.delete('/user/logout', route, controllers.users.handleLogout)

// users - freRoute
router.post('/user/login', freeRoute, controllers.users.handleLogin)

module.exports = router