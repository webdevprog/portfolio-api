
import mongoose from 'mongoose';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/admin/project/', require('./routers/project.routers.js'));

const port = 5000;
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
