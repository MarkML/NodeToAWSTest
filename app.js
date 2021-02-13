const fs = require('fs');
const express = require('express')

/*
fs.readFile('./data/db.json',(err,data) => {
    if(err){ 
        throw err;
    } else {
        console.log(JSON.parse(data))
    }

})


//write data into the text file
fs.appendFile('./data/db.json','My text read file\n', (err) => {
    if(err){
        throw err;
    } else {
        console.log('Data was written successfully')
    }
})

*/

const app = express();
const port = 6500;

//define default route with express
app.get('/',(req,res) => {
    res.send('<h1>Welcome to my express server</h1>')

})

app.get('/getMovies',(req,res) => {
    fs.readFile('./data/db.json',(err,data) => {
        if(err){
            throw err;
        } else {
            res.send(JSON.parse(data));
        }
    })
})

//tell the server to listen on port
app.listen(port,(err) => {
    console.log(`server is running on ${port}`);
})

