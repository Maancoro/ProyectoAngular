import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footerdashboard',
  templateUrl: './footerdashboard.component.html',
  styleUrls: ['./footerdashboard.component.css']
})
export class FooterdashboardComponent implements OnInit {
  footer: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.footer= this.formBuilder.group({
      anio: ['', [Validators.required]],
      name: ['', [Validators.required]],
    })
   }
   

   ngOnInit(): void {}
   get Anio(){
     return this.footer.get("anio");
    }
    
   get Name(){
     return this.footer.get("name");
   }

   get AnioValid(){
    return this.Anio?.touched && !this.Anio?.valid;
  }
  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  } 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
  
    if (this.footer.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.footer.markAllAsTouched(); 
    }
  
  }
  
  

}
