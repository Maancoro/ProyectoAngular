import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menuproyectosdashboard',
  templateUrl: './menuproyectosdashboard.component.html',
  styleUrls: ['./menuproyectosdashboard.component.css']
})
export class MenuproyectosdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      inicio: ['', [Validators.required]],
      trabajo: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
   })
  }

  ngOnInit(): void {}
  get inicio(){
    return this.form.get("inicio");
   }
   
  get trabajo(){
    return this.form.get("trabajo");
  }
  get contacto(){
    return this.form.get("contacto");
  }

  get inicioValid(){
    return this.inicio?.touched && !this.inicio?.valid;
  }
  get trabajoValid(){
    return this.trabajo?.touched && !this.trabajo?.valid;
  }
  get contactoValid(){
    return this.contacto?.touched && !this.contacto?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
  
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  
  }

}
