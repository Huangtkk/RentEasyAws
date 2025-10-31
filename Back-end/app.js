const express = require("express"); 
const cors=require('cors') 
const path=require('path');
const DB = require('./db');
const morgan=require("morgan");
require('dotenv').config() 

const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };
 

const app = express() 
app.disable('x-powered-by');
app.set('x-powered-by', false);


app.use(cors());


const ControllerMarcas=require('./Controllers/GestionMarca');
const ControllerClientes=require('./Controllers/GestionCliente');
const ControllerTipoVehiculo=require('./Controllers/GestionTipoVehiculo');
const ControllerTarifas=require('./Controllers/GestionTarifa');
const ControllerVehiculo=require('./Controllers/GestionVehiculo');
const ControllerReserva=require('./Controllers/GestionReserva');
const ControllerEmpleado=require('./Controllers/GestionEmpleado');
const ControllerCargo=require('./Controllers/GestionCargos');
const ControllerAlquiler=require('./Controllers/GestionAlquiler');






const serviciomarcaI=new ControllerMarcas(DB);
const ServicioClienteI=new ControllerClientes(DB);
const servicioTipoVehiculoI=new ControllerTipoVehiculo(DB);
const servicioTarifaI=new ControllerTarifas(DB);
const servicioVehiculoI=new ControllerVehiculo(DB);
const servicioReservaI=new ControllerReserva(DB);
const servicioEmpleadoI=new ControllerEmpleado(DB);
const servicioAlquilerI=new ControllerAlquiler(DB);
const servicioCargoI=new ControllerCargo(DB);



const MarcasRoutes= require('./routes/GestionMarcasRoutes')(serviciomarcaI); 
const ClienteRoutes=require('./routes/GestionClientesRoutes')(ServicioClienteI);
const TipoVehiculoRoutes=require('./routes/GestionTipoVehiculoRoutes')(servicioTipoVehiculoI);
const TarifasRoutes=require('./routes/GestionTarifasRoutes')(servicioTarifaI);
const VehiculoRoutes=require('./routes/GestionVehiculosRoutes')(servicioVehiculoI);
const ReservaRoutes=require('./routes/GestionReservasRoutes')(servicioReservaI);
const EmpleadoRoutes=require('./routes/GestionEmpleadosRoutes')(servicioEmpleadoI);
const AlquilerRoutes=require('./routes/GestionAlquileresRoutes')(servicioAlquilerI);
const CargoRoutes=require('./routes/GestionCargosRoutes')(servicioCargoI);




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));




app.use(express.json({ limit: '5mb' })); 
app.use(express.text());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use('/public',express.static(path.join(__dirname,'public')));  



app.use(MarcasRoutes);
app.use(ClienteRoutes);
app.use(TipoVehiculoRoutes);
app.use(TarifasRoutes);
app.use(VehiculoRoutes);
app.use(ReservaRoutes);
app.use(EmpleadoRoutes);
app.use(AlquilerRoutes);
app.use(CargoRoutes);


app.use(express.static('public'));


app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina'
    );
});

 

app.listen(process.env.PORT, () => {
    console.log(`Aplicacion en linea Puerto : ${process.env.PORT}`)
});


