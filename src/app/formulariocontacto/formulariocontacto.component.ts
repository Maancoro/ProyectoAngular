import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariocontacto',
  templateUrl: './formulariocontacto.component.html',
  styleUrls: ['./formulariocontacto.component.css']
})
export class FormulariocontactoComponent implements OnInit {
  form: FormGroup;

// Inyectar en el constructor el formBuilder
constructor(private formBuilder: FormBuilder) {
       ///Creamos el grupo de controles para el formulario de login
       this.form= this.formBuilder.group({
        name:['',[Validators.required]],
        email:['', [Validators.required, Validators.email]],
        message:['',[Validators.required,Validators.minLength(12)]],
       
        
     })
   }

  ngOnInit(): void {}

  get Name(){
    return this.form.get("name");
  }
 
  get Mail(){
   return this.form.get("email");
  }
  get Message(){
    return this.form.get("message");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }

  get MailValid() {
       return this.Mail?.touched && !this.Mail?.valid;
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
