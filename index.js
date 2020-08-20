const express = require('express');
const app = express();
const port = 3050;
const MongoClient = require('mongodb').MongoClient;
let dbName = "portfolioDb",
    url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err);
    
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/project', function (req, res) {
    res.send('Here will be porfolio items')
});

