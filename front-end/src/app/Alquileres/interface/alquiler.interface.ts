export interface Alquileres{

    Fecha_Emision:Date ,
    Fecha_Contrato:Date,
    Id:number,
    KmEmision:number,
    KmRecepcion:number | null,
    KmRecorridos:number| null,
    Cargos_Adicionales:number | null ,
    Total:number | null,
    Placa_Vehiculo:string,
    Cc_Clientes:string,
    Id_Empleados:number,
    Valor_Inicial:number,
    Disponible:string,
    Fecha_Recepcion:Date | null | string,
    Pago_Inicial: number

}

