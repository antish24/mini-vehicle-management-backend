const express=require('express')
const router=express.Router()
const VehicleController=require('../controller/VehicleController')

router.get('/add',VehicleController.addVehicle)
router.get('/all',VehicleController.getVehicles)
router.get('/update',VehicleController.changeVehicleStatus)

module.exports=router
