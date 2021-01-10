const path = require('path')
// installed using npm
const express = require('express')
// installed using npm
const bodyParser = require('body-parser')
const app = express()
// calling handlebars templating engine
// const expressHbs = require('express-handlebars')

//using the engine of the handlebars
// app.engine('hbs', expressHbs({
//   extname: '.hbs',
//   defaultLayout: 'main',
// }))
//telling that we use the pug templating
app.set('view engine', 'ejs')
//telling that we use the handlebars templating
// app.set('view engine', 'pug')
//where to find those files for templating
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000)