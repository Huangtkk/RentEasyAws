import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleados } from '../Empleados/interface/empleados.interface';

@Injectable()
export class CrudService<T> {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  Agregar(body:T,endpoint:string){

    const url = `${this.baseUrl}/${endpoint}`  //HTTP://localhost/api/endpoint

    return this.http.post<string>(url, body)

  }

  Consultar(endpoint:string){

    const url = `${this.baseUrl}/${endpoint}`  

    return this.http.get<T[]>(url);

  }

  
  Actualizar(body:T,endpoint:string){

    const url = `${this.baseUrl}/${endpoint}`  

    return this.http.put<string>(url, body)

  }

  Eliminar(Id:string | number,endpoint:string){

    const url = `${this.baseUrl}/${endpoint}/${Id}`; //HTTP://localhost/api/EliminarVehiculo/3333
  return this.http.delete<string>(url);
  }


   BuscarUsuario(body: T, endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
  
  
    return this.http.post<any>(url,body);
  } 


  ConsultarReporte(endpoint:string){

    const url = `${this.baseUrl}/${endpoint}`  

    return this.http.get<any[]>(url);

  }
  
}
