const express = require('express')
const sequelize = require('./util/database') // Twoje połączenie
const Post = require('./models/post') // Importujesz JUŻ ZDEFINIOWANY model
require('./models/postTranslation')
const bodyParser = require('body-parser')

const blogRoutes = require('./routes/blog')
const blogController = require('./controllers/blog')

const app = express()

// ... reszta middleware (express.json() itp.)

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.append('Access-Control-Allow-Headers', '*')
  next()
})

app.use('/blog', blogRoutes)
app.get('/api/v1/posts', blogController.getPosts)

sequelize
  .sync()
  .then(() => {
    console.log('Baza zsynchronizowana!')
    app.listen(9090)
  })
  .catch((err) => console.log('Błąd synchronizacji:', err))
