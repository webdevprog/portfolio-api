import mongoose from 'mongoose';
const Schema = mongoose.Schema;

 const schema = new Schema({
    title: { type: String, required: true },
    description: String,
    photos:[String],
    stack: [String],
    links: [{
        github: String,
        livePreview: String,
    }]
},
    { timestamps: true }
);

const ProjectModel = mongoose.model('project', schema);

export default ProjectModel;