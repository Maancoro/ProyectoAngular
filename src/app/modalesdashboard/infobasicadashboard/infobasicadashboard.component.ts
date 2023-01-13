import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infobasicadashboard',
  templateUrl: './infobasicadashboard.component.html',
  styleUrls: ['./infobasicadashboard.component.css']
})
export class InfobasicadashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
      edad: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      cyp: ['', [Validators.required]], 
      idioma: ['', [Validators.required]], 
  })
}

  ngOnInit(): void {}
  get Edad(){
    return this.form.get("edad");
   } 
   get Mail(){
    return this.form.get("mail");
   }
   get Tel(){
    return this.form.get("tel");
   }
   get Cyp(){
    return this.form.get("cyp");
   }
   get Idioma(){
    return this.form.get("idioma");
   }

   get EdadValid(){
    return this.Edad?.touched && !this.Edad?.valid;
  }
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  } 
  get TelValid(){
    return this.Tel?.touched && !this.Tel?.valid;
  }
  get CypValid(){
    return this.Cyp?.touched && !this.Cyp?.valid;
  } 
  get IdiomaValid(){
    return this.Idioma?.touched && !this.Idioma?.valid;
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
