import express from 'express'

const app = express();
const port:number = 3000;

app.get('/', function(request, response) {
    response.send('hello')
})

app.listen(port, () =>{
 console.log('http://localhost:' +port)
})