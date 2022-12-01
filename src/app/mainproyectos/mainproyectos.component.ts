import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';


@Component({
  selector: 'app-mainproyectos',
  templateUrl: './mainproyectos.component.html',
  styleUrls: ['./mainproyectos.component.css']
})
export class MainproyectosComponent implements OnInit {
//inicializar variable de instancia para almacenar los datos con los que trata el Servicio
tituloProyectos: string = '';
saludoProyectos: string = '';
nombre: string = '';


  constructor(private datosService: DatosService ) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos =>{
      console.log(datos);
       //Definit informacion a mostrar
       this.tituloProyectos=datos.tituloProyectos;
       this.saludoProyectos=datos.saludoProyectos;
       this.nombre=datos.nombre;
       });
}
}
