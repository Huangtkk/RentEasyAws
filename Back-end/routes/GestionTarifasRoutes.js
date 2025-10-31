const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddTarifa', async (req, res) => {


      try {

         const { Nombre, Precio,ValorDia,Disponible } = req.body;

         if (Nombre.trim()=='' || Precio==0 || ValorDia==0){
           
            return res.status(400).json('VERIFIQUE CAMPOS');
         }

         const Answer = await servicio.addTarifa(Nombre,Precio,ValorDia, Disponible)

         console.log(Answer);

         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getTarifa', async (req, res) => {

      const Tarifas = await servicio.getTarifa();

      res.json(Tarifas);
   })


   router.put('/api/UpdateTarifa', async (req, res) => {

      const { Id,Nombre, Precio,ValorDia } = req.body

      const Answer = await servicio.UpdateTarifa(Id,Nombre, Precio,ValorDia);


      res.json(Answer);
   })


   router.delete('/api/DeleteTarifa/:Id', async (req, res) => {

      const { Id} = req.params

      const Answer = await servicio.DeleteTarifa(Id);

      res.json(Answer);
   })

   return router;
}
