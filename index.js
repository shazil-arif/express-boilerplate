const express = require('express');
const router = require('./router');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
app.listen(3000,()=>console.log("Running"))