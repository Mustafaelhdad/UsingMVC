const path = require('path')
// installed using npm
const express = require('express')
// installed using npm
const bodyParser = require('body-parser')
const app = express()
// calling handlebars templating engine
const expressHbs = require('express-handlebars')

//using the engine of the handlebars
app.engine('hbs', expressHbs)
//telling that we use the pug templating
app.set('view engine', 'hbs')
//telling that we use the handlebars templating
// app.set('view engine', 'pug')
//where to find those files for templating
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const { use } = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: "Not Found Page!!" })
})

app.listen(3000)