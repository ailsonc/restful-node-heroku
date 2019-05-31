const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      routes = require('./routes/routes.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

const PORT =  process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Servidor porta: '+ PORT);
});