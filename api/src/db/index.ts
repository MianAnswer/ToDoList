import mongoose from 'mongoose'

const db = mongoose.connection

db.on('connecting', () => {
  console.log('connecting')
})
db.on('connected', () => {
  console.log('connected')
})
db.on('open', () => {
  console.log('open')
})
db.on('disconneted', () => {
  console.log('disconnected')
})
db.on('close', () => {
  console.log('close')
})
db.on('reconnected', () => {
  console.log('reconnected')
})
db.on('error', (error) => {
  console.log(error)
})
db.on('fullsetup', () => {
  console.log('fullsetup')
})
db.on('all', () => {
  console.log('all')
})

export default function connectDB() {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.lauobkk.mongodb.net/test')
  return db
}
