const express = require('express')
const app = express();
const port = 2000;

app.set('views', './views');
app.set('view engine', 'pug');


users = [
    {q: 1, name: "Thiem"},
    {q: 1, name: "thiem"},
    {q: 2, name: "nyChou"},
    {q: 3, name: "nyThiem"},
]
app.listen(port,()=>{
    console.log(`Server listen on port `+port);
});

app.get('/users/search',(request,response)=>{
    let q = request.query.q;
    let matchedUsers = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    response.render("users/index.pug",{
        users: matchedUsers
    })
    //let inputUsers = document.getElementById("input-users");
    console.log(q);
});

app.get('/users',(request,response)=>{
    response.render("users/index.pug",{
        users: users
    });
});
