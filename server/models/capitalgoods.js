const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');




var capitalgoods = new mongoose.Schema({
   

    energy: {
        type: String,
        required: true,
       
    },
    employeename: {
        type: String,
        required: true,
        
    }
    ,
   
    code3: {
        type: String,
        required: true,
        
    }
    ,facility3: {
        type: String,
        required: true,
        
    },vehicle2: {
        type: String,
        required: true,
        
    },
    transport2: {
        type: String,
        required: true,
        
    },quantity2: {
        type: String,
        required: true,
        
    },employeecode: {
        type: String,
        required: true,
        
    },facility2: {
        type: String,
        required: true,
        
    },
    code2: {
        type: String,
        required: true,
       
    },
    facility2: {
        type: String,
        required: true,
        
    }
    ,
   
    quantity: {
        type: String,
        required: true,
        
    }
    ,material: {
        type: String,
        required: true,
        
    },distance: {
        type: String,
        required: true,
        
    },
    vehicle: {
        type: String,
        required: true,
        
    },transport: {
        type: String,
        required: true,
        
    },facility: {
        type: String,
        required: true,
        
    },byerlocation: {
        type: String,
        required: true,
        
    },byername: {
        type: String,
        required: true,
        
    },code: {
        type: String,
        required: true,
        
    }
});
capitalgoods.plugin(timestamps);


// createing model
const capitaldb = new mongoose.model("capitalgoods", capitalgoods);

module.exports = capitaldb;