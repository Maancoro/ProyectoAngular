import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {
// Esto es para traer distintos datos
experiencias : any = []

  constructor(private datos: DatosService ) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.experiencias = datos.experiencias;
     })
  }

}
