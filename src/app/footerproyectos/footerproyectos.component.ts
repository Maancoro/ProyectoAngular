import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-footerproyectos',
  templateUrl: './footerproyectos.component.html',
  styleUrls: ['./footerproyectos.component.css']
})
export class FooterproyectosComponent implements OnInit {
 // Esto es para traer distintos datos 
redes: any = []
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.redes = datos.redes;
      })

}
}
