const express=require('express')

const VehicleRoute=require('./VehicleRoute')
const router=express.Router()

router.use('/vehicle',VehicleRoute)

module.exports=router