const mongoose = require("mongoose");

const needsSchema = new mongoose.Schema({
     title: "",
    description: "",
    category: "",
    urgency: "",
    targetAmount: "",
    imageUrl: "",
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    urgency:{
        type:String,
        required:true
    },
    targetAmount:{
        type:Number, 
    },
    imageUrl:{
        type:String
    }
},{timestamps:true}
)

module.exports = mongoose.model("Needs",needsSchema)