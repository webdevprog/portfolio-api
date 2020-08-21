import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String
},
    { timestamps: true }
);

const Project = mongoose.model('project', schema);

export default Project