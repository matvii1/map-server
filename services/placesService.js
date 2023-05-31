import { CustomError } from '../error/error.js'
import { Place } from '../models/placeModel.js'

export const placesService = {
  getAll: async (req, res) => {
    try {
      const places = await Place.findAll()

      res.send(places)
    } catch (error) {
      res.send(new CustomError('Something went wrong'))
    }
  },
  postOne: async (req, res) => {
    try {
      await Place.create(req.body)

      res.status(201)
      res.send({
        created: 'true',
      })
    } catch (error) {
      console.log(error)
      res.send(new CustomError('Something went wrong'))
    }
  },
  deleteOne: async (req, res) => {
    try {
      const { id } = req.params

      console.log(id);
      
      await Place.destroy({
        where: {
          id,
        },
      })

      res.status(200)
      res.send()
    } catch (error) {
      console.log(error)
      res.send(new CustomError('Something went wrong'))
    }
  },
}
