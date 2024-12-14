const Vehicle=require('../models/VehicleModel')

exports.addVehicle= async(req,res )=>{
  const {name} = req.body;
  try {
    const nameExist = await Vehicle.find ({name: name});
    if (nameExist.length > 0)
      return res.status (401).json ({message: 'Vehicle Name Exist'});

    const newVehicle = new Vehicle ({
      name: name,
    });
    await newVehicle.save ();
    return res.status (200).json ({message: 'Vehicle Created'});
  } catch (error) {
    return res.status (500).json ({message: error});
  }
}

exports.changeVehicleStatus= async(req,res )=>{
  const {id,vehicleStatus}=req.body
    try {
      const vehicle = await Vehicle.findById({_id:id});
      vehicle.status=vehicleStatus
      vehicle.updatedAt = Date.now()
      await vehicle.save ()
      return res.status (200).json ({message:"Vehicle Status Updated"});
    } catch (error) {
      console.log(error)
      return res.status (500).json ({message:error});
    }
}



exports.getVehicles= async(req,res )=>{
  try{
      const vehicles=await Vehicle.find()
      res.status(200).json({vehicles})
  }
  catch(error){
      return res.status (500).json ({message: error});
  }
}