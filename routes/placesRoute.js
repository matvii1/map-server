import express from 'express'
import { placesService } from '../services/placesService.js'

export const placesRouter = express.Router()

placesRouter.get('/', placesService.getAll)
placesRouter.post('/', placesService.postOne)
