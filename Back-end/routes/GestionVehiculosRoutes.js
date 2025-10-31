const express = require("express");
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { Console } = require("console");

const router = express.Router();
router.use('/Imagenes', express.static(path.join(__dirname, '..', 'front-end', 'src', 'assets', 'Imagenes')));




module.exports = function (servicio) {

   const fs = require("fs");
   const path = require("path");
   const axios = require("axios");
   const { v4: uuidv4 } = require("uuid");

   router.post("/api/AddVehiculo", async (req, res) => {
      try {
         const {
            Placa,
            Id_Tipovehiculo,
            Modelo,
            Id_Marca,
            Id_Tarifas,
            Disponible,
            Year,
            Url,
         } = req.body;

         // 🔎 Validaciones
         if (
            Placa.trim() === "" ||
            Modelo.trim() === "" ||
            Id_Marca <= 0 ||
            Id_Tipovehiculo <= 0 ||
            Id_Tarifas <= 0 ||
            Year === "" ||
            Url === "assets/Imagenes/car-rent-10.png"
         ) {
            return res.status(400).json("VERIFIQUE IMAGENES Y CAMPOS");
         }

         const ExisteVehiculo = await servicio.BuscarVehiculo(Placa);
         if (ExisteVehiculo) {
            return res.status(400).json("Ya Existe Este Vehiculo, Verifique");
         }

         const validarLongitud = servicio.VerificarLongitudes(Placa, Year);
         if (!validarLongitud.EsCorrecta) {
            return res.status(400).json(validarLongitud.Mensaje);
         }

         console.log("📥 Url recibida:", Url);

         let imageData;
         const uniqueFileName = uuidv4() + ".png";

         // 📂 Ruta donde guardar imágenes (volumen compartido en Docker)
         const sharedVolumePath = "/usr/share/nginx/html/assets"; // Volumen en el contenedor
         const imagesPath = path.join(sharedVolumePath, "Imagenes");

         // Asegurarse de que la carpeta "Imagenes" exista
         if (!fs.existsSync(imagesPath)) {
            fs.mkdirSync(imagesPath, { recursive: true });
         }

         const imagePath = path.join(imagesPath, uniqueFileName);

         if (Url.startsWith("data:image")) {
            // 🖼 Imagen en base64
            const base64Data = Url.split(",")[1];
            imageData = Buffer.from(base64Data, "base64");
         } else {
            // 🌐 Imagen publicada (ej: http://mi-frontend:80/assets/...)
            const response = await axios.get(Url, { responseType: "arraybuffer" });
            imageData = Buffer.from(response.data, "binary");
         }

         // 📌 Guardar imagen en disco
         fs.writeFileSync(imagePath, imageData);

         // 📂 Ruta relativa que irá a la BD
         const relativePath = `assets/Imagenes/${uniqueFileName}`;
         console.log("✅ Imagen guardada en:", relativePath);

         // 🗄 Guardar en DB
         const Answer = await servicio.addVehiculo(
            Placa,
            Id_Tipovehiculo,
            Modelo,
            Id_Marca,
            Id_Tarifas,
            Disponible,
            Year,
            relativePath
         );

         res.status(200).json(Answer);
      } catch (error) {
         console.error("❌ Error en AddVehiculo:", error);
         res.status(500).json("Error interno del servidor");
      }
   });

   router.get('/api/getVehiculo', async (req, res) => {

      const Vehiculo = await servicio.getVehiculo();

      res.json(Vehiculo);
   })


   router.put('/api/UpdateVehiculo', async (req, res) => {

      const { Year, Modelo, Placa } = req.body

      const Answer = await servicio.UpdateVehiculo(Year, Modelo, Placa);


      res.json(Answer);
   })


   router.delete('/api/DeleteVehiculo/:Placa', async (req, res) => {

      const { Placa } = req.params

      const Answer = await servicio.DeleteVehiculo(Placa);

      res.json(Answer);
   })

   router.post('/api/BuscarVehiculo', async (req, res) => {

      const { Placa } = req.body


      const Answer = await servicio.BuscarVehiculo(Placa);

      res.json(Answer);

   })

   return router;
}