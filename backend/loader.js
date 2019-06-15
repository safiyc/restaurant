const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Backend is running on ${port}`);
});

app.use(function(req, res, next){
    res.send('Working');
    next();
});


