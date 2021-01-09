const path = require('path')
// installed using npm
const express = require('express')
// installed using npm
const bodyParser = require('body-parser')
const app = express()

//telling that we use the pug templating
app.set('view engine', 'pug')
//where to find those files for templating
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

app.listen(3000)