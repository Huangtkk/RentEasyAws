class ServicioTipoVehiculo {

    constructor(DB) {
        this.DB = DB;
    }


    async addTipoVehiculo(Nombre, Disponible) {
        try {
            const sql = "insert into TipoVehiculo(ID,Nombre,Disponible) values (SEQ_TIPOVEHICULO.NEXTVAL,:Nombre,:Disponible)";

            await this.DB.Open(sql, [Nombre, Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getTipoVehiculo() {

        try {

            const sql = "select *from TipoVehiculo where Disponible='SI'";

            let result = await this.DB.Open(sql, [], false);
            const TipoVehiculos = [];

            result.rows.map(propiedad => {
                let TipoVehiculoSchema = {
                    "Id": propiedad[0],
                    "Nombre": propiedad[1],
                    "Disponible": propiedad[2]
                }

                TipoVehiculos.push(TipoVehiculoSchema);
            })

            return TipoVehiculos;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateTipoVehiculo(Id, Nombre) {

        try {
            Id=parseInt(Id);

            const sql = "update TipoVehiculo set Nombre=:Nombre where ID=:Id";

            await this.DB.Open(sql, [Nombre, Id], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleleTipoVehiculo(Id) {

        try {

            const sql = "update TipoVehiculo set Disponible='NO' where ID=:Id";

            await this.DB.Open(sql, [Id], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }

    VerificarLongitudes(Nombre) {
        const longitudNombre = Nombre.length;
        let Estado = true;
        let mensaje = '';
    
        if (longitudNombre > 20) {
            Estado = false;
            mensaje = "Error: El tipo de vehiculo no debe tener más de 20 caracteres.";
        }
    
        const longitud = {
            "EsCorrecta": Estado,
            "Mensaje": mensaje
        };
    
        return longitud;
    }


}

module.exports = ServicioTipoVehiculo;