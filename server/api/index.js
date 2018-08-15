// api router will mount other routers
module.exports = (app) => {
  app.get('/', (req, res) => { res.send('hello world')});   // localhost:3000
  app.use('/users', require('./user/user.routes'));
}
