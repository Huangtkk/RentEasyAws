class ServicioAlquiler {

    constructor(DB) {
        this.DB = DB;
    }


    async addAlquiler(Fecha_Emision, Fecha_Contrato, KmEmision, KmRecepcion, KmRecorridos, Placa_Vehiculo, Cc_Clientes, Id_Empleados, Valor_Inicial, Disponible, Cargos_Adicionales, Total, Fecha_Recepcion, Pago_Inicial) {
        try {
            //conversiones


            const fechaEmision = new Date(Fecha_Emision)

            fechaEmision.setDate(fechaEmision.getDate() + 1);

            const fechacontrato = new Date(Fecha_Contrato)

            fechacontrato.setDate(fechacontrato.getDate() + 1);



            
            const id_empleado = parseInt(Id_Empleados);
            const valorinicial = parseInt(Valor_Inicial);
            
            const total = parseFloat(Total);



            const sql = "insert into Alquiler(Fecha_Emision,Fecha_Contrato,ID,KmEmision,KmRecepcion,KmRecorridos,Cargos_Adicionales,Total,Placa_Vehiculos,CC_CLIENTES,ID_EMPLEADOS,Valor_Inicial,Disponible,Fecha_Recepcion,Pago_Inicial) values (:fechaEmision,:fechacontrato,SEQ_ALQUILER.NEXTVAL,:KmEmision,:KmRecepcion,:KmRecorridos,:Cargos_Adicionales,:Total,:Placa_Vehiculo,:Cc_Clientes,:id_empleado,:valorinicial,:Disponible,:Fecha_Recepcion,:Pago_Inicial)";

            await this.DB.Open(sql, [fechaEmision, fechacontrato, KmEmision, KmRecepcion, KmRecorridos, Cargos_Adicionales, Total, Placa_Vehiculo, Cc_Clientes, id_empleado, valorinicial, Disponible, Fecha_Recepcion, Pago_Inicial], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getAlquiler() {

        try {

            const sql = "select * from Alquiler where Disponible='SI'";

            let result = await this.DB.Open(sql, [], false);
            const Alquiler = [];

            result.rows.map(propiedad => {
                let AlquilerSchema = {
                    "Fecha_Emision": propiedad[0],
                    "Fecha_Contrato": propiedad[1],
                    "Id": propiedad[2],
                    "KmEmision": propiedad[3],
                    "KmRecepcion": propiedad[4],
                    "KmRecorridos": propiedad[5],
                    "Cargos_Adicionales": propiedad[6],
                    "Total": propiedad[7],
                    "Placa_Vehiculo": propiedad[8],
                    "Cc_Clientes": propiedad[9],
                    "Id_Empleados": propiedad[10],
                    "Valor_Inicial": propiedad[11],
                    "Disponible": propiedad[12],
                    "Fecha_Recepcion": propiedad[13],
                    "Pago_Inicial": propiedad[14]
                }

                Alquiler.push(AlquilerSchema);
            })

            return Alquiler;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }

    async UpdateAlquiler(Id, Fecha_Recepcion, KmRecepcion, Pago_Inicial) {

        try {

           


            
            if (isNaN(new Date(Fecha_Recepcion).getTime())) {
                throw new Error('Fecha_Recepcion no es una fecha válida.');
            }

            const fecha = new Date(Fecha_Recepcion);

            fecha.setDate(fecha.getDate() + 1);

            
            const fechaFormateada = fecha.toISOString().slice(0, 19).replace("T", " ");

            if ((Pago_Inicial != 0) || (Pago_Inicial == 0)) {

                const sql = "UPDATE Alquiler SET Pago_Inicial = :Pago_Inicial WHERE Id = :Id";

                await this.DB.Open(sql, [Pago_Inicial, Id], true);

            }


            if (Fecha_Recepcion != null) {


                const sql = "UPDATE Alquiler SET Fecha_Recepcion = :fecha WHERE Id = :Id";

                await this.DB.Open(sql, [fecha, Id], true);

            }


            if (KmRecepcion != null) {

                KmRecepcion = parseInt(KmRecepcion);

                const sql = "UPDATE Alquiler SET KmRecepcion = :KmRecepcion WHERE Id = :Id";

                await this.DB.Open(sql, [KmRecepcion, Id], true);
            }


            if ((KmRecepcion != null) && (Fecha_Recepcion != null) && (Pago_Inicial != 0)) {

                KmRecepcion = parseInt(KmRecepcion);

        

                const sql = "UPDATE Alquiler SET Pago_Inicial=: Pago_Inicial,Fecha_Recepcion = :fecha,KmRecepcion=:KmRecepcion WHERE Id = :Id";

                await this.DB.Open(sql, [Pago_Inicial, fecha, KmRecepcion, Id], true);
            }
            return 'Actualizado Correctamente';
        } catch (err) {
            console.error('Error:', err.message || err);


            return 'Error al actualizar';
        }
    }



    async DeleteAlquiler(ID) {

        try {

            const sql = "update Alquiler set Disponible='NO' where ID=:ID";

            await this.DB.Open(sql, [ID], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }

    async getReporte() {

        try {

            const sql = `
                    SELECT 
                        Placa,
                        Numero_Alquileres,
                        Mes_Alquiler AS Mes_Mas_Alquilado,
                        Max_Alquileres,
                        Total_Alquilado
                    FROM (
                        SELECT 
                            v.Placa,
                            (SELECT COUNT(*) FROM Alquiler a WHERE v.Placa = a.Placa_Vehiculos) AS Numero_Alquileres,
                            TO_CHAR(a.Fecha_Emision, 'MM-YYYY') AS Mes_Alquiler,
                            MAX(COUNT(a.Placa_Vehiculos)) OVER (PARTITION BY v.Placa) AS Max_Alquileres,
                            (SELECT SUM(a.Total) FROM Alquiler a WHERE v.Placa = a.Placa_Vehiculos) AS  Total_Alquilado,
                            ROW_NUMBER() OVER (PARTITION BY v.Placa ORDER BY COUNT(*) DESC) AS rn
                        FROM 
                            Vehiculos v
                        LEFT JOIN 
                            Alquiler a ON v.Placa = a.Placa_Vehiculos
                        GROUP BY 
                            v.Placa, TO_CHAR(a.Fecha_Emision, 'MM-YYYY')
                    ) t
                    WHERE 
                        rn = 1
                `;


            let result = await this.DB.Open(sql, [], false);
            const Reporte = [];

            result.rows.map(propiedad => {
                let ReporteSchema = {
                    "Placa": propiedad[0],
                    "Numero_Alquileres": propiedad[1],
                    "Mes_Mas_Alquilado": propiedad[2],
                    "Max_Alquileres": propiedad[3],
                    "Total_Alquilado":propiedad[4]
                    
                }

                Reporte.push(ReporteSchema);
            })

            return Reporte;
        }

        catch (err) {
            console.error(err);
            return ('Error de Reporte');
        }

    }

    async VehiculoEstaEnCurso(Placa) {
        try {
            const sql = "SELECT COUNT(Placa_Vehiculos) AS count FROM alquiler WHERE Fecha_Recepcion IS NULL AND Placa_Vehiculos = :Placa AND Disponible='SI'";
            let consulta = await this.DB.Open(sql, [Placa], false);
    
         
            // Accede al conteo correctamente
            if (consulta.rows.length > 0 && consulta.rows[0][0] > 0) {
          
                return true;
            } else {

                return false;
            }
    
        } catch (error) {
            console.error("Error al buscar vehículo en curso:", error);
            return 'Error al buscar vehículo';
        }
    }
    
    
    KmEmisionTieneLetra(KmEmision){


        const regex = /^\d+$/;
      

        if (!regex.test(KmEmision)){

            console.log('paso');
            return true;

        } //Si tiene letra

        return false;


    }






}

module.exports = ServicioAlquiler;