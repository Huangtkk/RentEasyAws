const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddTipoVehiculo', async (req, res) => {


      try {

         const { Nombre, Disponible } = req.body;

         if (Nombre.trim() == '') {

            return res.status(400).json('VERIFIQUE CAMPOS');

         }

         const validarLongitud = servicio.VerificarLongitudes(Nombre);

         if (!validarLongitud.EsCorrecta) {

            return res.status(400).json(validarLongitud.Mensaje);
         }
         
         const Answer = await servicio.addTipoVehiculo(Nombre, Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getTipoVehiculo', async (req, res) => {

      const TipoVehiculo = await servicio.getTipoVehiculo();

      res.json(TipoVehiculo);
   })


   router.put('/api/UpdateTipoVehiculo', async (req, res) => {

      const { Id, Nombre } = req.body

      const Answer = await servicio.UpdateTipoVehiculo(Id, Nombre);


      res.json(Answer);
   })


   router.delete('/api/DeleteTipoVehiculo/:Id', async (req, res) => {

      const { Id } = req.params;

      const Answer = await servicio.DeleleTipoVehiculo(Id);

      res.json(Answer);
   })

   return router;
}

