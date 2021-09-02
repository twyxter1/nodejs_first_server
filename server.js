const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    console.log(request);
response.send('Hello World!')
});

app.get('/contact', (request, response)=>{
    console.log(request);
response.send('53401363')
});

app.get('*', (req, res)=>{
    res.send("404 not found");
});

app.listen(3000, function(){
    console.log("Server is running on 3000");
});