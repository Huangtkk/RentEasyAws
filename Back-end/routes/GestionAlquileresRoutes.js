const express = require("express");

const router = express.Router();


module.exports = function (servicio) {

   router.post('/api/AddAlquiler', async (req, res) => {


      try {

         const { Fecha_Emision, Fecha_Contrato, KmEmision, KmRecepcion, KmRecorridos, Placa_Vehiculo, Cc_Clientes, Id_Empleados, Valor_Inicial, Disponible, Cargos_Adicionales, Total, Fecha_Recepcion,Pago_Inicial} = req.body;

         const FechaContrato = new Date(Fecha_Contrato);
         const FechaEmision = new Date(Fecha_Emision);

         


         if (KmEmision < 0 || Id_Empleados == 0 || Cc_Clientes == '' || Placa_Vehiculo == '' || KmEmision==null || Id_Empleados==null) {
            return res.status(400).json('VERIFIQUE CAMPOS');
         }

         if (FechaContrato < FechaEmision ){
            return res.status(400).json('La Fecha De Recepcion debe ser mayor a la Fecha de Emision');
         }


         if (servicio.KmEmisionTieneLetra(KmEmision)){
            return res.status(400).json('Verifique los Km De Emision');
         }

         

         if (await servicio.VehiculoEstaEnCurso(Placa_Vehiculo)) {
     
            return res.status(400).json('Este Vehiculo Ya está en Curso');
         }



         const Answer = await servicio.addAlquiler(Fecha_Emision, Fecha_Contrato, KmEmision, KmRecepcion, KmRecorridos, Placa_Vehiculo, Cc_Clientes, Id_Empleados, Valor_Inicial, Disponible, Cargos_Adicionales, Total, Fecha_Recepcion,Pago_Inicial)


         res.status(200).json(Answer)

      } catch (error) {

         res.status(404).json(error);

      }

   })

   router.get('/api/getAlquiler', async (req, res) => {

      const Alquileres = await servicio.getAlquiler();

      res.json(Alquileres);
   })


   router.put('/api/UpdateAlquiler', async (req, res) => {

      const { Id, Fecha_Recepcion, KmRecepcion, Pago_Inicial,Valor_Inicial} = req.body
      

      const Pago_InicialParse=parseFloat(Pago_Inicial);

     

      if(Pago_InicialParse>Valor_Inicial){

         return res.status(404).json('El Pago Inicial debe ser menor o igual al Valor Base');
      }

     console.log(Pago_InicialParse);

      const Answer = await servicio.UpdateAlquiler(Id, Fecha_Recepcion, KmRecepcion,Pago_InicialParse);


      res.status(200).json(Answer);
   })


   router.delete('/api/DeleteAlquiler/:ID', async (req, res) => {

      const { ID } = req.params

      const Answer = await servicio.DeleteAlquiler(ID);

      res.json(Answer);
   })

   router.get('/api/getReporte', async (req, res) => {

      const Reportes = await servicio.getReporte();

      res.json(Reportes);
   })

   return router;
}

