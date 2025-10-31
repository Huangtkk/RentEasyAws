class ServicioTarifas {

    constructor(DB) {
        this.DB = DB;
    }


    async addTarifa(Nombre, Precio,ValorDia,Disponible) {
        try {
            const sql = "insert into Tarifas(ID,Nombre,Precio,ValorDia,Disponible) values (SEQ_TARIFAS.NEXTVAL,:Nombre,:Precio,:ValorDia,:Disponible)";

            await this.DB.Open(sql, [Nombre, Precio,ValorDia,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getTarifa() {

        try {

            const sql = "select *from tarifas where Disponible='SI' ";

            let result = await this.DB.Open(sql, [], false);
            const Tarifas = [];

            result.rows.map(propiedad => {
                let TarifaSchema = {
                    "Id": propiedad[0],
                    "Nombre": propiedad[1],
                    "Precio": propiedad[2],
                    "ValorDia":propiedad[3],
                    "Disponible":propiedad[4]
                }

                Tarifas.push(TarifaSchema);
            })

            return Tarifas;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateTarifa(Id,Nombre, Precio,ValorDia) {

        try { 
            
            
            
            const sql = "update Tarifas set Nombre=:Nombre,Precio=:Precio,ValorDia=:ValorDia where Id=:Id";

            await this.DB.Open(sql, [Nombre, Precio,ValorDia,Id], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteTarifa(Id) {

        try {

            const sql = "update Tarifas set Disponible='NO' where ID=:Id";

            await this.DB.Open(sql, [Id], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }


}

module.exports = ServicioTarifas;