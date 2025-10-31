class ServicioCliente {

    constructor(DB) {
        this.DB = DB;
    }


    async addCliente(Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia,Disponible, Correo, Telefono,Contrasena) {
        try {
           
            
           
      
           
            const fechaNacimiento = new Date(Fecha_Nacimiento)

            fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);
            const sql = "insert into Clientes(Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia,Disponible, Correo, Telefono,Contrasena) values (:Nombre_Completo,:Cc,:fechaNacimiento,:N_Licencia,:Disponible,:Correo,:Telefono,:Contrasena)";
    
           

            await this.DB.Open(sql, [Nombre_Completo, Cc, fechaNacimiento, N_Licencia,Disponible, Correo, Telefono,Contrasena], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getCliente() {

        try {

            const sql = "select * from Clientes where Disponible='SI'";

            let result = await this.DB.Open(sql, [], false);
            const Clientes = [];

            result.rows.map(propiedad => {
                let ClienteSchema = {
                    "Nombre_Completo": propiedad[0],
                    "Cc": propiedad[1],
                    "Fecha_Nacimiento": propiedad[2],
                    "N_Licencia":propiedad[3],
                    "Disponible":propiedad[4],
                    "Correo":propiedad[5],
                    "Telefono":propiedad[6],
                    "Contrasena":propiedad[7],
                }

                Clientes.push(ClienteSchema);
            })

            return Clientes;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }

    async UpdateCliente(Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contrasena,Cc) {

        try {
            
            
            if (isNaN(new Date(Fecha_Nacimiento).getTime())) {
                throw new Error('Fecha_Recepcion no es una fecha válida.');
            }
    
            const fecha = new Date(Fecha_Nacimiento);
    
            
            const fechaFormateada = fecha.toISOString().slice(0, 19).replace("T", " ");
            const sql = "update Clientes set Nombre_Completo=:Nombre_Completo,Fecha_Nacimiento=TO_DATE(:fechaFormateada, 'YYYY-MM-DD HH24:MI:SS'),N_Licencia=:N_Licencia,Correo=:Correo,Telefono=:Telefono,Contrasena=:Contrasena where Cc=:Cc";
            await this.DB.Open(sql, [Nombre_Completo,fechaFormateada, N_Licencia,Correo, Telefono,Contrasena,Cc], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteCliente(CC) {

        try {

            const sql = "update Clientes set Disponible='NO' where CC=:CC";

            await this.DB.Open(sql, [CC], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }

    async BuscarCliente(Cc){
        try {
            
            const sql = "SELECT * FROM Clientes WHERE Cc = :Cc";
            let consulta = await this.DB.Open(sql, [Cc], false);
    
            if (consulta && consulta.rows.length > 0) {

                return consulta;

            } else {
               return null;
            }
    
        } catch (error) {
            console.error(error);
            return 'Error al BUSCAR CLIENTE';
        }

    }

    VerificarLongitudes(Cedula,Correo,Contrasena,telefono,N_Licencia){

        const longitudCedula=Cedula.length;
        const longitudCorreo=Correo.length
        const longitudContrasena=Contrasena.length;
        const longitudtelefono=telefono.length;
        const longitudN_licencia=N_Licencia.length;
        let Estado=true;
        let mensaje='';

        if ((longitudCedula<5) || (longitudCedula>10)){
            Estado=false;
            mensaje="Error: La Cedula Debe estar entre 5 y 10 Caracteres"

        }

        
        if (longitudCorreo>30){
            Estado=false;
            mensaje="Error: El correo debe tener solo longitud max 30";

        }

        if (longitudContrasena<4){
            Estado=false;
            mensaje="Error: La Contraseña debe ser mayor o igual a 4 caracteres";

        }

        if ((longitudtelefono<10) || (longitudtelefono>10)){
            Estado=false;
            mensaje="Error: el telefono debe tener exactamente 10 caracteres"

        }

        if ((longitudN_licencia<10) || (longitudN_licencia>12)){
            Estado=false;
            mensaje="Error: La licencia debe estar entre 10 y 12 caracteres"

        }



        const longitud = {
            "EsCorrecta":Estado,
            "Mensaje":mensaje,


        }

        return longitud;

    }

    ValidarFormato(Cedula,Telefono,N_Licencia){


        const regex = /^\d+$/;
        let Estado=true;
        let mensaje='';

        if (!regex.test(Cedula)){ 
            Estado=false;
            mensaje="Error: Verifique La Cedula"

        }

        if (!regex.test(Telefono)){ 
            Estado=false;
            mensaje="Error: Verifique El Telefono"

        }

        if (!regex.test(N_Licencia)){ 
            Estado=false;
            mensaje="Error: Verifique La Licencia"

        }

        const formato = {
            "EsCorrecta":Estado,
            "Mensaje":mensaje,

        }

        console.log(formato.Estado);

        return formato;

    }


}

module.exports = ServicioCliente;