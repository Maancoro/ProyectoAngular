import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saludoproyectosdashboard',
  templateUrl: './saludoproyectosdashboard.component.html',
  styleUrls: ['./saludoproyectosdashboard.component.css']
})
export class SaludoproyectosdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      saludo: ['', [Validators.required]],
  })
}

ngOnInit(): void {}
get saludo(){
  return this.form.get("saludo");
 }
 get saludoValid(){
  return this.saludo?.touched && !this.saludo?.valid;
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
