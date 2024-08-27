// ************ Require's ************
const express = require("express"); //para requerir express
const path = require("path"); 
const methodOverride = require('method-override');   //para requerir path (para hacer un ruteo mas sencillo para express)
const port = process.env.PORT || 3111;  //para hacer el deploy

// ************ express()************
const app = express();  //ejecuto express

// ************ Middlewares ************
app.use(express.static(path.resolve(__dirname, "../public")));// uso de la carpeta public
app.use(express.urlencoded({extended: false})) //toma los datos del body
app.use(express.json()) //analiza si es JSON y lo convierte a objeto de JS
app.use(methodOverride("_method")) //Para poder usar los métodos PUT y DELETE

// ************ Template Engine  ************
app.set('view engine', 'ejs'); // configuramos ejs como motor de plantilla 
app.set('views', './src/views') // indicamos a express que los archivos ejs por defecto los debe buscar en la carpeta src-views 

// ************ Route System  ************
const mainRoutes = require('./routes/mainRoutes.js')

app.use("/", mainRoutes);

// ************ Server  ************
app.listen (port, () => console.log("Servidor corriendo en puerto " + `${port}`)); //levanto el servidor y lo pongo a escuchar

