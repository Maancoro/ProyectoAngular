import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
// Esto es para traer distintos datos
habilidades: any = []

  constructor(private datos: DatosService ) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
    this.habilidades= datos.habilidades;
     })

  }

}
