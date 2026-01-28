const mongoose = require("mongoose");

const donarSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"donor"
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Donar",donarSchema);
