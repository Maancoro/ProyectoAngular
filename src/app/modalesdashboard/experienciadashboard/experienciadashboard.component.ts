import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experienciadashboard',
  templateUrl: './experienciadashboard.component.html',
  styleUrls: ['./experienciadashboard.component.css']
})
export class ExperienciadashboardComponent implements OnInit {
  experiencia: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.experiencia= this.formBuilder.group({
      empresa:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      cargo:['',[Validators.required]],

   })
  }

  ngOnInit(): void {}
  get empresa(){
    return this.experiencia.get("empresa");
  }
  get inicio(){
    return this.experiencia.get("inicio");
  }
  get fin(){
    return this.experiencia.get("fin");
  }
  get cargo(){
    return this.experiencia.get("cargo");
  }

  get EmpresaValid() {
    return this.empresa?.touched && !this.empresa?.valid;
   }
   get InicioValid() {
    return this.inicio?.touched && !this.inicio?.valid;
   } 
   get FinValid() {
    return this.fin?.touched && !this.fin?.valid;
   }
   get CargoValid() {
    return this.cargo?.touched && !this.cargo?.valid;
   }

   onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.experiencia.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.experiencia.markAllAsTouched(); 
    }
  }

}
