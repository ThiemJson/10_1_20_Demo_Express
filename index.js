const express = require('express')
const app = express();
const port = 2000;

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(port,()=>{
    console.log(`Server listen on port `+port);
});

app.get('/',(request,response)=>{
    response.send("Hellooooo somethhhing");
});

app.get('/users',(request,response)=>{
    response.send("dasdasd");
});