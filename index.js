import cors from 'cors'
import express from 'express'
import { placesRouter } from './routes/placesRoute.js'

const app = express()
const PORT = 4441

app.use(cors())
app.use(express.json())

app.use('/places', placesRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
