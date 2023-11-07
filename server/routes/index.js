const Router = require('express')
const router = new Router();
const deviceRouter=require('./deviceRoutes')
const typeRouter=require('./typeRoutes')
const userRouter=require('./userRoutes')
const brandRouter=require('./brandRoutes')
const basketRouter=require('./basketRoutes')



router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)
router.use('/basket',basketRouter)



module.exports = router