import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectosrealizadosdashboard',
  templateUrl: './proyectosrealizadosdashboard.component.html',
  styleUrls: ['./proyectosrealizadosdashboard.component.css']
})
export class ProyectosrealizadosdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
      url: ['', [Validators.required]],
      name: ['', [Validators.required]],
      descrip: ['', [Validators.required]],
  })
}

ngOnInit(): void {}
get Url(){
  return this.form.get("url");
 }
 
get Name(){
  return this.form.get("name");
}
get Descrip(){
  return this.form.get("descrip");
}

get NameValid(){
  return this.Name?.touched && !this.Name?.valid;
}
get UrlValid(){
  return this.Url?.touched && !this.Url?.valid;
} 
get DescripValid(){
  return this.Descrip?.touched && !this.Descrip?.valid;
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
