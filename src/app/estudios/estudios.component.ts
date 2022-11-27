import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
// Esto es para traer distintos datos
estudios : any = []

  constructor(private datos: DatosService  ) { }
   //Inyectar el servicio para tener acceso en la clase a los Metodos
   

  ngOnInit(): void {
   this.datos.getDatos().subscribe(datos =>{
    this.estudios = datos.estudios;
   })
  }

}
