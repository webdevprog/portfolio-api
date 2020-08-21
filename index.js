
const express = require('express');
const app = express();
const port = 3050;
const bodyParser = require('body-parser');
import mongoose from 'mongoose';
import Project from './model/project';
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/project', (req, res) => {
    Project.find({}, function (err, project) {
        res.send(project);
    });
});

app.get('/project/:projectID', (req, res) => {
    Project.find({_id: req.params.projectID}, function (err, project) {
        if (!err) {
            res.send(project);
        } else {
            res.status(400).send('Bad Request')
        }
    });
});

app.post('/project', (req, res) => {
    let data = req.body;

    const project = new Project({
        title: data.title,
        description: data.description
    });

    project.save().then(() => {
        res.status(200).send('Send Data');
    });
});


async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/portfolioDb',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            });
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
