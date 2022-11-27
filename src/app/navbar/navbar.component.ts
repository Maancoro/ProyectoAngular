import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// Esto es para traer distintos datos
navbar : any = []
logoAp: string = '';
logoInti: string = '';
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.navbar = datos.navbar;
      this.logoAp = datos.logoAp;
      this.logoInti = datos.logoInti;
     })
  }

}
