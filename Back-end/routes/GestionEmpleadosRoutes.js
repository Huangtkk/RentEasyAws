const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddEmpleado', async (req, res) => {


      try {


         const { Correo, Clave, Id_Cargo, Disponible } = req.body;

         if (Correo.trim() == '' || Clave.trim() == '' || Id_Cargo <= 0) {
            return res.status(400).json('VERIFIQUE CAMPOS');
         }

         const clienteExistente = await servicio.BuscarEmpleado(Correo, Clave);

         if (typeof clienteExistente === 'string' && (clienteExistente === 'EN' || clienteExistente === 'EA')) {
            return res.status(400).json('EMPLEADO YA REGISTRADO');
         }

         const validarLongitud = servicio.VerificarLongitudes(Clave);

         if (!validarLongitud.EsCorrecta) {
            return res.status(400).json(validarLongitud.Mensaje);
         }



         
         const Answer = await servicio.addEmpleado(Correo, Clave, Id_Cargo, Disponible)

         

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getEmpleado', async (req, res) => {

      const Empleado = await servicio.getEmpleado();

      res.json(Empleado);
   })


   router.put('/api/UpdateEmpleado', async (req, res) => {

      const { Correo, Clave, Id } = req.body

      const Answer = await servicio.UpdateEmpleado(Correo, Clave, Id);


      res.json(Answer);
   })


   router.delete('/api/DeleteEmpleado/:Id', async (req, res) => {

      const { Id } = req.params
      
      const Answer = await servicio.DeleteEmpleado(Id);

      res.json(Answer);
   })

   router.post('/api/BuscarEmpleado', async (req, res) => {

      const { Correo, Clave } = req.body

      

      const Answer = await servicio.BuscarEmpleado(Correo, Clave);

      res.json(Answer);
   })

   return router;
}


