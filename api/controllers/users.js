const bee   = require('bee-backend')
const model = 'users'
const pk    = 'IDUser'

module.exports.users = {

        find : async function(req, res) {
            let id  = req.params.id
            let rel = req.query.rel

            res = await bee.hive(req, res, model).relations(rel).find(id)
            
            res.response()
        },

        get : async function(req, res) {
            let rel = req.query.rel

            res = await bee.hive(req, res, model).relations(rel).get()

            res.response()
        },
        
        post : async function(req, res) {
            let data = req.body
            
            res = await bee.hive(req, res, model).insert(data)

            res.response()
        },
        
        put : async function(req, res) {
            let data = req.body
            let id   = req.params.id
            
            res = await bee.hive(req, res, model).update(data, id)
            
            res.response()
        },
        
        delete : async function(req, res) {
            let id = req.params.id
            
            res = await bee.hive(req, res, model).delete(id)
            
            res.response()
        },

        handleLogout : async function(req, res) {

            res.response(null, 'LOGOUT')
        },

        handleLogin: async function(req, res) {
            let email    = req.body.Email
            let password = bee.tools.md5(req.body.Password)

            res = await bee
                        .hive(req, res, model)
                        .where(`Email = ? AND Password = ?`)
                        .binds(email, password)
                        .find()
                        .then(bee => bee.token('jwt').createToken(bee.data))

            res.counters.users
                ? res.response()
                : res.responseError('INVALID_AUTHENTICATION', 403)
        }
}