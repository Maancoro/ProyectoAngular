import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skilldashboard',
  templateUrl: './skilldashboard.component.html',
  styleUrls: ['./skilldashboard.component.css']
})
export class SkilldashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      habilidad:['',[Validators.required]],
      porcentaje:['',[Validators.required]],
  })
}

  ngOnInit(): void {}
  get Habilidad(){
    return this.form.get("habilidad");
   }
   
  get Porcentaje(){
    return this.form.get("porcentaje");
  }
  
  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad?.valid;
  }
  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
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
