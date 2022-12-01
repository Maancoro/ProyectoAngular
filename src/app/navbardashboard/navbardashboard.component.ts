import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-navbardashboard',
  templateUrl: './navbardashboard.component.html',
  styleUrls: ['./navbardashboard.component.css']
})
export class NavbardashboardComponent implements OnInit {
  // Esto es para traer distintos datos

logoAp: string = '';
logoInti: string = '';

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      
      this.logoAp = datos.logoAp;
      this.logoInti = datos.logoInti;
     })
  }

}
