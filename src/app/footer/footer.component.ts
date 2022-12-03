import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
//inicializar variable de instancia para almacenar los datos con los que trata el Servicio
copyright: string = '';

constructor(private datosService: DatosService) { }

ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio?
      this.datosService.getDatos().subscribe(datos =>{
      console.log(datos);
     //Definir informacion a mostrar
      this.copyright=datos.copyright;
      });
  }

}
