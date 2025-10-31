class ServicioCargos {

    constructor(DB) {
        this.DB = DB;
    }


    async addCargo(Nombre,Administracion,Disponible) {
        try {
            const sql = "insert into Cargos(ID_CARGO,Nombre,Administracion,Disponible) values (SEQ_CARGOS.NEXTVAL,:Nombre,:Administracion,:Disponible)";

            await this.DB.Open(sql, [Nombre,Administracion,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getCargo() {

        try {
          

            const sql = "select *from Cargos where Disponible='SI'";

            let result = await this.DB.Open(sql, [], false);
            const Cargos = [];

            result.rows.map(propiedad => {
                let CargoSchema = {
                    "Id_Cargo": propiedad[0],
                    "Nombre": propiedad[1],
                    "Administracion": propiedad[2],
                    "Disponible":propiedad[3]
                }

                Cargos.push(CargoSchema);
            })

            return Cargos;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateCargo(Nombre,Administracion,Id_Cargo) {
           
        try {
            console.log(typeof(Id_Cargo));
            console.log(Id_Cargo);
            Id_Cargo=parseInt(Id_Cargo);
            console.log(Nombre);
            console.log(Administracion);
            console.log(Id_Cargo);
            const sql = "update cargos set Nombre=:Nombre,Administracion=:Administracion where Id_Cargo=:Id_Cargo";

            await this.DB.Open(sql, [Nombre,Administracion,Id_Cargo], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteCargo(ID_CARGO) {

        try {

            const sql = "update CARGOS set Disponible='NO' where Id_Cargo=:Id_Cargo";

            await this.DB.Open(sql, [ID_CARGO], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }

    VerificarLongitudes(cargo) {
        const longitudCargo = cargo.length;
        let Estado = true;
        let mensaje = '';
    
        if (longitudCargo > 25) {
            Estado = false;
            mensaje = "Error: El Cargo no puede ser mayor a 25 caracteres";
        }
    
        const longitud = {
            "EsCorrecta": Estado,
            "Mensaje": mensaje
        };
    
        return longitud;
    }


    




}

module.exports = ServicioCargos;