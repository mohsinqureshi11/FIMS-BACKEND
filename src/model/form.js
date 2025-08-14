import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const formSchema = new Schema({
    title: { type: String, required: true },
    fields: [{
        id: { type: String, required: true },
        type: { type: String, required: true },
        question: { type: String, required: true },
        options: [String],
        required: { type: Boolean, default: false },
        fileTypes: [String],
        maxFileSize: { type: Number, default: 5 }
    }],
    officerId: { type: Schema.Types.ObjectId, ref: 'FIMS_Officer' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const formModel = mongoose.model("FIMS_Form", formSchema);

export default formModel;
