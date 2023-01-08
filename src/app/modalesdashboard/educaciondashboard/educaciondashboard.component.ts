import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educaciondashboard',
  templateUrl: './educaciondashboard.component.html',
  styleUrls: ['./educaciondashboard.component.css']
})
export class EducaciondashboardComponent implements OnInit {
  educacion: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { 
    this.educacion= this.formBuilder.group({ 
      institucion:['',[Validators.required]],
      anio:['',[Validators.required]],
      titulo:['',[Validators.required]],
  })
}

  ngOnInit(): void {}
  get institucion(){
    return this.educacion.get("institucion");
  }
  get anio(){
    return this.educacion.get("anio");
  }
  get titulo(){
    return this.educacion.get("titulo");
  }

  get InstitucionValid() {
    return this.institucion?.touched && !this.institucion?.valid;
   }
   get AnioValid() {
    return this.anio?.touched && !this.anio?.valid;
   }
   get TituloValid() {
    return this.titulo?.touched && !this.titulo?.valid;
   }
   
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.educacion.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.educacion.markAllAsTouched(); 
    }
  }
}



