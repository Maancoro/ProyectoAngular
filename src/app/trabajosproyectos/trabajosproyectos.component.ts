import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-trabajosproyectos',
  templateUrl: './trabajosproyectos.component.html',
  styleUrls: ['./trabajosproyectos.component.css']
})
export class TrabajosproyectosComponent implements OnInit {
  // Esto es para traer distintos datos
proyectos : any = []


  constructor(private datos: DatosService ) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.proyectos = datos.proyectos;
     })
  }

}
