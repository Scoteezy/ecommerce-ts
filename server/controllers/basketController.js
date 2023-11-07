const {Basket,BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req,res){
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
}

module.exports = new BasketController();