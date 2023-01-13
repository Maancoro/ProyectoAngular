import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-portfoliodashboard',
  templateUrl: './portfoliodashboard.component.html',
  styleUrls: ['./portfoliodashboard.component.css']
})
export class PortfoliodashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      inicio: ['', [Validators.required]],
      page: ['', [Validators.required]],
      cv: ['', [Validators.required]],
     })
   
  }

  ngOnInit(): void {}
  get Inicio(){
    return this.form.get("inicio");
   }
   
  get Page(){
    return this.form.get("page");
  }
  get cv(){
    return this.form.get("cv");
  }

  get InicioValid(){
    return this.Inicio?.touched && !this.Inicio?.valid;
  }
  get PageValid(){
    return this.Page?.touched && !this.Page?.valid;
  } 
  get cvValid(){
    return this.cv?.touched && !this.cv?.valid;
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
