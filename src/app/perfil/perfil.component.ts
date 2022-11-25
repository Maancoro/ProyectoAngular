import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
 //inicializar variable de instancia para almacenar los datos con los que trata el Servicio
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';

  constructor(
    //Inyectar el servicio para tener acceso en la clase a los Metodos
    private datosService: DatosService ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio?
    this.datosService.getDatos().subscribe(data =>{
    console.log(data);
     //Definit informacion a mostrat
     this.nombre=data.nombre;
     this.apellido=data.apellido;
     this.profesion=data.profesion;
    });
  }
}
