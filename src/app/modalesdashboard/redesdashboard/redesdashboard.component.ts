import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-redesdashboard',
  templateUrl: './redesdashboard.component.html',
  styleUrls: ['./redesdashboard.component.css']
})
export class RedesdashboardComponent implements OnInit {
  form: FormGroup;
  Red: any;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
    red: ['', [Validators.required]],
    url: ['', [Validators.required]],
   })
}

ngOnInit(): void {}
get red(){
  return this.form.get("red");
 }
 
get Url(){
  return this.form.get("url");
}

get RedValid(){
  return this.Red?.touched && !this.Red?.valid;
}
get UrlValid(){
  return this.Url?.touched && !this.Url?.valid;
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
