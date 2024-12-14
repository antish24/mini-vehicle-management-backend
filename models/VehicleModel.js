const mongoose = require ('mongoose');

const vehicleSchema = mongoose.Schema ({
  name: {type: String, required: true,unique:true},
  status: {
    type: String,
    enum: ['Active', 'Under Maintenance', 'Retired'],
    default: 'Active',
  },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: null},
});

const Vehicle = mongoose.model ('Vehicle', vehicleSchema);
module.exports = Vehicle;
