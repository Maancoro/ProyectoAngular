import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  // Esto es para traer distintos datos
redes : any = []

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.redes = datos.redes;
  })

}
}
