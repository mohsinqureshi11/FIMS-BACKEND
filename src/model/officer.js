//structure banayege api ka 

import mongoose, { Schema } from "mongoose";
import { type } from "os";

const schema = mongoose.Schema;

const officerSchema = new Schema({
    userName:{type:String , require:true},
    email:{type:String , require:true},
    gander:{type:String , require:true},
    age:{type:Number , require:true},
    phoneNumber:{type:Number, require:true},
    desigination:{type:String, require:true},
    profilePhoto:{type:String, require:true}
})

const officerModel = mongoose.model("FIMS_Officer",officerSchema);

export default officerModel;