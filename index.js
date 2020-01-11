const express = require('express')
const app = express();
const port = 2000;

app.set('views', './views');
app.set('view engine', 'pug');


users = [
    {id: 1, name: "Thiem"},
    {id: 2, name: "Chou"},
    {id: 3, name: "Thiem"},
    {id: 1, name: "Thiem"},
]
app.listen(port,()=>{
    console.log(`Server listen on port `+port);
});

app.get('/users/search',(request,response)=>{
    console.log(request.query);
});

app.get('/users',(request,response)=>{
    response.render("users/index.pug",{
        users: users
    });
});
