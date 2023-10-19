import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    cost : {
        type: Number
    },
    startDate : {
        type: Date
    },
    endDate : {
        type: Date
    },
    status: {
        type: String
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;