const {Basket,BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req,res){
        console.log('Request Body:', req.body)
        const {deviceId} = req.body
        const {basketId} = req.body
        const basket = await BasketDevice.create({deviceId,basketId})
        return res.json(basket)
    }
    async getAll(req,res){
        const basket = await BasketDevice.findAll()
        return res.json(basket);
    }
    async getOne(req,res){
        const {id} = req.params
        const basket = await Basket.findOne({
            where:{id}
        })
        return res.json(basket);
    }
    async delete(req, res) {
        try {
          const { basketId, deviceId } = req.body;
      
          // Delete the record
          const deletedRecordCount = await BasketDevice.destroy({
            where: {
              basketId: basketId,
              deviceId: deviceId,
            },
            limit: 1,
          });
      
          if (deletedRecordCount === 0) {
            return res.status(404).json({ error: 'Record not found' });
          }
      
          // Fetch all remaining records
          const basket = await BasketDevice.findAll();
      
          // Send the updated basket as a response
          return res.json(basket);
        } catch (error) {
          console.error('Error deleting record:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    }
module.exports = new BasketController();