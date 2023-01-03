import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acercademidashboard',
  templateUrl: './acercademidashboard.component.html',
  styleUrls: ['./acercademidashboard.component.css']
})
export class AcercademidashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      name:['',[Validators.required ]], 
      profession:['',[Validators.required]],
      message:['',[Validators.required,Validators.minLength(20)]],
   })
  } 
  ngOnInit(): void {}
  get Name(){
    return this.form.get("name");
  }
  get Profession(){
    return this.form.get("profession");
  }
  get Message(){
    return this.form.get("message");
  }
  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }
  get ProfessionValid(){
    return this.Profession?.touched && !this.Profession?.valid;
  }
  get MessageValid(){
    return this.Message?.touched && !this.Message?.valid;
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
