import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educaciondashboard',
  templateUrl: './educaciondashboard.component.html',
  styleUrls: ['./educaciondashboard.component.css']
})
export class EducaciondashboardComponent implements OnInit {
  form: FormGroup;
  Institucion: any;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
      institucion:['',[Validators.required]],
      anio:['',[Validators.required]],
      titulo:['',[Validators.required]],
  })
}

  ngOnInit(): void {}
  get institucion(){
    return this.form.get("institucion");
  }
  get anio(){
    return this.form.get("anio");
  }
  get titulo(){
    return this.form.get("titulo");
  }

  get InstitucionValid() {
    return this.Institucion?.touched && !this.Institucion?.valid;
   }
   
   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}



