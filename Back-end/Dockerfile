# Imagen base con Node.js
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia tus dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto de la app (ajústalo si usas otro)
EXPOSE 3000

# Comando para arrancar tu app
CMD ["node", "app.js"]
