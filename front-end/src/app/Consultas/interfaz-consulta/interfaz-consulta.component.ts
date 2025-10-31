import { ChangeDetectorRef, Component, ErrorHandler, Input } from '@angular/core';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { Marcas, Tarifas, TipoVehiculo, Vehiculos } from 'src/app/Vehiculos/Interfaces/vehiculos.interface';

import { EmpleadosService } from 'src/app/Empleados/services/empleados.service'
import { MarcaService } from 'src/app/Vehiculos/marca/services/marca.service';
import { TipoVehiculoService } from 'src/app/Vehiculos/tipo-vehiculo/services/tipo-vehiculo.service';
import { TarifaService } from '../../Vehiculos/tarifa/services/tarifa.service';
import { RegistroService } from '../../Vehiculos/registro/services/registro.service';
import { Cargos, Empleados } from '../../Empleados/interface/empleados.interface';
import { ReservasService } from 'src/app/Reservas/services/reservas.service';
import { Reservas } from '../../Reservas/interface/reserva.interface';
import { AlquilerService } from 'src/app/Alquileres/services/alquiler.service';
import { Alquileres } from 'src/app/Alquileres/interface/alquiler.interface';
import { Clientes } from 'src/app/Cliente/interface/clientes.interface';
import { CargosService } from 'src/app/Empleados/services/cargos.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-interfaz-consulta',
  templateUrl: './interfaz-consulta.component.html',
  styleUrls: ['./interfaz-consulta.component.css']
})
export class InterfazConsultaComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService, private ClienteService: ClienteService, private TarifaService: TarifaService, private VehiculoServicio: RegistroService, private Empleado: EmpleadosService, private Reserva: ReservasService, private Alquiler: AlquilerService, private CargoService: CargosService, private datePipe: DatePipe, private cdr: ChangeDetectorRef) { };

  //DATOS GLOBALES

  mostrarTabla: boolean = false;
  mostrarBoton: boolean = false;
  VehiculosEstaCargado: boolean = false;
  MarcaEstaCargado: boolean = false;
  TipoVehiculoEstaCargado: boolean = false;
  TarifasEstaCargado: boolean = false;
  EmpleadosEstaCargado: boolean = false;
  AlquilerEstaCargado: boolean = false;
  ClienteEstaCargado: boolean = false;
  CargosEstaCargado: boolean = false;
  ResevasEstaCargado: boolean = false;
  ReporteEstaCargado:boolean=false;

  PlaceHolderPorTipo: string = ''; //Para mostrar el placeholder por tipo de vehiculo, vehiculo, etc
  @Input() BuscarPorTipo: string = '';

  InfoTabla: any[] = [];


  mostrarBotonesActuEliminar: boolean = false;


  ColumnasOrden: string[] = []
  columnasFecha: string[] = [] //SIRVE PARA DECIR QUE COLUMNAS SON DE FECHA PARA EL FORMATO
  FilaSeleccionada: any | null = null; //Para saber que fila se selecciono
  // Asegúrate de inicializar FilasEditadas como un objeto vacío
  FilasEditadas: { [key: string]: any } = {};


  FilaEditada: any = {};

  mostrarCheckboxes: boolean = false;

  valorCheckBox: String = 'Todos';


  seleccionarFila(InfoDB: any) {
    if (this.FilaSeleccionada === InfoDB) {
      this.FilaSeleccionada = null; // Desmarca la fila
    } else {
      this.FilaSeleccionada = InfoDB; // Marca la fila
      console.log(this.FilaSeleccionada);
    }
  }
  /* Checbox*/
  options = [
    { value: 'En curso', selected: false },
    { value: 'Completados', selected: false },
    { value: 'Todos', selected: true }
  ];

  handleChange(selectedOption: any) {
    this.options.forEach(option => {
      if (option !== selectedOption) {
        option.selected = false;
      }
    });
    this.CargarAlquiler();
    console.log(selectedOption.value);
    this.valorCheckBox = selectedOption.value;
  }


  //VALIDAR USUARIO ADMINISTRADOR O NORMAL
  TipoEmpleado: string = '';

  ngOnInit() {
    this.verificarTipoUsuario();
  }


  verificarTipoUsuario() {
    this.Empleado.BuscarEmpleado(this.Empleado.Empleado)
      .subscribe(resp => {
        console.log(resp);

        if (resp && (resp.Administracion === 'EA')) {
          console.log('El usuario es Administrador');
          this.TipoEmpleado = 'EA';
        } else if (resp && (resp.Administracion === 'EN')) {
          console.log('El usuario es Empleado Normal');
          this.TipoEmpleado = 'EN';
        }
        // Puedes realizar más acciones o asignaciones aquí según tu lógica
      });
  }


  mostrarTablaConsulta(boton: string) {

    this.mostrarTabla = true;
    this.mostrarBoton = true;


    switch (boton) {
      case 'M': this.CargarMarcas(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'T': this.CargarTipoVehiculo(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'TA': this.CargarTarifas(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'GK': this.CargarVehiculos(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'EM': this.CargarEmpleado(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'DD': this.CargarResevas(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'GG': this.CargarAlquiler(); this.mostrarCheckboxes = true;this.mostrarBotonesActuEliminar=true;
        return;
      case 'C': this.CargarCliente(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
      case 'CA': this.CargarCargos(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=true;
        return;
        /* Modificacion nueva para informes */
      case 'IF': this.CargarReporte(); this.mostrarCheckboxes = false;this.mostrarBotonesActuEliminar=false;
        return;
      

    }

  }


  //FORMATO DE FECHA

  formatearValor(valor: any, nombreColumna: string): string {
    // Verificar si el valor es nulo o indefinido
    if (valor == null) {
      return ''; // O el valor predeterminado que desees para valores nulos
    }

    if (this.columnasFecha.includes(nombreColumna)) {
      // Si la columna es una fecha, aplica el formato
      return this.formatearFecha(valor);
    } else {
      // Para otras columnas, simplemente devuelve el valor como cadena
      return valor;
    }
  }

  private formatearFecha(fecha: any): string {
    const fechaDate = new Date(fecha);

    // Verificar si es una fecha válida
    if (!isNaN(fechaDate.getTime())) {
      // Aplicar el formato de fecha deseado
      return this.datePipe.transform(fechaDate, 'yyyy-MM-dd') || '';
    }

    // Si no es una fecha válida, devolver una cadena vacía
    return '';
  }


  //CONSULTAS


  CargarMarcas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.marcaService.ConsultarMarcas().subscribe(
      (ListMarcas: Marcas[] | null) => {

        if (ListMarcas != null) {

          this.PlaceHolderPorTipo = 'Marca';

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListMarcas;
          }
          else {
            this.InfoTabla = ListMarcas.filter(item => item.Nombre.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          console.log('Resultado de la consulta de marcas:', ListMarcas);


          this.MarcaEstaCargado = true;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;
        }
        this.ColumnasOrden = [
          'Id_Marca',
          'Nombre'
        ]

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarTipoVehiculo() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.TipoVehiculoService.ConsultarTipoVehiculo().subscribe(
      (ListTipoVehiculo: TipoVehiculo[] | null) => {

        if (ListTipoVehiculo != null) {

          this.PlaceHolderPorTipo = 'Tipo';

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListTipoVehiculo;
          }
          else {
            this.InfoTabla = ListTipoVehiculo.filter(item => item.Nombre.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          console.log('Resultado de la consulta de TipoVehiculo:', ListTipoVehiculo);


          console.log(this.InfoTabla);


          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = true;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;

          //Se colocan las Columnas en que la fecha se quiere formatear
          this.columnasFecha = ['Fecha_Emision', 'Fecha_Recepcion', 'Fecha_Contrato']

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Id',
            'Nombre',
          ]



        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarVehiculos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.VehiculoServicio.ConsultarVehiculo().subscribe(
      (listVehiculo: Vehiculos[] | null) => {

        if (listVehiculo != null) {

          this.PlaceHolderPorTipo = 'Placa';

          console.log('Resultado de la consulta de Vehiculo:', listVehiculo);

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = listVehiculo;
          }
          else {
            this.InfoTabla = listVehiculo.filter(item => item.Placa.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          console.log(this.InfoTabla);

          this.VehiculosEstaCargado = true;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Id_TipoVehiculo',
            'Modelo',
            'Id_Marca',
            'Id_Tarifas',
            'Placa',
            'Year'


          ]



        }

      },
      (error: any) => {
        console.error('Error al consultar Vehiculos:', error);
      }
    );

  }

  CargarTarifas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.mostrarCheckboxes = false;
    this.TarifaService.ConsultarTarifas().subscribe(
      (ListTarifa: Tarifas[] | null) => {

        if (ListTarifa != null) {

          this.PlaceHolderPorTipo = 'Tarifa';

          console.log('Resultado de la consulta de Tarifa:', ListTarifa);

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListTarifa;
          }
          else {
            this.InfoTabla = ListTarifa.filter(item => item.Nombre.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = true;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;


          this.ColumnasOrden = [

            'Id',
            'Nombre',
            'Precio',
            'ValorDia'
          ]
        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarEmpleado() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.Empleado.ConsultarEmpleados().subscribe(
      (ListEmpleado: Empleados[] | null) => {

        if (ListEmpleado != null) {

          this.PlaceHolderPorTipo = 'Correo';

          console.log('Resultado de la consulta de Empleados:', ListEmpleado);

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListEmpleado;
          }
          else {
            this.InfoTabla = ListEmpleado.filter(item => item.Correo.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = true;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;

        }

        this.ColumnasOrden = [

          'Correo',
          'Clave',
          'Id',
          'Id_Cargo'

        ]


      },
      (error: any) => {
        console.error('Error al consultar Empleados:', error);
      }
    );

  }

  CargarResevas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V

    this.Reserva.ConsultarReservas().subscribe(
      (ListReserva: Reservas[] | null) => {

        if (ListReserva != null) {

          console.log('Resultado de la consulta de reservas:', ListReserva);


          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;
        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarAlquiler() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V

    this.Alquiler.ConsultarAlquileres().subscribe(
      (ListAlquiler: Alquileres[] | null) => {



        if (ListAlquiler != null) {

          this.PlaceHolderPorTipo = 'Cedula';

          console.log('Resultado de la consulta de alquileres:', ListAlquiler);

          if (this.valorCheckBox.toUpperCase() == 'EN CURSO') {

            let ListaEnCurso: Alquileres[] = [];

            for (var alquiler of ListAlquiler) {

              if (alquiler.Fecha_Recepcion == null) {
                ListaEnCurso.push(alquiler);
              };
            };

            ListAlquiler=ListaEnCurso;

          }


          if (this.valorCheckBox.toUpperCase() == 'COMPLETADOS') {

            let ListaCompletados: Alquileres[] = [];

            for (var alquiler of ListAlquiler) {

              if (alquiler.Fecha_Recepcion != null) {
                ListaCompletados.push(alquiler);
              };
            };
            ListAlquiler=ListaCompletados;

          }


          //Cargar Datos y saber si Alquiler es el que está cargado
          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListAlquiler;
          }
          else {
            this.InfoTabla = ListAlquiler.filter(item => item.Cc_Clientes.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado = true;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;

          //Se colocan las Columnas en que la fecha se quiere formatear
          this.columnasFecha = ['Fecha_Emision', 'Fecha_Recepcion', 'Fecha_Contrato']

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Id',
            'Placa_Vehiculo',
            'Cc_Clientes',
            'Id_Empleados',
            'Fecha_Emision',
            'Fecha_Contrato',
            'Fecha_Recepcion',
            'Pago_Inicial',
            'KmEmision',
            'KmRecepcion',
            'KmRecorridos',
            'Valor_Inicial',
            'Cargos_Adicionales',
            'Total'
            

          ]


        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }



  CargarReporte() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V

    this.Alquiler.GenerarReporte().subscribe(
      (data:any) => {



        if ((data != null) && (Array.isArray(data))) {

          this.PlaceHolderPorTipo = 'Placa';

          console.log('Resultado de Reporte:', data);

          

          //Cargar Datos y saber si Alquiler es el que está cargado
          if (this.BuscarPorTipo == '') {
            this.InfoTabla = data;
          }
          else {
            this.InfoTabla = data.filter((item: any) => item.Placa.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado = false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=true;

          //Se colocan las Columnas en que la fecha se quiere formatear
         // this.columnasFecha = ['Fecha_Emision', 'Fecha_Recepcion', 'Fecha_Contrato']

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Placa',
            'Numero_Alquileres',
            'Mes_Mas_Alquilado',
            'Max_Alquileres',
            'Total_Alquilado',
           
            

          ]


        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarCliente() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V

    this.ClienteService.ConsultarCliente().subscribe(
      (ListCliente: Clientes[] | null) => {

        if (ListCliente != null) {
          this.PlaceHolderPorTipo = 'Cedula';

          console.log('Resultado de la consulta de Clientes:', ListCliente);

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListCliente;
          }
          else {
            this.InfoTabla = ListCliente.filter(item => item.Cc.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = true;
          this.CargosEstaCargado = false;
          this.ReporteEstaCargado=false;

          this.columnasFecha = ['Fecha_Nacimiento'];

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Cc',
            'Fecha_Nacimiento',
            'Nombre_Completo',
            'Numero_Licencia',
            'Telefono',
            'Correo',
            'Contrasena'



          ]



        }

      },
      (error: any) => {
        console.error('Error al consultar Clientes:', error);
      }
    );

  }

  CargarCargos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V

    this.CargoService.ConsultarCargos().subscribe(
      (ListCargos: Cargos[] | null) => {

        if (ListCargos != null) {

          this.PlaceHolderPorTipo = 'Cargo';

          console.log('Resultado de la consulta de Cargos:', ListCargos);

          if (this.BuscarPorTipo == '') {
            this.InfoTabla = ListCargos;
          }
          else {
            this.InfoTabla = ListCargos.filter(item => item.Nombre.toLocaleUpperCase().startsWith(this.BuscarPorTipo.toLocaleUpperCase()));
          }

          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.CargosEstaCargado = true;
          this.ClienteEstaCargado = false;
          this.ReporteEstaCargado=false;


          this.ColumnasOrden = [
            'Id_Cargo',
            'Nombre',
            'Administracion'

          ]
        }



      },
      (error: any) => {
        console.error('Error al consultar Cargos:', error);
      }
    );

  }


  //ACTUALIZAR

  AlmacenarFila(event: any, InfoDB: any) {
    // Almacena todas las celdas editadas en una única fila editada
    this.FilasEditadas[InfoDB] = { ...InfoDB, ...this.FilasEditadas[InfoDB], [event.target.getAttribute('data-columna')]: event.target.innerText };
  }





  ActualizarDatos() {


    if (this.FilasEditadas && Object.keys(this.FilasEditadas).length > 0) {


      for (const infoKey in this.FilasEditadas) {
        if (this.FilasEditadas.hasOwnProperty(infoKey)) {
          this.FilaEditada = this.FilasEditadas[infoKey];
          // Ahora puedes usar filaEditada según tus necesidades, por ejemplo, enviarla al servidor
        }
      }


      if (this.VehiculosEstaCargado) {
        this.ActualizarVehiculo();
      }

      if (this.TipoVehiculoEstaCargado) {
        this.ActualizarTipovehiculo();
      }


      if (this.AlquilerEstaCargado) {
        this.ActualizarAlquiler();
      }

      if (this.MarcaEstaCargado) {
        this.ActualizarMarca();
      }

      if (this.CargosEstaCargado) {
        this.ActualizarCargos();
      }

      if (this.TarifasEstaCargado) {
        this.ActualizarTarifa();
      }

      if (this.EmpleadosEstaCargado) {
        this.ActualizarEmpleado();
      }

      if (this.ClienteEstaCargado) {

        this.ActualizarClientes();
      }


      this.FilasEditadas = {}; //SIRVE PARA BUSCAR LA FILA EDITADA
      this.FilasEditadas = {};

    }
    else {

      Swal.fire('Error', 'POR FAVOR ACTUALICE UN VALOR E INTENTE DENUEVO', 'error');

    }
  }

  ActualizarVehiculo() {

    const Vehiculo: Vehiculos = this.FilaEditada;



    this.VehiculoServicio.ActualizarVehiculo(Vehiculo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });


  }

  //Actualizaciones

  ActualizarAlquiler() {

    const Alquiler: Alquileres = this.FilaEditada;

    console.log(Alquiler);



    if (Alquiler.KmRecepcion != null) {

      const KMEmision: number = Alquiler.KmEmision;
      const KmRecepcion: number = Alquiler.KmRecepcion;

      if (KmRecepcion <= KMEmision) {
        Swal.fire('ERROR DE KILOMETROS', 'LOS KILOMETROS DE RECEPCION DEBEN SER MAYORES A LOS KILOMETROS DE EMISION', 'error');
        return;
      }
    }

    if (Alquiler.Fecha_Recepcion != null) {

      const FechaEmision: Date = new Date(Alquiler.Fecha_Emision);
      const FechaRecepcion: Date = new Date(Alquiler.Fecha_Recepcion);


      if (FechaRecepcion < FechaEmision) {
        Swal.fire('ERROR DE FECHA', 'LA FECHA DE RECEPCION DEBEN SER MAYOR O IGUAL A LA FECHA DE EMISION', 'error');
        return;
      }


    }




    this.Alquiler.ActualizarAlquilar(Alquiler)
      .subscribe(resp => {
        console.log(resp);
        this.CargarAlquiler();
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarMarca() {
    const Marcas: Marcas = this.FilaEditada;

    this.marcaService.ActualizarMarca(Marcas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarTipovehiculo() {


    const TipoVehiculo: TipoVehiculo = this.FilaEditada;
    console.log(TipoVehiculo);

    this.TipoVehiculoService.ActualizarTipoVehiculo(TipoVehiculo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarTarifa() {
    const Tarifas: Tarifas = this.FilaEditada;


    this.TarifaService.ActualizarTarifa(Tarifas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarEmpleado() {
    const Empleados: Empleados = this.FilaEditada;

    this.Empleado.ActualizarEmpleado(Empleados)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarReservas() {
    const Reservas: Reservas = this.FilaEditada;

    this.Reserva.ActualizarReserva(Reservas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarClientes() {
    const Clientes: Clientes = this.FilaEditada;
    console.log(this.FilaEditada);
    console.log(Clientes);
    this.ClienteService.ActualizarCliente(Clientes)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }


  ActualizarCargos() {
    const Cargos: Cargos = this.FilaEditada;
    console.log(this.FilaEditada);
    console.log(Cargos.Id_Cargo);
    this.CargoService.ActualizarCargos(Cargos)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }


  //ELIMINAR


  EliminarDatos() {

    if (this.FilaSeleccionada != null) {

      if (this.TipoVehiculoEstaCargado) {
        this.EliminarTipoVehiculo();

        return;
      }

      if (this.MarcaEstaCargado) {
        this.EliminarMarca();
        return;
      }

      if (this.TarifasEstaCargado) {
        this.EliminarTarifa();
        return;
      }

      if (this.VehiculosEstaCargado) {
        this.EliminarVehiculo();
        return;
      }

      if (this.EmpleadosEstaCargado) {
        this.EliminarEmpleado();
        return;
      }

      if (this.ResevasEstaCargado) {
        this.EliminarReservas();
        return;
      }

      if (this.AlquilerEstaCargado) {
        this.EliminarAlquiler();
        return;
      }

      if (this.ClienteEstaCargado) {
        this.EliminarCliente();
        return;
      }

      if (this.CargosEstaCargado) {
        this.EliminarCargos();
        return;
      }



    }


  }

  EliminarMarca() {

    const Marcas: Marcas = this.FilaSeleccionada;

    this.marcaService.EliminarMarca(Marcas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarTipoVehiculo() {



    const TipoVehiculo: TipoVehiculo = this.FilaSeleccionada;

    this.TipoVehiculoService.EliminarTipoVehiculo(TipoVehiculo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarTarifa() {

    const Tarifas: Tarifas = this.FilaSeleccionada;

    this.TarifaService.EliminarTarifa(Tarifas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarVehiculo() {

    const Vehiculos: Vehiculos = this.FilaSeleccionada;

    this.VehiculoServicio.EliminarVehiculo(Vehiculos)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarEmpleado() {

    const Empleados: Empleados = this.FilaSeleccionada;

    this.Empleado.EliminarEmpleado(Empleados)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarReservas() {

    const Reservas: Reservas = this.FilaSeleccionada;

    this.Reserva.EliminarReserva(Reservas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarAlquiler() {

    const Alquileres: Alquileres = this.FilaSeleccionada;

    this.Alquiler.EliminarAlquiler(Alquileres)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarCliente() {

    const Clientes: Clientes = this.FilaSeleccionada;

    this.ClienteService.EliminarCliente(Clientes)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }

  EliminarCargos() {

    const Cargos: Cargos = this.FilaSeleccionada;

    this.CargoService.EliminarCargo(Cargos)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }


  //BUSCAR POR TIPO


  BuscandoPorTipo() {

    if (this.MarcaEstaCargado) {
      this.mostrarTablaConsulta('M');
      return;
    }

    if (this.TipoVehiculoEstaCargado) {
      this.mostrarTablaConsulta('T');
      return;
    }

    if (this.TarifasEstaCargado) {
      this.mostrarTablaConsulta('TA');
      return;
    }

    if (this.VehiculosEstaCargado) {
      this.mostrarTablaConsulta('GK');
      return;
    }

    if (this.EmpleadosEstaCargado) {
      this.mostrarTablaConsulta('EM');
    }

    if (this.AlquilerEstaCargado) {
      this.mostrarTablaConsulta('GG');
      return;
    }

    if (this.ClienteEstaCargado) {
      this.mostrarTablaConsulta('C');
      return;
    }

    if (this.CargosEstaCargado) {
      this.mostrarTablaConsulta('CA');
      return;
    }

    if (this.ReporteEstaCargado){
      this.mostrarTablaConsulta('IF');
    }


  }




  //DATOS GlOBALES

  ColumnasNombres: { [key: string]: string } = {
    //Mapear los nombres de las cabeceras


    //ALQUILER
    Fecha_Emision: 'Fecha De Emision',
    Fecha_Contrato: 'Fecha De Finalizacion',
    Id: 'Id',
    KmEmision: 'Kilometros De Emision',
    KmRecepcion: 'Kilometros De Recepcion',
    KmRecorridos: 'Kilometros Recorridos',
    Cargos_Adicionales: 'Cargos Adicionales',
    Total: 'Total',
    Placa_Vehiculo: 'Placa De Vehiculo',
    Cc_Clientes: 'Cedula',
    Id_Empleados: 'Id Empleado',
    Valor_Inicial: 'Valor Base',
    Pago_Inicial: 'Pago Inicial',


    Fecha_Recepcion: 'Fecha De Recepcion',
    //Clientes

    Cc: 'Cedula',
    Fecha_Nacimiento: 'Fecha De Nacimiento',
    Nombre_Completo: 'Nombre Completo',
    N_Licencia: 'Numero De Licencia',
    Telefono: 'Telefono',
    Correo: 'Correo',
    Contrasena: 'Contraseña',

    //Tipo-Vehiuclo
    Nombre: 'Nombre',


    //VEHICULOS

    Placa: 'Placa',
    Id_TipoVehiculo: 'Tipo De Vehiculo',
    Modelo: 'Modelo',
    Id_Marca: 'Id',
    Id_Tarifas: 'Tarifa',
    Year: 'Año',

    //Cargos
    Id_Cargo: 'Id Cargo',
    Administracion: 'Administra',


    //Tarifas
    Precio: 'Precio',
    ValorDia: 'ValorDia',


    //Empleados
    Clave: 'Clave',


    //Reportes

    Numero_Alquileres: 'Total Alquileres',
    Mes_Mas_Alquilado: 'Mes Mas Rentado',
    Max_Alquileres:  'Alquileres en Mes Pico',
    Total_Alquilado: 'Total Alquilado'


  }; //Con esto se pueden mapear  los nombres para que aparezcan de la manera deseada

}