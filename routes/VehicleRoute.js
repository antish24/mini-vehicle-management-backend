const express=require('express')
const router=express.Router()
const VehicleController=require('../controller/VehicleController')

router.post('/add',VehicleController.addVehicle)
router.get('/all',VehicleController.getVehicles)
router.post('/update',VehicleController.changeVehicleStatus)

module.exports=router
