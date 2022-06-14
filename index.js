const express = require('express');
const app = express();
const config = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use('/api/', apiRouter);




app.listen(config.port,function(){
    console.log('serwer slsssucha' + config.port);
});
