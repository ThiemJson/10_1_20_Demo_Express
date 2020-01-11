const express = require('express')
const app = express();
const port = 2000;

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(port,()=>{
    console.log(`Server listen on port `+port);
});

app.get('/users',(request,response)=>{
    response.render("users/index.pug",{
        users:[
            {id: 1, name: "Thiem"},
            {id: 2, name: "Chou"},
            {id: 3, name: "Thiem"},
            {id: 1, name: "Thiem"},
        ]
    });
});
