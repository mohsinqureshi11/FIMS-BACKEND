//structure banayege api ka 

import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const officerSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    gander: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    desigination: { type: String, required: true },
    profilePhoto: { type: String, required: false, default: "" }
}, {
    timestamps: true // This adds createdAt and updatedAt fields
});

const officerModel = mongoose.model("FIMS_Officer", officerSchema);

export default officerModel;