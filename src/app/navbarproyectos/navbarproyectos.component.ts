import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-navbarproyectos',
  templateUrl: './navbarproyectos.component.html',
  styleUrls: ['./navbarproyectos.component.css']
})
export class NavbarproyectosComponent implements OnInit {
 // Esto es para traer distintos datos
navbarproyectos : any = []
logoAp: string = '';
logoInti: string = ''; 

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.navbarproyectos = datos.navbar;
      this.logoAp = datos.logoAp;
      this.logoInti = datos.logoInti;
     })
  }

}
