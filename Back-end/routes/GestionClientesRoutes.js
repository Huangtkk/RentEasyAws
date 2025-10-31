const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

    router.post('/api/AddCliente', async (req, res) => {


        try{

            const { Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia, Correo, Telefono,Contrasena } = req.body;

           

       
            if (Cc.trim()=='' || Contrasena.trim()=='' || Telefono.trim()=='' || N_Licencia.trim()==''){
            
                return res.status(400).json('VERIFIQUE CAMPOS');
            }

            const TieneLetra= servicio.ValidarFormato(Cc,Telefono,N_Licencia);

            if (!TieneLetra.EsCorrecta){
            
                return res.status(400).json(TieneLetra.Mensaje);
            }

          
           
            const validarLongitud=servicio.VerificarLongitudes(Cc,Correo,Contrasena,Telefono,N_Licencia);
            console.log('hola');
        
            if (!validarLongitud.EsCorrecta){
    
                return res.status(400).json(validarLongitud.Mensaje);
            }

            const ExisteCliente= await servicio.BuscarCliente(Cc);

            if (ExisteCliente){
                return res.status(400).json('Ya Existe Este Cliente,Verifique');
            }


            const Disponible = "SI";
    
            const Answer = await servicio.addCliente(Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia, Disponible, Correo, Telefono,Contrasena)
    
            console.log(Answer);
    
            res.status(200).json(Answer);

        }catch(error){

            res.status(404).json(error)
        }
        

    })

    router.get('/api/getCliente', async (req, res) => {

        const Clientes = await servicio.getCliente();

        res.json(Clientes);
    })

    router.put('/api/UpdateCliente', async (req, res) => {

        const { Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contrasena,Cc} = req.body
        const Answer = await servicio.UpdateCliente(Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contrasena,Cc);
  
  
        res.json(Answer);
     })
  
  
     router.delete('/api/DeleteCliente/:CC', async (req, res) => {
  
        const { CC } = req.params
  
        const Answer = await servicio.DeleteCliente(CC);
  
        res.json(Answer);
     })


     router.post('/api/BuscarCliente', async (req, res) => {

        const {Cc} = req.body
        
  
        const Answer = await servicio.BuscarCliente(Cc);
  
        res.json(Answer);
       
     })


    return router;
}

