import { Injectable } from '@angular/core';
//Esto es para subcribirse y que reciba respuesta de forma asincrona
import { Observable } from 'rxjs';
//Esto es para poder hacer las peticiones y CRUD
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

// El primer http se llama ALIAS
  constructor(private http:HttpClient) { }

    //Metodo Observable que devuelve datos
    getDatos():Observable<any>{
    //retorno de datos utilizando el método get ed HttpClient que llama a la base de datos JSON o a una URL
    return this.http.get('./assets/db/datos.json');
    //acá podria poner un callback para ver la opción de problema de conexión del servidor
  }


}
