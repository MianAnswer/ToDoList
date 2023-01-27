import app from './server'
import connectDB from './db'

app.listen(3000, () => {
  connectDB()
  console.log('Listening to http://localhost:3000')
})
