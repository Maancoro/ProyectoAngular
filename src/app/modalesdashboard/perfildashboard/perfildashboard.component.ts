import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfildashboard',
  templateUrl: './perfildashboard.component.html',
  styleUrls: ['./perfildashboard.component.css']
})
export class PerfildashboardComponent implements OnInit {
  perfil: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.perfil= this.formBuilder.group({ 
      url: ['', [Validators.required]],
      nya: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
     })
}

  ngOnInit(): void {}
  get url(){
    return this.perfil.get("url");
   }
   get nya(){
    return this.perfil.get("nya");
   }
   get titulo(){
    return this.perfil.get("titulo");
   }
   get UrlValid(){
    return this.url?.touched && !this.url?.valid;
  }
  get NyaValid(){
    return this.nya?.touched && !this.nya?.valid;
  }
  get TituloValid(){
    return this.titulo?.touched && !this.titulo?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
  
    if (this.perfil.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.perfil.markAllAsTouched(); 
    }
  
  }

}
