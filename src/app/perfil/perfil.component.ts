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
  imagen: string = '';


  constructor(
    //Inyectar el servicio para tener acceso en la clase a los Metodos
    private datosService: DatosService ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio?
    this.datosService.getDatos().subscribe(datos =>{
    console.log(datos);
     //Definit informacion a mostrar
     this.nombre=datos.nombre;
     this.apellido=datos.apellido;
     this.profesion=datos.profesion;
     this.imagen=datos.imagen;
    });
  }
}
