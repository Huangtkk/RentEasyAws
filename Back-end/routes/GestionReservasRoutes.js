const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddReserva', async (req, res) => {


      try {

         const { Fecha_Inicio, Fecha_Final,Cc_Cliente,Placa_Vehiculo,Disponible } = req.body;

         const Answer = await servicio.addReserva(Fecha_Inicio, Fecha_Final,Cc_Cliente,Placa_Vehiculo,Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getReserva', async (req, res) => {

      const Reservas = await servicio.getReserva();

      res.json(Reservas);
   })


   router.put('/api/UpdateReserva', async (req, res) => {

      const { Id,Fecha_Inicio, Fecha_Final,Cc_Cliente } = req.body

      const Answer = await servicio.UpdateReserva(Id,Fecha_Inicio, Fecha_Final,Cc_Cliente);


      res.json(Answer);
   })


   router.delete('/api/DeleteReserva/:Id', async (req, res) => {

      const { Id } = req.params

      const Answer = await servicio.DeleteReserva(Id);

      res.json(Answer);
   })

   return router;
}

