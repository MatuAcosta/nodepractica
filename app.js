const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const port = process.env.PORT || 3000;
app.use(express.static(__dirname+'/public'));

//motor de plantilla ejs para poder manejar el html dinamico.
app.set('view engine', 'ejs');
//debemos decirle a express la ruta de las vistas
app.set('views',__dirname+'/views')

app.use('/empleados',require('./routes/emp-route'))


app.listen(port,()=>{
    console.log('Express')
})