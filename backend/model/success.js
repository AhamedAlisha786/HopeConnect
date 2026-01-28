const mongoose = require("mongoose");

const SuccessSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    relatedNeed:{
        type:String,
        required:true,
    },
    story:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
},{timestamps:true}
) 

module.exports = mongoose.model("Success", SuccessSchema);