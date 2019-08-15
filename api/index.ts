import express from 'express'
import users from './routes/users'

const app = express()

// Import API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

export default app
