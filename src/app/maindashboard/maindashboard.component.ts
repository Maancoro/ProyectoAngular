import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
  // Esto es para traer distintos datos
botones1 : any = []
botones2 : any = []
botones3 : any = []
botones4 : any = []
botones5 : any = []


  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(datos =>{
      this.botones1 = datos.botones1;
      this.botones2 = datos.botones2;
      this.botones3 = datos.botones3;
      this.botones4 = datos.botones4;
      this.botones5 = datos.botones5;
      
      
     }) 
  }

}
