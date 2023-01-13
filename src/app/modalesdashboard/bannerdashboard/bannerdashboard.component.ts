import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bannerdashboard',
  templateUrl: './bannerdashboard.component.html',
  styleUrls: ['./bannerdashboard.component.css']
})
export class BannerdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      fondo:['',[Validators.required ]], 
      
   })
  }

  ngOnInit(): void {}
  get fondo(){
    return this.form.get("fondo");
  }
  get fondoValid(){
    return this.fondo?.touched && !this.fondo?.valid;
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
