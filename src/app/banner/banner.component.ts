import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //inicializar variable de instancia para almacenar los datos con los que trata el Servicio
imagenBanner: any = []


  constructor(
    private datosService: DatosService ) { }
    //Inyectar el servicio para tener acceso en la clase a los Metodos


  ngOnInit(): void {
    this.datosService.getDatos().subscribe(datos =>{
      console.log(datos);
      this.imagenBanner= datos.imagenBanner;
     }) 
  }

}
