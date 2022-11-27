import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-acercademiinfobasica',
  templateUrl: './acercademiinfobasica.component.html',
  styleUrls: ['./acercademiinfobasica.component.css']
})
export class AcercademiinfobasicaComponent implements OnInit {
//inicializar variable de instancia para almacenar los datos con los que trata el Servicio
acerca: string = '';
edad: string = '';
telefono: string = '';
email: string = '';
ciudad: string = '';
pais: string = '';
idioma: string = '';

  constructor(
     //Inyectar el servicio para tener acceso en la clase a los Metodos
     private datosService: DatosService ) { }


     ngOnInit(): void {
      //Esto es almacenar en la variable de instancia los datos recuperados por el servicio?
      this.datosService.getDatos().subscribe(datos =>{
      console.log(datos);
       //Definir informacion a mostrar
       this.acerca=datos.acerca;
       this.edad=datos.edad;
       this.telefono=datos.telefono;
       this.ciudad=datos.ciudad;
       this.pais=datos.pais;
       this.idioma=datos.idioma;
       this.email=datos.email;
      });

}
}
