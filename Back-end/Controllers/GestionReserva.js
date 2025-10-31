class ServicioReservas {

    constructor(DB) {
        this.DB = DB;
    }


    async addReserva(Fecha_Inicio, Fecha_Final,Cc_Cliente,Placa_Vehiculo,Disponible) {
        try {
            const sql = "insert into Reservas(ID_RESERVA,Fecha_Inicio,Fecha_Final,Cc_Cliente,Placa_Vehiculo) values (SEQ_MARCAS.NEXTVAL,:Fecha_Inicio,:Fecha_Final,:Cc_Cliente,:Placa_Vehiculo :Disponible)";

            await this.DB.Open(sql, [Fecha_Inicio, Fecha_Final,Cc_Cliente,Placa_Vehiculo,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getReserva() {

        try {

            const sql = "select * from Reservas where Disponible='SI'";

            let result = await this.DB.Open(sql, [], false);
            const Reservas = [];

            result.rows.map(propiedad => {
                let ReservaSchema = {
                    "ID_Reserva": propiedad[0],
                    "Fecha_Inicio": propiedad[1],
                    "Fecha_Final": propiedad[2],
                    "Cc_Cliente": propiedad[3],
                    "Placa_Vehiculo": propiedad[4],
                    "Disponible": propiedad[5]
                }

                Reservas.push(ReservaSchema);
            })

            return Reservas;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateReserva(Id,Fecha_Inicio, Fecha_Final,Cc_Cliente) {

        try {

            const sql = "update Reservas set Fecha_Inicio=:Fecha_Inicio,Fecha_Final=:Fecha_Final,Cc_Cliente=:Cc_Cliente where ID_RESERVA=:Id";

            await this.DB.Open(sql, [Id,Fecha_Inicio, Fecha_Final,Cc_Cliente], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteReserva(Id) {

        try {

            const sql = "update Reservas set Disponible='NO' where ID_RESERVA=:Id";

            await this.DB.Open(sql, [Id], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }

}

module.exports = ServicioReservas;